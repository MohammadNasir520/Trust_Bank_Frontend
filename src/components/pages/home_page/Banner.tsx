'use client'

import React from 'react';
import Image from 'next/image';
import banner from "../../../public/assets/images/wealth_offer_banner.webp";

const Banner = () => {
    return (
        <div className=" hero ">
            <div className="  lg:px-32 lg:py-24 text-white w-4/6  ">
                <p className="text-xs mb-2">Manage Your Wealth</p>
                <p className="text-3xl mb-6">
                    Open a Wealth account and get access to over 11,000 stocks and ETFs in Global and UAE markets, all from the palm of your hand.
                </p>
                <button className="bg-[#03002e] hover:bg-blue-700 text-white font-bold py-3 px-7 rounded text-sm">
                    Open Your Account Now
                </button>
            </div>
        </div>
    );
};

export default Banner;
