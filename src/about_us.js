import React from 'react';

import './index.css';

const AboutUs = () => {
    return (
      <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">About Us</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We are Importers & Distributors of Computer Accessories, Laptop acessories, Computer Cables, Networking Accessories, We started our operations in 1997 and supply products all over India </p>
        </div>
        <div className="flex flex-wrap">
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">20+ Years of Service</h2>
            <p className="leading-relaxed text-base mb-4">We are established in 1997 we have expereince over more than 20 years with great customer satisfaction.Our top priority is customer service</p>

          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Quality Products</h2>
            <p className="leading-relaxed text-base mb-4">Our Products are of Premium Quality.We provide the best and exclusive range of computer products by maintaining quality, so that the customers can get the best beyond market practice. </p>
            
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">100+ Products </h2>
            <p className="leading-relaxed text-base mb-4">We have large potfolio of products that are categorized in Computers Cables, Laptop Accessories, USB Products, Computer Accessories, CCTV Camera and Accessories, Networking Products and many more </p>
            
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">150+ cities</h2>
            <p className="leading-relaxed text-base mb-4">We are supplying our products to wholesalers and retailers all over India in around 200 cities. </p>
          </div>
        </div>
      </div>
    </section>
    )
}

export default AboutUs