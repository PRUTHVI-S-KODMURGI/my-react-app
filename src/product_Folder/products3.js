import React from 'react';
import USC from './product_img4/2_5_inch_USB_3_0_SATA_CASING.jpg'
import UTSC from './product_img4/2_5_INCH_USB_3_0_TRANSPARENT_SATA_CASING.jpg'
import BD from './product_img4/4_0_BLUETOOTH_DONGLE.jpeg'
import LP from './product_img4/LASER_PRESENTER.jpeg'
import RC from './product_img4/RISER_CARD_009S.jpeg'
import SPC from './product_img4/Smart_Pro_12_5mm_CADDY.jpeg'
import 'C:/workspace/WT/my-react-app/src/index.css';
import './products.css';
const Products3 = () => {
    return ( 
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">AN EXCLUSIVE RANGE OF COMPUTER ACCESSORIES</h1>
        </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block zoom" style={{objectFit:"contain"}} src= {USC}></img>
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">2.5 inch USB 3.0 SATA CASING</h2>
                <p className="mt-1">$16.00</p>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block zoom"  style={{objectFit:"contain"}} src={UTSC}></img>
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">2.5 INCH USB 3.0 TRANSPARENT SATA CASING</h2>
                <p className="mt-1">$21.15</p>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block zoom" style={{objectFit:"contain"}} src={BD}></img>
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">4.0 BLUETOOTH DONGLE</h2>
                <p className="mt-1">$12.00</p>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block zoom" style={{objectFit:"contain"}} src={LP}></img>
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">LASER PRESENTER</h2>
                <p className="mt-1">$18.40</p>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block zoom" style={{objectFit:"contain"}} src={RC}></img>
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">RISER CARD 009S</h2>
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
                <img alt="ecommerce" className="object-cover object-center w-full h-full block zoom" style={{objectFit:"contain"}} src={SPC}></img>
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">SMART PRO (12mm) CADDY</h2>
                <p className="mt-1">$12.00</p>
              </div>
            </div>
            {/* <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block zoom" src="https://dummyimage.com/428x268"></img>
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">TLP 400 Blows</h2>
                <p className="mt-1">$18.40</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
     );
}
 
export default Products3;