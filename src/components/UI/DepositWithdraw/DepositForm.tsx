"use client";

import Form from "@/components/Forms/Form/Form";
import FormInput from "@/components/Forms/FormInput/FormInput";
import FormSelectField from "@/components/Forms/FormSelectedField/FormSelectedField";
import { currencyOptions } from "@/constants/constants";
import { useDepositMutation } from "@/redux/api/depositWithdraw";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const DepositForm= () => {
    
    const [deposit] = useDepositMutation();
    const onSubmit = async (values: any) => {
        let obj = {...values}
         obj.balance =  parseInt(obj.balance);
        try {
            console.log(obj);
            const res = await deposit(obj).unwrap()
            console.log(res);
            if(res){
                toast(res?.message, {
                    icon: <span style={{ color: "black" }}>✔</span>,
                    style: {
                      borderRadius: "10px",
                      background: "#FDB712",
                      color: "#fff",
                    }
                  });
            }
        } catch (err) {
          console.log(err);
        }
      };

    // const handleTransaction = async (data: any, transactionType: string) => {
    //     try {
    //         const amount = parseFloat(data.deposit || data.withdraw);

    //         console.log(typeof amount, data.deposit, ":transactionType");
    //         console.log(transactionType, ":transactionType");

    //         if (isNaN(amount) || amount <= 0) {
    //             toast.error("Invalid amount");
    //             return;
    //         }

    //         if (transactionType === "deposit") {
    //             setCurrentBalance((prevBalance) => prevBalance + amount);
    //         } else if (transactionType === "withdraw") {
    //             if (amount > currentBalance) {
    //                 // console.error("Insufficient balance");
    //                 toast.error("Insufficient balance");
    //                 return;
    //             }
    //             setCurrentBalance((prevBalance) => prevBalance - amount);
    //         }
    //     } catch (error) {
    //         // console.error("An unexpected error occurred:", error);
    //         toast.error("An unexpected error occurred");
    //     }
    // };

    return (
        <>
             <Toaster position="top-right" reverseOrder={false} />
        <div className="flex bg-white flex-col items-center justify-center lg:py-20 w-full">
           
            <div className="w-3/5 my-10 grid grid-cols-1  gap-4">
                <Form submitHandler={onSubmit}>
                    <FormInput
                        name="balance"
                        label="Add to your account"
                        type="text"
                        placeholder="Enter your amount"
                        className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                    />
                    <FormSelectField
                            name="currency"
                            label="Currency"
                            options={currencyOptions}
                            className="w-[300px] h-[45px] text-sm px-4 py-3 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                          />
                  <div className="py-2">
                  <button
                        type="submit"
                        className="px-5 py-3 bg-[#FDB712] rounded-md text-black"
                    >
                        Deposit
                    </button>
                  </div>

                </Form>

                {/* <Form submitHandler={(data) => handleTransaction(data, "withdraw")}>
                    <FormInput
                        name="withdraw"
                        label="Withdraw from your account"
                        type="text"
                        placeholder="Enter your amount"
                        className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                    />
                    <button
                        type="submit"
                        className="rounded-md bg-[#012169] py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-4"
                    >
                        Withdraw
                    </button>
                </Form> */}
            </div>
        </div>
        </>
       
    );
};

export default DepositForm;
