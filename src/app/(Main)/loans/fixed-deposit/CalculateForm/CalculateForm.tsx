"use client";

import Form from "@/components/Forms/Form/Form";
import FormInput from "@/components/Forms/FormInput/FormInput";
import FormSelectField from "@/components/Forms/FormSelectedField/FormSelectedField";
import { FixedDepositYears, seniorCitizenField } from "@/constants/constants";
import { Text } from "@chakra-ui/react";
import { useState } from "react";
import { LuPlus } from "react-icons/lu";

const CalculateForm = () => {
  const [investmentAmount, setInvestmentAmount] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(2.8);
  const [investmentPeriod, setInvestmentPeriod] = useState<number>(1);
  const [seniorCitizen, setSeniorCitizen] = useState<boolean>(false);

  const calculateMaturityAmount = () => {
    // Perform calculation based on input values
    // Example calculation:
    const interest = (investmentAmount * interestRate * investmentPeriod) / 100;
    const maturityAmount = investmentAmount + interest;
    return maturityAmount.toFixed(2);
  };

  const calculateInterestTime = () => {
    // Perform calculation based on input values
    // Example calculation:
    return `${investmentPeriod} years`;
  };

  const calculateInterestAmount = () => {
    // Perform calculation based on input values
    // Example calculation:
    const interest = (investmentAmount * interestRate * investmentPeriod) / 100;
    return interest.toFixed(2);
  };

  const onSubmit = async (values: any) => {
    const obj = { ...values };
    console.log("Obj:::", obj);
  };
  return (
    <div className="border rounded-md shadow-sm py-10 px-4 col-span-1 lg:col-span-2">
      <Text className="text-sm lg:text-base font-medium capitalize text-shadow-3xl whitespace-pre-line">
        Calculate Bank FD Returns
      </Text>
      <Form submitHandler={onSubmit} className="w-full my-4">
        <div className="flex items-center justify-between gap-4 my-2">
          <FormInput
            name="InvestmentAmount"
            type="string"
            label="Investment Amount"
            placeholder="$1000"
            className="w-[180px] text-sm p-2 border bg-transparent focus:bg-transparent rounded-lg focus:outline-none focus:border-[#012169]"
            onChange={(e: any) =>
              setInvestmentAmount(parseFloat(e.target.value))
            }
          />
          <FormInput
            readOnly
            name="InterestRate"
            type="string"
            label="Interest Rate"
            placeholder="2.8%"
            value={`${interestRate}%`}
            className="w-[180px] text-sm p-2 border bg-transparent focus:bg-transparent rounded-lg focus:outline-none focus:border-[#012169]"
          />
        </div>
        <div className="flex items-center justify-between gap-4 my-2">
          <FormSelectField
            name="InvestmentPeriod"
            label="Investment Period"
            options={FixedDepositYears}
            onChange={(e: any) => setInvestmentPeriod(parseInt(e.target.value))}
            className="w-[180px] text-sm p-2 border bg-transparent focus:bg-transparent rounded-lg focus:outline-none focus:border-[#012169]"
          />
          <FormSelectField
            name="SeniorCitizen"
            label="Senior Citizen"
            options={seniorCitizenField}
            onChange={(e) => setSeniorCitizen(e.target.value === "yes")}
            className="w-[180px] text-sm p-2 border bg-transparent focus:bg-transparent rounded-lg focus:outline-none focus:border-[#012169]"
          />
        </div>

        <div className="flex items-center justify-between gap-4 my-10">
          <div>
            <Text className="text-sm lg:text-base font-semibold capitalize text-shadow-3xl whitespace-pre-line text-[#012169] text-center">
              {calculateInterestAmount()}
            </Text>
            <Text className="text-sm font-normal whitespace-pre-line text-center">
              Interest Amount
            </Text>
          </div>

          <LuPlus />

          <div>
            <Text className="text-sm lg:text-base font-semibold capitalize text-shadow-3xl whitespace-pre-line text-[#012169] text-center">
              {interestRate}
            </Text>
            <Text className="text-sm font-normal whitespace-pre-line text-center">
              Interest for 3 years
            </Text>
          </div>
        </div>

        <div className="bg-gray-100 rounded-md py-6">
          <Text className="text-sm lg:text-base font-semibold capitalize text-shadow-3xl whitespace-pre-line text-[#012169] text-center">
            {calculateMaturityAmount()}
          </Text>
          <Text className="text-sm font-normal whitespace-pre-line text-center">
            Maturity Amount
          </Text>
        </div>

        <div className="text-center mt-10">
          <button
            type="submit"
            className="mx-auto px-4 py-2 bg-[#012169] rounded-md text-white text-center focus:outline-none"
          >
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
};

export default CalculateForm;


