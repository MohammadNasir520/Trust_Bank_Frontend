import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import GeneralManagers from "../GeneralManagers/GeneralManagers";
import BankHistory from '../BankProfile/BankHistory/BankHistory';

const DepositPage = () => {
  const TabListItems = ["Deposit Rates", "Management"];
    return (
        <>
             <div className="relative h-[400px] w-full bg-[url('https://www.bankrate.com/2020/04/06134711/HowToMakePaymentsWithYourPhone.jpeg?auto=webp&optimize=high&crop=16:9')] bg-no-repeat bg-cover bg-center">
          <div className="flex flex-col gap-5 justify-center h-full px-2 lg:px-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-[#F5EEE6] font-semibold ">
              Save time and money with credit cards
            </h1>
            <div className="w-full lg:w-[90%]">
              <p className="text-[18px] text-[#F5EEE6]  font-medium ">
                It's a good idea to pay off your credit card balance in full
                whenever you're able. Carrying a monthly credit card balance can
                cost you in interest and increase your credit utilization rate,
                which is one factor used to calculate your credit scores.
              </p>
            </div>
            <div className="flex gap-3">
              <p className="text-2xl text-[#F5EEE6]">
                Take discount on your shopping {" "}
                <span className="text-[#012169] text-2xl">credit</span> card
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-1 items-center justify-center py-12 lg:py-16">
      <Tabs
        className="w-4/5 lg:w-5/6 flex flex-col lg:flex-row gap-6 lg:gap-10"
        variant="soft-rounded"
        colorScheme="green"
      >
        {/* Left Side  */}
        <TabList className="w-full lg:w-1/4 flex flex-row lg:flex-col items-start gap-4">
          {TabListItems.map((el, index) => (
            <Tab
              key={index}
              className="border border-[#012169] hover:bg-[#012169] py-1 lg:py-2 px-4 lg:px-0 w-auto lg:w-full text-center font-medium hover:text-white rounded"
            >
              {el}
            </Tab>
          ))}
        </TabList>

        {/* Right Side  */}
        <TabPanels className="w-full lg:w-3/4">
          <TabPanel>
            <BankHistory />
          </TabPanel>
          <TabPanel>
            <GeneralManagers />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
        </>
    );
};

export default DepositPage;