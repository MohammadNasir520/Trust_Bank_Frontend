import React from "react";
import Hero from "../../news/Hero/Hero";
import {
  Table,
  TableContainer,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import {
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/UI/table";
import { fixedDepositData } from "@/constants/constants";
import CalculateForm from "./CalculateForm/CalculateForm";

const FixedDeposit = () => {
  return (
    <div>
      <Hero title="Fixed Deposit" />

      <div className="mx-auto py-20 w-5/6 grid grid-cols-1 md:grid-cols-5 gap-10">
        <TableContainer className="w-full border rounded-md shadow-sm py-10 col-span-1 lg:col-span-3">
          <div className="w-[95%] mx-auto flex items-center justify-between">
            <Text className="text-sm lg:text-base font-semibold capitalize text-shadow-3xl whitespace-pre-line">
              Fixed Deposit - 2024
            </Text>
            <div>
              <Text className="text-sm lg:text-base font-semibold capitalize text-shadow-3xl whitespace-pre-line text-[#012169] text-center">
                6.25%
              </Text>
              <Text className="text-sm font-normal whitespace-pre-line">
                Interest for 3 years
              </Text>
            </div>
          </div>

          <Table className="w-full flex p-0 my-4">
            <Thead className="w-full border-b-0">
              <Tr className="flex flex-col">
                <Th className="border-b w-full grid grid-cols-3 p-0 m-0 text-left">
                  <div className="whitespace-pre-line px-2 text-sm font-medium lg:text-base flex items-center justify-center col-span-1">
                    Tenure
                  </div>
                  <div className="p-2 whitespace-pre-line text-sm lg:text-base font-medium flex items-center justify-center col-span-1">
                    Normal Citizen FD Rate
                  </div>
                  <div className="p-2 whitespace-pre-line text-sm lg:text-base font-medium flex items-center justify-center col-span-1">
                    Senior Citizen FD Rate
                  </div>
                </Th>
              </Tr>
              <Tr className="flex flex-col">
                {fixedDepositData.map((el, index) => (
                  <Td
                    key={index}
                    className="border-b w-full grid grid-cols-3 p-0 m-0 text-left"
                  >
                    <div className="whitespace-pre-line px-2 text-sm font-normal flex items-center justify-center col-span-1">
                      {el.years}
                    </div>
                    <div className="p-2 whitespace-pre-line text-sm font-normal flex items-center justify-center col-span-1">
                      {el.nc_fd_rate}
                    </div>
                    <div className="p-2 whitespace-pre-line text-sm font-normal flex items-center justify-center col-span-1">
                      {el.sc_fd_rate}
                    </div>
                  </Td>
                ))}
              </Tr>
            </Thead>
          </Table>
        </TableContainer>

        <CalculateForm />
      </div>
    </div>
  );
};

export default FixedDeposit;
