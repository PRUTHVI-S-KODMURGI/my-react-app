import React from 'react';
import './index.css';

const Complaints = () => {
    return(
    <section className="flex flex-col justify-center items-center">
        <form className="w-full max-w-lg p-16" method="post" target="_blank" action="/Complaint">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              First Name
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" name="FirstName" placeholder="Enter First name" required></input>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              Last Name
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" name="LastName" placeholder="Enter last name " required></input>
          </div>
        </div>
        <div className="block">
            <span className="text-gray-700">Specify your issue</span>
            <div className="mt-2">
              <div>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" name="type1" />
                  <span className="ml-2">Product was damaged</span>
                </label>
              </div>
              <div>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" name="type2" />
                  <span className="ml-2">Product is not working</span>
                </label>
              </div>
              <div>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" name="type3" />
                  <span className="ml-2">The price was altered (compared to website)</span>
                </label>
              </div>
              <div>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" name="type4" />
                  <span className="ml-2">Warrenty was not issued</span>
                </label>
              </div>
            </div>
          </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <p className="text-gray-600 text-xs italic"></p>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              Other issues:
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" name="otherType" placeholder="Enter any other issues"></input>
            
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
              City
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" name="city" placeholder="Enter City"></input>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
              State
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" name="state" placeholder="Enter state"></input>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
              Zip
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" name="pin" placeholder="5600--"></input>
          </div>
          <div>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                Phone number
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="tel" name="phno" placeholder="Phone number"/>
          </div>
        </div>
        <div className="content-center">
             <input className=" appearance-none  bg-blue-200 text-blue-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"type = "Submit" />
        </div>
       
      </form>
        </section>
        )
}

export default Complaints;