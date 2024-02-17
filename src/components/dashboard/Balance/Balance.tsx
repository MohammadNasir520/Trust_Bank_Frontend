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


const Countrydata: ICountry[] = [
  { name: "USA", rise: true, value: 21942.83, id: 1 },
  { name: "Ireland", rise: false, value: 19710.0, id: 2 },
  { name: "Ukraine", rise: false, value: 12320.3, id: 3 },
  { name: "Sweden", rise: true, value: 9725.0, id: 4 },
];

const Balance = ({ bankProfile }: any) => {

  return (
    <div className="flex p-4 flex-col h-full border rounded-lg mt-3 bg-white">
      <div className="flex justify-between items-center">
        <div className="text-xl">Foreign Currency</div>

      </div>
      {bankProfile?.bankBalances.map((balance: any) => (

        <div className="flex items-center mt-3" key={balance?.id}>
          {/* <div className="">{balance?.id}</div> */}

          {/* <Image
            src="https://thumbs2.imgbox.com/d7/67/ypGcIb5O_t.jpg"
            alt={name}
            width={32}
            height={32}
            quality={100}

            className="ml-2 w-6 h-6"
          /> */}
          <div className="ml-2 text-sm"><p>{balance?.currency}</p></div>
          <div className="flex-grow" />
          <div className="text-sm">{`${Number(balance?.balance)?.toFixed(2)}`}  </div>

          {/* <Icon path="res-react-dash-options" className="w-2 h-2" /> */}
        </div>
      ))}
      <div className="flex-grow" />
      {/* <div className="flex justify-center">
        <div className="">Check All</div>
      </div> */}
    </div>
  );
}

export default Balance