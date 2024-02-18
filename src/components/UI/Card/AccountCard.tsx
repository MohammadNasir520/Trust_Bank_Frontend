import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AccountCard = ({data}:any) => {
    const {name,imageUrl,type} = data;
    console.log(data);
    return (
       <Link href={`accounts/${type}`}>
         <div className="flex flex-col justify-center items-center  border-2 font-medium text-md rounded-lg p-6  w-full ">
        <h1 className="p-2">{name}</h1>
        <Image
          src={imageUrl}
          alt={name}
          className="w-20 h-20 object-cover object-center"
          width={500}
          height={500}
        />
      </div>
       </Link>
    );
};

export default AccountCard;