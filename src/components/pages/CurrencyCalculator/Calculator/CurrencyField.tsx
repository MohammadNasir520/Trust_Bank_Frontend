"use client";

import { Text } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const currenciesData = [
  { flag: "/assets/united-kingdom-icon.webp", currency: "USD" },
  { flag: "/assets/united-kingdom-icon.webp", currency: "GBP" },
];

const CurrencyField = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: any) => {
    console.log(`Selected option: ${option}`);
    setIsOpen(false);
  };

  return (
    <div className="w-full relative grid-cols-span-1 lg:col-span-2 flex flex-col gap-4">
      <div className="flex items-center w-full relative">
        <Image
          className="w-6 h-6 absolute left-4"
          alt=""
          width={100}
          height={100}
          src="/assets/usa-icon.webp"
        />

        <input
          type="text"
          className="w-full border border-gray-300 py-2 pr-2 pl-12 rounded-md text-gray-900 sm:text-sm sm:leading-6 placeholder:text-gray-900 focus:outline-none focus:rounded-bl-none focus:rounded-br-none bg-gray-50 appearance-none"
          placeholder="USD"
          onClick={toggleDropdown}
        />
        <div className="absolute right-4">
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </div>
      <div>
        <input
          type="text"
          className="w-full border border-gray-300 py-2 px-4 rounded-md text-gray-900 sm:text-sm sm:leading-6 placeholder:text-gray-900 focus:outline-none bg-gray-50 appearance-none"
          placeholder="Amount to transfer"
        />
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 top-[41px] w-full rounded-tl-none rounded-tr-none rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-0" role="none">
            {/* Dropdown items */}
            {currenciesData.map((el, index) => (
              <div
                key={index}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer flex items-center gap-1"
                role="menuitem"
                onClick={() => handleOptionClick(el.currency)}
              >
                <Image
                  className="w-6 h-6"
                  alt=""
                  width={100}
                  height={100}
                  src={el.flag}
                />
                <Text>{el.currency}</Text>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrencyField;
