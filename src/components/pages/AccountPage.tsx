"use client";
import FormInput from "@/components/Forms/FormInput/FormInput";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Form from "../Forms/Form/Form";
import FormSelectField from "../Forms/FormSelectedField/FormSelectedField";
import { accountOptions } from "@/constants/constants";
import FormRadioField from "../Forms/FormRatioButton/FormRatioButton";
import CustomFileInput from "../Forms/CustomFileInput/CustomFileInput";

const AccountPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const onSubmit = async (values: any) => {
    console.log(values);
    try {
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="">
      <div className="px-[25px] pt-[25px] pb-[40px]">
        <div className="mb-7">
          <h3 className="font-semibold text-xl text-gray-800">
            Open your account
          </h3>
        </div>
        <div className="w-full mt-8 space-y-4 bg-white p-5">
          <Form submitHandler={onSubmit}>
            <div className="flex flex-wrap -mx-2">
              {/* For large and extra-large devices (lg, xl) */}
              <div className="w-full lg:w-2/6 xl:w-1/3 md:w-1/2 sm:w-1/2 xs:w-full px-2 ">
                <FormInput
                  name="name"
                  label="Name"
                  placeholder="Enter your full name"
                  className="w-full text-sm px-4 py-3 bg-gray-100 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                />
              </div>
              <div className="w-full lg:w-2/6 xl:w-1/3 md:w-1/2 sm:w-1/2 xs:w-full px-2 ">
                <FormInput
                  name="email"
                  label="Email"
                  placeholder="Enter your email"
                  className="w-full text-sm px-4 py-3 bg-gray-100 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                />
              </div>

              <div className="w-full lg:w-1/3 xl:w-1/3 md:w-1/2 sm:w-1/2 xs:w-full px-2 ">
                <FormInput
                  name="phone"
                  label="Phone Number"
                  type="number"
                  placeholder="Enter your phone number"
                  className="w-full text-sm px-4 py-3 bg-gray-100 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                />
              </div>

              <div className="w-full lg:w-1/3 xl:w-1/3 md:w-1/2 sm:w-1/2 xs:w-full px-2 mt-5 ">
                <FormInput
                  name="profession"
                  label="Profession"
                  placeholder="Enter your profession"
                  className="w-full text-sm px-4 py-3 bg-gray-100 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                />
              </div>

              <div className="w-full lg:w-1/3 xl:w-1/3 md:w-1/2 sm:w-1/2 xs:w-full px-2 mt-5">
                <FormInput
                  name="age"
                  label="Age"
                  type="number"
                  placeholder="Enter your phone number"
                  className="w-full text-sm px-4 py-3 bg-gray-100 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                />
              </div>

              <div className="w-full lg:w-1/3 xl:w-1/3 md:w-1/2 sm:w-1/2 xs:w-full px-2 mt-5">
                <FormInput
                  name="education"
                  label="Education"
                  placeholder="Enter your education"
                  className="w-full text-sm px-4 py-3 bg-gray-100 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                />
              </div>

              {/* For small and extra-small devices (sm, xs) */}
              <div className="w-full lg:w-1/3 xl:w-1/3 md:w-1/2 sm:w-1/2 xs:w-full px-2 mt-5">
                <FormInput
                  name="profileImg"
                  label="Profile Image"
                  placeholder="Enter your Profile"
                  className="w-full text-sm px-4 py-3 bg-gray-100 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                />
              </div>

              <div className="w-full lg:w-1/3 xl:w-1/3 md:w-1/2 sm:w-1/2 xs:w-full px-2 mt-5">
                <FormSelectField
                  name="account"
                  label="Account Type"
                  options={accountOptions}
                  className="w-full text-sm px-4 py-3 bg-gray-100 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                />
              </div>

              <div className="w-full lg:w-1/3 xl:w-1/3 md:w-1/2 sm:w-1/2 xs:w-full px-2 mt-5">
                <FormRadioField
                  name="citizen"
                  label="Citizen"
                  options={["International", "Bangladesh"]}
                />
              </div>

              <div className=" px-2 mt-5">
                <CustomFileInput
                  label="Upload File"
                  id="fileInput"
                  // onChange={handleFileChange}
                  className="mb-8"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-[#012169] text-white font-bold py-2 px-4 text-sm rounded focus:outline-none focus:shadow-outline mt-5"
              >
                Create
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
