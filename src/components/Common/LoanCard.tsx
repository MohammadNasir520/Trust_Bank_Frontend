import Image from "next/image";
import React from "react";
import AgriLogo from "../../../public/assets/images/regenerative.png";
import Link from "next/link";
import { FaDollarSign } from 'react-icons/fa';

function convertToSlug(str: string) {
  return str
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^\w-]/g, ''); // Remove non-word characters
}

const LoanCard = ({ demoData }: any) => {
  return (
    <>
      {demoData.map((card: any) => (
        <div
          key={card.id}
          className="flex flex-col lg:flex-row w-full bg-white shadow-lg border hover:shadow-xl mb-4 rounded-lg overflow-hidden"
        >
          <div className="lg:w-full overflow-hidden md:h-300px sm:h-200px">
            <Image
              src={card.image}
              alt="agri image"
              width={500}
              height={500}
              className="h-full overflow-hidden cursor-pointer hover:scale-110 transition-transform transform ease-out rounded-t-lg lg:rounded-t-none lg:rounded-l-lg"
            />
          </div>
          <div className="md:w-full flex flex-col space-y-6 p-6 relative">
            <div className="flex items-center justify-center">
              <Image
                src={AgriLogo}
                alt="avatar"
                className="relative inline-block h-12 w-12 !rounded-full object-cover object-center"
              />
            </div>
            <h1 className="text-xl md:text-2xl font-semibold">{card.title}</h1>
            <p className="text-gray-600 text-sm md:text-base mt-2 mb-4">
              {card.description}
            </p>
            <div className="flex items-center justify-between ">
              <div className="flex items-center">
                <span className="text-[#ffcc25] text-lg mr-1">
                ৳
                </span>
                <span>{`${card.amount}`}</span>
              </div>
              <Link href={`/loans/${card.type}/${convertToSlug(card.title)}`}>
                <p className="bg-[#1F305E] px-6 py-3 text-white rounded-full hover:bg-[#012169] transition-all duration-300 self-end">
                  Read More
                </p>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default LoanCard;
