'use client'
import React, { useEffect, useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { FaCar } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { IoHomeOutline } from "react-icons/io5";
import { IoMdFlashlight } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Link from "next/link";

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(100);
  const [loanTerm, setLoanTerm] = useState(6);
  const [monthlyRepayment, setMonthlyRepayment] = useState(0);

  


  const handleAmountChange = (e:any) => {
    const amount =Number(e.target.value)
    setLoanAmount(amount);
    console.log(typeof(amount))
  };

  const handleTermChange = (e:any) => {
    const term =Number(e.target.value);
    
    setLoanTerm(term);
  };

  useEffect(() => {
    const repayment = loanAmount * (6 / 100) * (loanTerm / 12);
    setMonthlyRepayment(repayment);
    
  },[loanAmount, loanTerm]);
  

  return (
    <div className="w-full lg:w-[90%] mx-auto">
      <div className="grid grid-cols-5">
        <div className="col-span-5 md:col-span-3 lg:col-span-3 white py-4 h-[350px] flex items-center justify-center">
          <Tabs isLazy={true} size="md" variant="enclosed">
            <TabList className="w-full flex justify-center gap-3">
              <Tab
                _selected={{
                  borderBottom: "2px solid #012169",
                }}
              >
                <button className="flex flex-col items-center">
                  <FaCar size={35} color="#012169" />
                  Vehicle Loan
                </button>
              </Tab>
              <Tab
                _selected={{
                  borderBottom: "2px solid #012169",
                }}
              >
                <button className="flex flex-col items-center">
                  <GiReceiveMoney size={35} color="#012169" />
                  Personal Loan
                </button>
              </Tab>
              <Tab
                _selected={{
                  borderBottom: "2px solid #012169",
                }}
              >
                <button className="flex flex-col items-center">
                  <IoHomeOutline size={35} color="#012169" />
                  Home Loan
                </button>
              </Tab>
            </TabList>
            <TabPanels className="flex items-center justify-center pt-3">
              <TabPanel>
                <div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm text-center mb-2"
                      htmlFor="loanAmount"
                    >
                      Loan Amount: ${loanAmount}
                    </label>
                    <input
                      type="range"
                      id="loanAmount"
                      min="1000"
                      max="50000"
                      step="1000"
                      value={loanAmount}
                      onChange={handleAmountChange}
                      className="w-[400px] lg:w-[600px] appearance-none rounded-md bg-gray-200 h-3 outline-none"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm text-center mb-2"
                      htmlFor="loanTerm"
                    >
                      Loan Term: {loanTerm} months
                    </label>
                    <input
                      type="range"
                      id="loanTerm"
                      min="6"
                      max="60"
                      step="6"
                      value={loanTerm}
                      onChange={handleTermChange}
                      className="w-full appearance-none rounded-md bg-gray-200 h-3 outline-none"
                    />
                  </div>
                  <p>
                    For <span className="font-bold">vehicle</span> loan your
                    interest rate is 4.5% / month
                  </p>
                </div>
              </TabPanel>
              <TabPanel>
                <div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm text-center mb-2"
                      htmlFor="loanAmount"
                    >
                      Loan Amount: ${loanAmount}
                    </label>
                    <input
                      type="range"
                      id="loanAmount"
                      min="1000"
                      max="50000"
                      step="1000"
                      value={loanAmount}
                      onChange={handleAmountChange}
                      className="w-[400px] lg:w-[600px] appearance-none rounded-md bg-gray-200 h-3 outline-none"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm text-center mb-2"
                      htmlFor="loanTerm"
                    >
                      Loan Term: {loanTerm} months
                    </label>
                    <input
                      type="range"
                      id="loanTerm"
                      min="6"
                      max="60"
                      step="6"
                      value={loanTerm}
                      onChange={handleTermChange}
                      className="w-full appearance-none rounded-md bg-gray-200 h-3 outline-none"
                    />
                  </div>
                  <p>
                    For <span className="font-bold">personal</span> loan your
                    interest rate is 4.5% / month
                  </p>
                </div>
              </TabPanel>
              <TabPanel>
                <div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm text-center mb-2"
                      htmlFor="loanAmount"
                    >
                      Loan Amount: ${loanAmount}
                    </label>
                    <input
                      type="range"
                      id="loanAmount"
                      min="1000"
                      max="50000"
                      step="1000"
                      value={loanAmount}
                      onChange={handleAmountChange}
                      className="w-[400px] lg:w-[600px] appearance-none rounded-md bg-gray-200 h-3 outline-none"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm text-center mb-2"
                      htmlFor="loanTerm"
                    >
                      Loan Term: {loanTerm} months
                    </label>
                    <input
                      type="range"
                      id="loanTerm"
                      min="6"
                      max="60"
                      step="6"
                      value={loanTerm}
                      onChange={handleTermChange}
                      className="w-full appearance-none rounded-md bg-gray-200 h-3 outline-none"
                    />
                  </div>
                  <p>
                    For <span className="font-bold">home</span> loan your
                    interest rate is 4.5% / month
                  </p>
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
        <div className="col-span-5 md:col-span-2 lg:col-span-2 h-[350px] grid grid-rows-5 outline-0 rounded-lg">
          <div
            className="row-span-3 bg-[#FFFFFF] flex flex-col justify-center items-center
          gap-2"
          >
            <p>Monthly Payments</p>
            <h1>
              USD <span>${monthlyRepayment}</span>
            </h1>
            <Link href="/">
              <button className="py-2 px-4 text-md bg-yellow-200 rounded-md">
                Get Started
              </button>
            </Link>

            <Link
              href="/"
              className="flex items-center gap-1 mt-2 text-[17px] "
            >
              Our fees and payment plan <MdArrowForwardIos />
            </Link>
          </div>
          <div className="row-span-2 bg-[#182F7C]">
            <div className="flex flex-col items-center justify-center gap-2 mt-3 ">
              <IoMdFlashlight size={25} color="black" />
              <h1 className="text-white font-serif text-[17px]">
                Borrow wisely
              </h1>
              <Link
                href="/"
                className="flex items-center font-serif text-[17px] text-white"
              >
                Read more <MdArrowForwardIos />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default LoanCalculator;
