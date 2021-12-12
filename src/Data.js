import React from "react"
import {useState} from "react"
import "./index.css"
import axios from "axios"

const Data = () => {
    var [count, setCount] = useState(0)
    var [deleted, setDeleted]=useState(
    {
        Fname:"",
        Lname:"",
        tp1:null,
        tp2:null,
        tp3:null,
        tp4:null,
        tp5:"",
        City:"",
        State:"",
        zip:"",
        phone_no:""
    })
    var [display,setDisplay] = useState(1)


    axios.post("http://localhost:9002/count", count)
    .then(
        res => {
            setCount(res.data[0])
        })
 


    const delete1 = () => {
        if(display||!count){
                axios.post("http://localhost:9002/delete",deleted)
            .then(
            res => {
                setDeleted(res.data)
                if(deleted.message)
                {
                    alert(deleted.message);
                }
                console.log(deleted)
            }
            )
            setDisplay(0);
        }
        
        
        
    }
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                    <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">Number of complaints registered are {count}</h1>
                    <button className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0" onClick={delete1}>Resolve Complaints</button>
                </div>
             </div>
             {deleted.Fname && !display && <>
             <h1 className='mx-16 px-5 py-24 text-gray-900 text-2xl'>One Complaint of following data has to be resolved</h1>
             <table className="table-fixed container ml-20 mr-96 text-2xl py-24 text-gray-900">
                    <tr>
                    <th className="w-16">First Name</th>
                    <td className="w-16">{deleted.Fname}</td>
                    </tr>
                    <tr className="bg-blue-200">
                    <th>Last Name</th>
                    <td>{deleted.Lname}</td>
                    </tr>
                    <tr>
                    <th>Product was damaged</th>
                    <td>{deleted.tp1}</td>
                    </tr>
                    <tr className="bg-blue-200">
                    <th>Product is not working</th>
                    <td>{deleted.tp2}</td>
                    </tr>
                    <tr>
                    <th>The price was altered (compared to website)</th>
                    <td>{deleted.tp3}</td>
                    </tr>
                    <tr className="bg-blue-200">
                    <th>Warrenty was not issued</th>
                    <td>{deleted.tp4}</td>
                    </tr>
                    <tr>
                    <th>Other issues:</th>
                    <td>{deleted.tp5}</td>
                    </tr>
                    <tr className="bg-blue-200">
                    <th>City</th>
                    <td>{deleted.City}</td>
                    </tr>
                    <tr>
                    <th>State</th>
                    <td>{deleted.State}</td>
                    </tr>
                    <tr className="bg-blue-200">
                    <th>Pin Code</th>
                    <td>{deleted.zip}</td>
                    </tr>
                    <tr>
                    <th>Phone Number</th>
                    <td>{deleted.phone_no}</td>
                    </tr>
            </table>
            <button className="text-white bg-indigo-500 mx-16 my-8 w-auto h-12 px-6 border-0 text-2xl focus:outline-none hover:bg-indigo-600 rounded" onClick={()=>{setDisplay(1)}}>Resolve</button>
            </>}
        </section>
    )
    }

export default Data;