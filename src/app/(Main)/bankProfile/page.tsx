"use client";

import { useGetAllBankProfilesQuery } from "@/redux/api/bankProfileApi";
import {
  CircularProgress,
  CircularProgressLabel,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

const BankProfileDetails = () => {
  const { data, isLoading } = useGetAllBankProfilesQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <CircularProgress />
      </div>
    );
  }

  if (!data || !data.data || data.data.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        No bank profile data available.
      </div>
    );
  }

  const { bankName, branchName, location, bankBalances } = data.data[0];

  console.log(bankBalances);

  return (
    <div className="py-12">
      <Text className="text-lg md:text-2xl lg:text-3xl text-center font-bold mb-4">
        Bank Details
      </Text>
      {/* <Image
        src="/assets/logo/logo-black.png"
        alt=""
        height={100}
        width={100}
        className="mx-auto w-56 h-56"
      /> */}

      <div className="w-1/2 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-2">
        <div className="text-md md:text-lg lg:text-xl flex items-center gap-x-1">
          <Text className="font-bold">Bank Name:</Text>
          <Text className="font-medium">{bankName}</Text>
        </div>
        <div className="text-md md:text-lg lg:text-xl flex items-center gap-x-1">
          <Text className="font-bold">Bank Name:</Text>
          <Text className="font-medium">{branchName}</Text>
        </div>
        <div className="text-md md:text-lg lg:text-xl flex items-center gap-x-1">
          <Text className="font-bold">Bank Name:</Text>
          <Text className="font-medium">{location}</Text>
        </div>
      </div>
      <div className="mt-12">
        <Text className="text-lg md:text-2xl lg:text-3xl text-center font-bold">
          Current Balance
        </Text>

        <div className="flex items-center justify-center my-4">
          {bankBalances &&
            bankBalances.map((el: any, index: any) => (
              <CircularProgress key={index}>
                <CircularProgressLabel>
                  <Text className="text-md text-center font-bold">
                    {el.currency}
                  </Text>
                  <Text className="text-lg lg:text-xl text-center font-bold">
                    {el.balance}
                  </Text>
                </CircularProgressLabel>
              </CircularProgress>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BankProfileDetails;
