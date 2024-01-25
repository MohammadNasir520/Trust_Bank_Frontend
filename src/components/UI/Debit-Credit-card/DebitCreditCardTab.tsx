"use client";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import DebitCreditCard from "./DebitCreditCard";

import loanImg from "@/assets/images/loan.png";

const DebitCreditCardTab = () => {
  const tabData = [
    {
      name: "popular",
      panelData: [
        {
          title: "Savings Account",
          description: "ZERO charges on ATM transactions",
          image: loanImg,
        },
      ],
    },
    {
      name: "Accounts",
      panelData: [
        {
          title: "Savings Account",
          description: "ZERO charges on ATM transactions",
          image: loanImg,
        },
        {
          title: "Savings Account",
          description: "ZERO charges on ATM transactions",
          image: loanImg,
        },
      ],
    },
    {
      name: "Loan",
      panelData: [
        {
          title: "Savings Account",
          description: "ZERO charges on ATM transactions",
          image: loanImg,
        },
        {
          title: "Savings Account",
          description: "ZERO charges on ATM transactions",
          image: loanImg,
        },
        {
          title: "Savings Account",
          description: "ZERO charges on ATM transactions",
          image: loanImg,
        },
      ],
    },
    {
      name: "popular",
      panelData: [
        {
          title: "Savings Account",
          description: "ZERO charges on ATM transactions",
          image: loanImg,
        },
        {
          title: "Savings Account",
          description: "ZERO charges on ATM transactions",
          image: loanImg,
        },
      ],
    },
    {
      name: "popular",
      panelData: [
        {
          title: "Savings Account",
          description: "ZERO charges on ATM transactions",
          image: loanImg,
        },
        {
          title: "Savings Account",
          description: "ZERO charges on ATM transactions",
          image: loanImg,
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
              className="flex items-center rounded justify-center h-16 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 relative text-blue-950 hover:bg-white/50"
              _selected={{ color: "white", bg: "#012169", font: "bold" }}
            >
              <h1>{tab?.name}</h1>
              <div
                style={{
                  borderRight: "1px",
                  borderColor: "#012169",
                }}
                className="border h-7 absolute top-9/12 right-0"
              ></div>
            </Tab>
          ))}
        </TabList>
        <TabPanels className="my-5">
          {tabData?.map((tab, tabIndex) => (
            <TabPanel key={tabIndex}>
              {/* Adjust grid layout for responsiveness */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {tab?.panelData.map((data, dataIndex) => (
                  <div key={dataIndex}>
                    <DebitCreditCard />
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
