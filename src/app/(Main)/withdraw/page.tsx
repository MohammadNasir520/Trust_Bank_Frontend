"use client";

import Form from "@/components/Forms/Form/Form";
import FormInput from "@/components/Forms/FormInput/FormInput";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const BalancePage: React.FC = () => {
  const [currentBalance, setCurrentBalance] = useState(0);

  const handleTransaction = async (data: any, transactionType: string) => {
    try {
      const amount = parseFloat(data.deposit || data.withdraw);

      console.log(typeof amount, data.deposit, ":transactionType");
      console.log(transactionType, ":transactionType");

      if (isNaN(amount) || amount <= 0) {
        toast.error("Invalid amount");
        return;
      }

      if (transactionType === "deposit") {
        setCurrentBalance((prevBalance) => prevBalance + amount);
      } else if (transactionType === "withdraw") {
        if (amount > currentBalance) {
          // console.error("Insufficient balance");
          toast.error("Insufficient balance");
          return;
        }
        setCurrentBalance((prevBalance) => prevBalance - amount);
      }
    } catch (error) {
      // console.error("An unexpected error occurred:", error);
      toast.error("An unexpected error occurred");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-20 w-full">
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className="text-lg lg:text-2xl font-bold tracking-wide">
        Current Balance: {currentBalance}
      </h1>
      <div className="w-3/5 my-10 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12">
        <Form submitHandler={(data) => handleTransaction(data, "deposit")}>
          <FormInput
            name="deposit"
            label="Add to your account"
            type="text"
            placeholder="Enter your amount"
          />
          <button
            type="submit"
            className="rounded-md bg-[#012169] py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-4"
          >
            Deposit
          </button>
        </Form>

        <Form submitHandler={(data) => handleTransaction(data, "withdraw")}>
          <FormInput
            name="withdraw"
            label="Withdraw from your account"
            type="text"
            placeholder="Enter your amount"
          />
          <button
            type="submit"
            className="rounded-md bg-[#012169] py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-4"
          >
            Withdraw
          </button>
        </Form>
      </div>
    </div>
  );
};

export default BalancePage;
