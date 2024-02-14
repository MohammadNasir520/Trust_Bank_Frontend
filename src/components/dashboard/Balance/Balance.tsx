'use client'
import { Icon } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react'

interface ICountry {
  name: string;
  rise: boolean;
  value: number;
  id: number;
}


const Countrydata : ICountry[] = [
  { name: "USA", rise: true, value: 21942.83, id: 1 },
  { name: "Ireland", rise: false, value: 19710.0, id: 2 },
  { name: "Ukraine", rise: false, value: 12320.3, id: 3 },
  { name: "Sweden", rise: true, value: 9725.0, id: 4 },
];

const Balance = () => {
  return (
    <div className="flex p-4 flex-col h-full ">
      <div className="flex justify-between items-center">
        <div className=" font-bold">Foreign Currency</div>
        <Icon path="res-react-dash-plus" className="w-5 h-5" />
      </div>
      {Countrydata.map(({ name, rise, value, id }) => (
        <div className="flex items-center mt-3" key={id}>
          <div className="">{id}</div>

          <Image
            src="https://thumbs2.imgbox.com/d7/67/ypGcIb5O_t.jpg"
            alt={name}
            width={32}
            height={32}
            quality={100}
          
            className="ml-2 w-6 h-6"
          />
          <div className="ml-2">{name}</div>
          <div className="flex-grow" />
          <div className="">{`$${value.toLocaleString()}`}</div>
          <Icon
            path={
              rise ? "res-react-dash-country-up" : "res-react-dash-country-down"
            }
            className="w-4 h-4 mx-3"
          />
          <Icon path="res-react-dash-options" className="w-2 h-2" />
        </div>
      ))}
      <div className="flex-grow" />
      <div className="flex justify-center">
        <div className="">Check All</div>
      </div>
    </div>
  );
}

export default Balance