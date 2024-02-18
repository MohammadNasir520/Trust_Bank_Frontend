"use client";
import CustomFileInput from "@/components/Forms/CustomFileInput/CustomFileInput";
import Form from "@/components/Forms/Form/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker/FormDatePicker";
import FormInput from "@/components/Forms/FormInput/FormInput";
import FormRadioField from "@/components/Forms/FormRatioButton/FormRatioButton";
import FormSelectField from "@/components/Forms/FormSelectedField/FormSelectedField";
import {
  accountOptions,
  bloodOptions,
  genderOptions,
  occupationOptions,
} from "@/constants/constants";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import accountSchema from "@/schemas/account";
import { useForm } from "react-hook-form";
import FormTextArea from "@/components/Forms/FormTextArea/FormTextArea";
import { useMerchantAccountMutation } from "@/redux/api/accountApi";

const MerchantAccount = () => {
  const [merchantAccount] = useMerchantAccountMutation();
  const onSubmit = async (values: any) => {
    let obj = {...values}
    obj.accountType = "Merchant"
    try {
      const res = await merchantAccount(obj).unwrap();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center py-12 ">
      <div className="shadow-sm p-8 rounded-lg border">
        <Form submitHandler={onSubmit} >
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-8">
              <div>
                <h2 className="text-base font-semibold leading-7 text-gray-900 lg:px-2 xl:px-2">
                  Basic Information
                </h2>
                <div className="mt-4 grid grid-cols-1 gap-y-4 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center">
                  <div className="sm:col-span-1 flex justify-center">
                    <div>
                      <FormInput
                        name="companyName"
                        label="Company Name"
                        placeholder="Company Name"
                        className="w-[300px] h-[45px] text-sm px-2 py-3 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-1 flex justify-center">
                    <div>
                      <FormSelectField
                        name="companyType"
                        label="Company Type"
                        options={genderOptions}
                        className="w-[300px] h-[45px] text-sm px-2 py-3 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-1 flex justify-center">
                    <div>
                      <FormInput
                        name="contactNo"
                        label="Contact"
                        placeholder="Contact"
                        className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-1 flex justify-center">
                    <div>
                      <FormInput
                        name="tradLicenceNo"
                        label="Trad Licence Number"
                        placeholder="Trad Licence"
                        className="w-[300px] h-[45px] text-sm px-2 py-3 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-1 flex justify-center">
                    <div>
                      <FormInput
                        name="tinNumber"
                        label="Tin  Number"
                        placeholder="Tin Number"
                        className="w-[300px] h-[45px] text-sm px-2 py-3 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-1 flex justify-center">
                    <div>
                      <FormInput
                        name="taxId"
                        label="Tax ID"
                        placeholder="Tax ID"
                        className="w-[300px] h-[45px] text-sm px-2 py-3 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-1 flex justify-center">
                    <div>
                      <FormTextArea
                        name="companyAddress"
                        label="Company Address"
                        placeholder="Company Address"
                        className="w-[300px]  text-sm px-2 py-3 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-1 ">
                    <div>
                      <CustomFileInput label="companyPhoto" id="fileInput" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end">
            <button
              type="submit"
              className="rounded-md bg-[#012169] py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Open Account
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default MerchantAccount;
