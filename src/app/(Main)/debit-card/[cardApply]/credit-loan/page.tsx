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
          <div className="shadow-sm p-4 rounded-lg border">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
               Debit Card Apply Form
              </h2>
            
              <div className="mt-10 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-6">
           
                <div className="sm:col-span-3">
                  <div className="mt-2">
                    <FormDatePicker
                       name="birthDate"
                       label="Date Of Birth"   
                       className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"     
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <div className="mt-2">
                    <FormInput
                       name="ssn"
                       type="string" 
                       label=" Social Security Number (SSN)"  
                       className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"         
                    />
                  </div>
                </div>
              
                <div className="sm:col-span-3">
                  <div className="mt-2">
                    <FormInput
                       name="annualIncome"
                       type="string" 
                       label="Annual Income"   
                       className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"        
                    />
                  </div>
                </div>


                <div className="sm:col-span-3">
                  <div className="mt-1">
                    <FormSelectField
                       name="country"
                       label="Country" 
                       options={countryOptions}   
                       className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"       
                    />
                  </div>
                </div>
              
             
                <div className="sm:col-span-3">
                  <div className="mt-2">
                    <FormInput
                       name="address"
                       type="string" 
                       label=" Address"   
                       className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"        
                    />
                  </div>
                </div>
              
                <div className="sm:col-span-3">
                  <div className="mt-1">
                    <FormSelectField
                       name="employmentStatus"
                       label=" Employment Status" 
                       options={employementOptions}    
                       className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"      
                    />
                  </div>
                </div>
            


                <div className="sm:col-span-3">
                  <div className="mt-2">
                    <FormInput
                       name="nidNumber"
                       type="string" 
                       label=" NID Number"    
                       className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"       
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <div className="mt-2">
                    <FormInput
                       name="creditScore"
                       type="string" 
                       label=" Credit Score"  
                       className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"         
                    />
                  </div>
                </div>
              
                <div className="sm:col-span-3">
                  <div className="mt-1">
                    <FormSelectField
                       name="maritalStatus"
                       label=" Marital Status" 
                       options={maritailOptions}  
                       className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"        
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
            <div className="mt-6 flex items-center justify-end gap-x-6">
            <input type="submit" className="rounded-md bg-[#012169] py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" />
          </div>
          </div>
       
        </Form>
      </div>
   
    </div>
  );
};

export default page;
