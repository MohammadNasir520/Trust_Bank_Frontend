"use client";

import Form from "@/components/Forms/Form/Form";
import FormInput from "@/components/Forms/FormInput/FormInput";
import FormSelectField from "@/components/Forms/FormSelectedField/FormSelectedField";
import { currencyOptions } from "@/constants/constants";
import { useDepositMutation, useWithdrawMutation } from "@/redux/api/depositWithdraw";
import toast, { Toaster } from "react-hot-toast";

const WithdrawForm = () => {
    
    const [withdraw] = useWithdrawMutation();
    const onSubmit = async (values: any) => {
        let obj = {...values}
         obj.balance =  parseInt(obj.balance);
        try {
            console.log(obj);
            const res = await withdraw(obj).unwrap()
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


    return (
        <>
             <Toaster position="top-right" reverseOrder={false} />
        <div className="flex bg-white flex-col items-center justify-center lg:py-20 w-full">
           
            <div className="w-3/5 my-10 grid grid-cols-1 gap-4 ">
                <Form submitHandler={onSubmit}>
                    <FormInput
                        name="balance"
                        label="Withdraw from account"
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
                        className="px-5 py-3 bg-[#012169] rounded-md text-white"
                    >
                        Withdraw
                    </button>
                  </div>

                </Form>

              
            </div>
        </div>
        </>
       
    );
};

export default WithdrawForm;
