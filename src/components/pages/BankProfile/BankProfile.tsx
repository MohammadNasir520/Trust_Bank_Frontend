import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import BankHistory from "./BankHistory/BankHistory";
import GeneralManagers from "../GeneralManagers/GeneralManagers";

const TabListItems = ["Bank’s Profile", "Management"];

const BankProfile = () => {
  return (
    <div className="w-full flex flex-col gap-1 items-center justify-center py-12 lg:py-16">
      <Tabs
        className="w-4/5 lg:w-5/6 flex flex-col lg:flex-row gap-6 lg:gap-10"
        variant="soft-rounded"
        colorScheme="green"
      >
        {/* Left Side  */}
        <TabList className="w-full lg:w-1/4 flex flex-row lg:flex-col items-start gap-4 flex-wrap">
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
  );
};

export default BankProfile;
