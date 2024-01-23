import Image from 'next/image';
import React from 'react'
import card1 from '../../../../public/assets/images/card_carousel/credit-card.png'
import { TiTickOutline } from "react-icons/ti";
import { FaAngleRight } from "react-icons/fa";
import Link from 'next/link';

const Card = () => {
  return (
    <div className="flex justify-center my-8">
      <div className=" w-[400px]   rounded-lg shadow-lg">
        <div
          className="bg-cover bg-center h-56 p-4 rounded-t-lg relative"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)",
          }}
        >
          <div className="flex justify-end">
            <svg
              className="h-6 w-6 text-white fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z" />
            </svg>
          </div>
          <div className="absolute bottom-[-80px] lg:bottom-[-120px] left-1/2  -translate-x-1/2 -translate-y-1/2 shadow-lg">
            <Image
              alt="card"
              src={card1}
              width={500}
              height={500}
              className="w-[150px] lg:w-[200px] md:w-[200px]  rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="px-2 flex flex-col  pt-[70px] pb-3 bg-[#F8F4EC]">
          <h1 className="text-xl  lg:text-2xl fon-semibold">
            Premium Shopping credit card
          </h1>
          <hr className="my-2 h-[2px] bg-[#F0EDCF]" />
          <div>
            <h1 className="text-lg lg:text-xl ">Benefits</h1>

            <ul className="ml-2 mt-2">
              <li className="flex items-center gap-1 text-[14px] lg:text-[16px]">
                <TiTickOutline />
                Get 10% cashback
              </li>
              <li className="flex items-center gap-1 text-[14px] lg:text-[16px]">
                {" "}
                <TiTickOutline />
                Welcome offer
              </li>
              <li className="flex items-center gap-1 text-[14px] lg:text-[16px]">
                {" "}
                <TiTickOutline />
                Get Guest Miles
              </li>
              <li></li>
            </ul>
          </div>
          <hr className="h-[3px] bg-black my-2" />
          <div className="flex justify-between  items-center py-2">
            <Link href="/card_page">
              <button className="   px-5 py-1">Apply Now</button>
            </Link>
            <Link href="/card_page">
              <button className="   px-5 py-1 flex items-center gap-1">
                Know More <FaAngleRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card