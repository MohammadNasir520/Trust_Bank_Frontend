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
        {
          title: "Savings Account",
          description: "ZERO charges on ATM transactions",
          image: loanImg,
        },
      ],
    },
  ];

  return (
    <div className=" min-h-screen ">
      <Tabs size="md" variant="enclosed" className="px-[150px] py-3">
        <TabList className=" backdrop-blur-md bg-white/85 text-white rounded-t-xl ">
          {tabData?.map((tab) => (
            <Tab
              className="flex items-center rounded  justify-center h-16 w-32 relative text-blue-950  hover:bg-white/50 "
              _selected={{ color: "white", bg: "blue", font: "bold" }}
            >
              <h1> {tab?.name}</h1>
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
        <TabPanels className="my-5">
          {tabData?.map((tab) => (
            <TabPanel>
              <div className="grid grid-cols-3 gap-5 ">
                {tab.panelData.map((data) => (
                  <div>
                    <DebitCreditCard></DebitCreditCard>
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
