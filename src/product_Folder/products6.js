import React from 'react';
import PUH from './product_img7/4_PORT_USB_HUB.jpg'
import BD from './product_img7/5_BLUETOOTH_DONGLE.jpeg'
import TCTUFO from './product_img7/TYPE_C__TO_USB_FEMALE_OTG_CONVERTER.jpeg'
import UTL from './product_img7/USB_3_TO_LAN.jpeg'
import UL from './product_img7/USB_LIGHT.jpeg'
import UTSP from './product_img7/USB_TO_SERIAL_9_PIN.jpg'
import 'C:/workspace/WT/my-react-app/src/index.css';
import './products.css';
const Products6 = () => {
    return ( 
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">AN EXCLUSIVE RANGE OF NETWORKING PRODUCTS</h1>
        </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block zoom" style={{objectFit:"contain"}} src={PUH}></img>
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">4 PORT USB HUB</h2>
                <p className="mt-1">$16.00</p>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block zoom"  style={{objectFit:"contain"}} src={BD}></img>
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">5.0 BLUETOOTH DONGLE</h2>
                <p className="mt-1">$21.15</p>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block zoom" style={{objectFit:"contain"}} src={TCTUFO}></img>
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">TYPE C TO USB FEMALE OTG CONVERTER</h2>
                <p className="mt-1">$12.00</p>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block zoom" style={{objectFit:"contain"}} src={UTL}></img>
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">USB 3.0 TO LAN</h2>
                <p className="mt-1">$18.40</p>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block zoom" style={{objectFit:"contain"}} src={UL}></img>
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">USB LIGHT</h2>
                <p className="mt-1">$16.00</p>
              </div>
            </div>
            {/* <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block zoom" src="https://dummyimage.com/425x265"></img>
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                <p className="mt-1">$21.15</p>
              </div>
            </div> */}
            <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block zoom" style={{objectFit:"contain"}} src={UTSP}></img>
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">USB TO SERIAL 9 PIN</h2>
                <p className="mt-1">$12.00</p>
              </div>
            </div>
            {/* <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block zoom" src="https://dummyimage.com/428x268"></img>
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                <p className="mt-1">$18.40</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
     );
}
 
export default Products6;