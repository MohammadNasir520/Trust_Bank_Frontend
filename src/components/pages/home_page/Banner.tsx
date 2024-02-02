'use client'

import React from 'react';
import Image from 'next/image';
import banner from "../../../../public/assets/images/banner.webp";
import { RiAccountBoxLine } from 'react-icons/ri';

const Banner = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${banner.src})`,
        backgroundSize: '900px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // Set your desired width
        
    };
    
    return (
        <div className=""  >
            <div className="lg:hidden xl:hidden">
                <Image src={banner} alt="banner_img" layout="responsive"/>
                <div className="  lg:px-32  w-4/6 mx-auto  bg-[#012169] ">
                <p className="text-xs mb-2">Ready to get startd?</p>
                <p className="text-3xl mb-6">
                    It only takes a few minutes to register your free bank account.
                </p>
                <button className="bg-[#03002e] hover:bg-blue-700 text-white font-bold py-3 px-7 rounded text-sm">
                    Open  Account Now
                </button>
            </div>
            </div>
            <div className="w-full bg-[#012169]" style={backgroundImageStyle}>
      <div className="lg:px-32 lg:py-24 text-[#03002e] w-4/6">
        <div className="bg-white shadow-lg p-6 rounded-md transition-transform transform hover:scale-105">
          <p className="text-xs mb-2">Ready to get started?</p>
          <p className="text-3xl mb-6">
            It only takes a few minutes to register your free bank account.
          </p>
          <button className="bg-[#012169] hover:bg-blue-700 text-white font-bold py-3 px-5 rounded-md text-sm transition">
            <span>
              Open Account Now 
            </span>
          </button>
        </div>
      </div>
    </div>
          
        </div>
    );
};

export default Banner;
