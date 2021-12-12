import React from "react";
import './index.css';
import { Link } from "react-router-dom";
import BC from './product_Folder/product_img1/BNC_CABLE.jpeg';
import CSC from './product_Folder/product_img2/10_CM_SATA_CABLE.png'
import PHS from './product_Folder/product_img3/4_PORT_HDMI_SPLITTER.jpeg'
import ICT from './product_Folder/product_img6/3_IN_1_CRIMPING_TOOL.jpeg'
import PUH from './product_Folder/product_img7/4_PORT_USB_HUB.jpg'
import USC from './product_Folder/product_img4/2_5_inch_USB_3_0_SATA_CASING.jpg'
import LS from './product_Folder/product_img5/12_1_INCH_LAPTOP_SLEEVE.jpg'
const Home = () => {
    return ( 
        <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">AN EXCLUSIVE RANGE OF I.T PRODUCTS</h1>
      </div>
      <div className="flex flex-wrap -m-2" style={{alignItems: "center",
    justifyContent: "center"}}>
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <Link to='/products.js' className="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:bg-gray-300">
            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={BC} />
            <div className="flex-grow">
              <h2 className="text-gray-900 title-font font-medium">CCTV Accessories</h2>
              {/* <!--<p className="text-gray-500">UI Designer</p>--> */}
            </div>
        
          </Link>
        </div>

        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <Link to='/products1.js' className="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:bg-gray-300">
            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={CSC} />
            <div className="flex-grow">
              <h2 className="text-gray-900 title-font font-medium">Computer Cabels</h2>
            </div>
          </Link>
        </div>


        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <Link to='/products2.js' className="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:bg-gray-300">
            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={PHS} />
            <div className="flex-grow">
              <h2 className="text-gray-900 title-font font-medium">Computer Accessories</h2>
             
            </div>
          </Link>
        </div>


        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <Link to='/products3.js' className="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:bg-gray-300">
            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={USC} />
            <div className="flex-grow">
              <h2 className="text-gray-900 title-font font-medium">Computer Peripherals</h2>
              
            </div>
          </Link>
        </div>


        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <Link to='/products4.js' className="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:bg-gray-300">
            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={LS} />
            <div className="flex-grow">
              <h2 className="text-gray-900 title-font font-medium">Laptop Accessories</h2>
              
            </div>
          </Link>
        </div>


        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <Link to='/products5.js' className="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:bg-gray-300">
            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={ICT} />
            <div className="flex-grow">
              <h2 className="text-gray-900 title-font font-medium">Network Products</h2>
              
            </div>
          </Link>
        </div>


        <div className="p-2 lg:w-1/3 md:w-1/2 w-full" >
          <Link to='/products6.js' className="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:bg-gray-300">
            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={PUH} />
            <div className="flex-grow">
              <h2 className="text-gray-900 title-font font-medium">USB Products</h2>
              
            </div>
          </Link>
        </div>


        {/* <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <Link to='/products.js' className="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:bg-gray-300">
            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/104x94" />
            <div className="flex-grow">
              <h2 className="text-gray-900 title-font font-medium">Alper Kamu</h2>
              <p className="text-gray-500">System</p>
            </div>
          </Link>
        </div> */}


        {/* <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <Link to='/products.js' className="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:bg-gray-300">
            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/108x98" />
            <div className="flex-grow">
              <h2 className="text-gray-900 title-font font-medium">Rodrigo Monchi</h2>
              <p className="text-gray-500">Product Manager</p>
            </div>
          </Link>
        </div> */}


      </div>
    </div>
  </section>
     );
}
 
export default Home;