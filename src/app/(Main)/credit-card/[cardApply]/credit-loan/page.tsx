"use client";
import Form from "@/components/Forms/Form/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker/FormDatePicker";
import FormInput from "@/components/Forms/FormInput/FormInput";
import FormSelectField from "@/components/Forms/FormSelectedField/FormSelectedField";
import { countryOptions, employementOptions, maritailOptions } from "@/constants/constants";
import { useAddCardMutation } from "@/redux/api/cardApi";

import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";


// interface FormData {
//   fullName: string;
//   email: string;
//   country: string;
//   loanAmount: number | string;
//   employmentStatus: string;
//   birthDate: string;
//   ssn: string;
//   address: string;
//   number: string;
//   annualIncome: string;
//   nidNumber: string;
//   maritalStatus: string;
//   creditScore: string;
//   // Add the country field
//   // Add more fields as needed
// }

const page = () => {
  const pathname = usePathname()
  const {push} = useRouter();
  const [currentLoan, setCurrentLoan] = useState<number | string>(""); // State to store the current 
  const [addCard] = useAddCardMutation()
  const onSubmit = async (values: any) => {
    const obj = {...values}
    obj.cardType = "credit"
    obj.loanAmount = currentLoan;
  
    try {
      
     const res = await addCard(obj).unwrap()
     if(res.data){
      push(`${pathname}/loan-approve`)
    }
      }
     catch (err) {
      console.log(err);
    }
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setCurrentLoan(value); // Update the state
  };
 
  return (
    <div>
      <div
        className={`flex flex-col lg:flex-row justify-center items-center showData`}
      >
        <Form submitHandler={onSubmit} className="m-10">
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Personal Information
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Use a permanent address where you can receive mail.
              </p>
              <div className="mt-10 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-6">
           
                <div className="sm:col-span-3">
                  <div className="mt-2">
                    <FormDatePicker
                       name="birthDate"
                       label="Date Of Birth"          
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <div className="mt-2">
                    <FormInput
                       name="ssn"
                       type="string" 
                       label=" Social Security Number (SSN)"          
                    />
                  </div>
                </div>
              
                <div className="sm:col-span-3">
                  <div className="mt-2">
                    <FormInput
                       name="annualIncome"
                       type="string" 
                       label="Annual Income"          
                    />
                  </div>
                </div>


                <div className="sm:col-span-3">
                  <div className="mt-1">
                    <FormSelectField
                       name="country"
                       label="Country" 
                       options={countryOptions}         
                    />
                  </div>
                </div>
              
             
                <div className="sm:col-span-3">
                  <div className="mt-2">
                    <FormInput
                       name="address"
                       type="string" 
                       label=" Address"          
                    />
                  </div>
                </div>
              
                <div className="sm:col-span-3">
                  <div className="mt-1">
                    <FormSelectField
                       name="employmentStatus"
                       label=" Employment Status" 
                       options={employementOptions}         
                    />
                  </div>
                </div>
            


                <div className="sm:col-span-3">
                  <div className="mt-2">
                    <FormInput
                       name="nidNumber"
                       type="string" 
                       label=" NID Number"          
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <div className="mt-2">
                    <FormInput
                       name="creditScore"
                       type="string" 
                       label=" Credit Score"          
                    />
                  </div>
                </div>
              
                <div className="sm:col-span-3">
                  <div className="mt-1">
                    <FormSelectField
                       name="maritalStatus"
                       label=" Marital Status" 
                       options={maritailOptions}         
                    />
                  </div>
                </div>
      
            
                <div className="sm:col-span-3">
                  <div>
                    <label>Loan-Amount</label>
                    <input
                      type="range"
                      min="1000"
                      max="50000"
                      className="my-2"
                      onChange={handleAmountChange}
                    />
                    <h1>
                      Current Loan: <span>$</span> {currentLoan}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <input type="submit" />
          </div>
        </Form>
      </div>
   
    </div>
  );
};

export default page;
