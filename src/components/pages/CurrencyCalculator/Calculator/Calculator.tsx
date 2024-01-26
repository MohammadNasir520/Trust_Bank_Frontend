"use client";

import { useState } from "react";
import { PiArrowsLeftRightLight, PiArrowsLeftRight } from "react-icons/pi";
import { HiArrowsRightLeft } from "react-icons/hi2";

import CurrencyField from "./CurrencyField";
import { Text } from "@chakra-ui/react";

const Calculator = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: any) => {
    console.log(`Selected option: ${option}`);
    setIsOpen(false);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center py-6 gap-4 lg:gap-10">
      <div className="text-lg lg:text-3xl text-black font-extralight mt-10">
        Currency conversion calculator
      </div>

      <div className="w-2/3 px-8 py-12 border rounded bg-white grid grid-cols-span-1 lg:grid-cols-5 gap-8">
        <CurrencyField />

        <div className="col-span-1 flex flex-col items-center justify-center gap-2">
          <div className="bg-gray-100 p-4 rounded-full cursor-pointer">
            <HiArrowsRightLeft className="w-6 h-6" />
          </div>
          <Text className="text-sm text-gray-700">1 BDT = 106.99 USD</Text>
        </div>

        <CurrencyField />
      </div>
    </div>
  );
};

export default Calculator;
