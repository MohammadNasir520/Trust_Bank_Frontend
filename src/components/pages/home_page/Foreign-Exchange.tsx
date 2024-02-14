'use client'

import React from 'react';

//@ts-ignore
import Marquee from "react-fast-marquee";

const ForeignExchange = () => {
  // Sample data for demonstration
  const exchangeData = [
    { id: 1, name: 'USA', rate: 1.2345, amount: 1000 },
    { id: 2, name: 'Canada', rate: 1.5678, amount: 1500 },
    { id: 3, name: 'UK', rate: 0.8765, amount: 800 },
    { id: 4, name: 'Germany', rate: 1.3456, amount: 1200 },
    { id: 5, name: 'Japan', rate: 112.345, amount: 50000 },
    { id: 6, name: 'Australia', rate: 1.4567, amount: 2000 },
    { id: 7, name: 'France', rate: 0.9876, amount: 900 },
    { id: 8, name: 'Italy', rate: 1.1111, amount: 1100 },
    { id: 9, name: 'Spain', rate: 1.2222, amount: 1300 },
    { id: 10, name: 'India', rate: 74.567, amount: 30000 },
  ];

  return (
  <>
   <h1 className="text-center p-5 text-xl lg:text-3xl py-12 lg:py-15 gap-4 lg:gap-10">
      Rely on us - whatever the currency
        </h1>
    <Marquee direction="left" speed={30} style={{ overflow: 'hidden', width: '100%' }}>
      <div className="flex flex-no-wrap">
        {exchangeData.map((exchange) => (
          <div key={exchange.id} className="w-1/3 p-2">
            <div className="h-25 w-32 bg-gray-200 rounded p-2 flex justify-center items-center">
              {/* Left Div with Country Flag */}
              <div className="flex items-center flex-col">
                <img
                  src="https://www.emiratesnbd.com/-/media/enbd/images/country/flags/usa-icon.png" // Replace with the actual path to your country flag image
                  alt="Country Flag"
                  className="rounded"
                  height={35}
                  width={35}
                />
                <p className="mt-1" style={{ fontSize: '12px' }}>
                  {exchange.name}
                </p>
              </div>

              {/* Right Div with Text and Number */}
              <div className="flex flex-col justify-between ml-4"> {/* Adjusted marginLeft */}
                {/* First Text and Number Div */}
                <div>
                  <p className="text-xs font-semibold text-gray-700">Buy</p>
                  <p className="text-xs font-bold text-blue-600 ">{exchange.rate}</p>

                  <p className="border-b border-gray-300 mt-2 mb-2" />

                  <p className="text-xs font-semibold text-gray-700">Sell</p>
                  <p className="text-xs font-bold text-blue-600">${exchange.amount}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Marquee>
  </>
  );
};

export default ForeignExchange;
