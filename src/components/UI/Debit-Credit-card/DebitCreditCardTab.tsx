"use client";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import DebitCreditCard from "./DebitCreditCard";
import { MdAccountBalance } from "react-icons/md";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { FaRegCreditCard } from "react-icons/fa";
import { MdOutlineCreditCardOff } from "react-icons/md";
import { CiBank } from "react-icons/ci";
import { MdSupervisorAccount } from "react-icons/md";

import loanImg from "@/assets/images/loan.png";

const DebitCreditCardTab = () => {
  const tabData = [
    
    {
      name: "Accounts",
      icon: <MdSupervisorAccount size={25} />,
      panelData: [
        {
          title: "Current Account",
          description: "ZERO charges on ATM transactions",
          image: loanImg,
          link:"/accounts/current"
        },
        {
          title: "Saving Account",
          description: "ZERO charges on ATM transactions",
          image: loanImg,
          link:"/accounts/saving"
        },
        {
          title: "Student Account",
          description: "ZERO charges on ATM transactions",
          image: loanImg,
          link:"/accounts/student"
        },
        {
          title: "Merchant Account",
          description: "ZERO charges on ATM transactions",
          image: loanImg,
          link:"/accounts/merchant"
        },
      ],
    },
    {
      name: "Loan",
      icon: <RiMoneyDollarBoxLine size={20} />,
      panelData: [
        {
          title: "Personal Loan",
          description: "Flexible repayment options available",
          image: loanImg,
          link:"/loans/personal"
        },
        {
          title: "Corporate / Business Loan",
          description: "Low interest rates for startups",
          image: loanImg,
          link:"/loans/corporate"
        },
        {
          title: "Education Loan",
          description: "Special discounts for academic achievers",
          image: loanImg,
          link:"/loans/education"
        },
        {
          title: "Home Loan",
          description: "Easy approval process with minimal documentation",
          image: loanImg,
          link:"/loans/home"
        },
      ],
    },
    
    {
      name: "Credit",
      icon: <FaRegCreditCard size={20} />,
      panelData: [
        {
          title: "Platinum Rewards Cardt",
          description: "Earn rewards with every purchase",
          image: loanImg,
          link:"/credit-card/1"
        },
        {
          title: "Gold Cashback Card",
          description: "Get cashback on every transaction",
          image: loanImg,
          link:"/credit-card/2"
        },
        {
          title: "Student Savings Card",
          description: "Designed for students with exclusive perks",
          image: loanImg,
          link:"/credit-card/3"
        },
        {
          title: "Business Expense Card",
          description: "Track and manage business expenses easily",
          image: loanImg,
          link:"/credit-card/4"
        },
        {
          title: "Travel Rewards Card",
          description: "Earn rewards for your travel expenses",
          image: loanImg,
          link:"/credit-card/5"
        },
      ],
    },
    {
      name: "Debit",
      icon: <MdOutlineCreditCardOff size={20} />,
      panelData: [
        {
          title: "Basic Debit Card",
          description: "Simple and convenient everyday banking",
          image: loanImg,
          link:"/debit-card/1"
        },
        {
          title: "Youth Savings Card",
          description: "Start saving early with youth-focused benefits",
          image: loanImg,
          link:"/debit-card/2"
        },
        {
          title: "Student Debit Card",
          description: "Banking tailored for students' needs",
          image: loanImg,
          link:"/debit-card/3"
        },
        {
          title: "Family Debit Card",
          description: "Manage family finances with ease",
          image: loanImg,
          link:"/debit-card/4"
        },
        {
          title: "Senior Debit Card",
          description: "Banking solutions for retirees",
          image: loanImg,
          link:"/debit-card/5"
        },
      ],
    },
  ];

  return (
    <div className="-mt-20">
      {/* Use responsive styles for padding */}
      <Tabs
        size="sm"
        variant="enclosed"
        className="px-4 md:px-8 lg:px-16 py-3 "
      >
        <TabList className="backdrop-blur-md bg-white/85 text-white rounded-t-xl overflow-x-auto">
          {tabData?.map((tab, tabIndex) => (
            <Tab
              key={tabIndex}
              className="flex flex-col items-center rounded justify-center h-16 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 relative text-blue-950 hover:bg-white/50"
              _selected={{ color: "white", bg: "#012169", font: "bold" }}
            >
              <span>{tab?.icon}</span>
              <h1 className="text-[14px] md:text-[16px] lg:text-[18px]">
                {tab?.name}
              </h1>
              <div
                style={{
                  borderRight: "1px",
                  borderColor: "black",
                }}
                className="border    h-7 absolute top-9/12 right-0"
              ></div>
            </Tab>
          ))}
        </TabList>
        <TabPanels className="my-9">
          {tabData?.map((tab, tabIndex) => (
            <TabPanel key={tabIndex}>
              {/* Adjust grid layout for responsiveness */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {tab?.panelData.map((data, dataIndex) => (
                  <div key={dataIndex}>
                    <DebitCreditCard data={data} />
                  </div>
                ))}
              </div>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default DebitCreditCardTab;
