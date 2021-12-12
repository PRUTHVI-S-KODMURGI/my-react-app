import React from 'react';
import './Header.css';
import './index.css';
import logo from './logo_1.jpg';
import { Link } from 'react-router-dom';
const Header = () =>{
return(
  <header className="text-white body-font bg-gray-900 ">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    
      <img src={logo} alt='COMPANY_LOGO' className="w-30 h-20" style={{borderRadius:20}}/>
      
      <span className="ml-3 text-xl text-white">SMART PRO</span>
    </div>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link className="mr-5 hover:text-gray-400 " to="/business_login.js">Business Login</Link>
      <Link className="mr-5 hover:text-gray-400 " to="/">Home</Link>
      <Link className="mr-5 hover:text-gray-400 " to="/about_us.js">About Us</Link>
      <div className="dropdown mr-5">
          <button className="dropbtn">Products</button>
          <div className="dropdown-content">
            <Link to="/products.js">CCTV Accessories</Link>
            <Link to="/products1.js">Computer Cabels</Link>
            <Link to="/products2.js">Computer Accessories</Link>
            <Link to="/products3.js">Computer Peripherals</Link>
            <Link to="/products4.js">Laptop Accessories</Link>
            <Link to="/products5.js">Network Products</Link>
            <Link to="/products6.js">USB Products</Link>
          </div>
        </div>
      <Link className="mr-5 hover:text-gray-400 " to="support.js">Support</Link>
      <Link className="mr-5 hover:text-gray-400 " to="contact_us.js">Contact Us</Link>
    </nav>
    {/* <!--<button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>--> */}
  </div>
</header>
 
)
}

export default Header