"use client";

import CustomFileInput from "@/components/Forms/CustomFileInput/CustomFileInput";
import Form from "@/components/Forms/Form/Form";
import FormInput from "@/components/Forms/FormInput/FormInput";
import FormRadioField from "@/components/Forms/FormRatioButton/FormRatioButton";
import FormSelectField from "@/components/Forms/FormSelectedField/FormSelectedField";
import {
  accountOptions,
  countries,
  maritalStatus,
} from "@/constants/constants";

const MyAccount = () => {
  const onSubmit = async (values: any) => {
    console.log(values);
    try {
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full bg-white p-5">
      <Form submitHandler={onSubmit}>
        <div className="flex flex-wrap -mx-2">
          {/* For large and extra-large devices (lg, xl) */}
          <div className="w-full lg:w-2/6 xl:w-1/3 md:w-1/2 sm:w-1/2 xs:w-full px-2 ">
            <FormInput
              name="name"
              label="Name"
              placeholder="Update your full name"
              className="w-full text-sm px-4 py-3 bg-gray-100 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
            />
          </div>

          <div className="w-full lg:w-2/6 xl:w-1/3 md:w-1/2 sm:w-1/2 xs:w-full px-2 ">
            <FormInput
              name="email"
              label="Email"
              placeholder="Update your email"
              className="w-full text-sm px-4 py-3 bg-gray-100 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
            />
          </div>

          <div className="w-full lg:w-2/6 xl:w-1/3 md:w-1/2 sm:w-1/2 xs:w-full px-2 ">
            <FormInput
              name="text"
              label="Address"
              placeholder="Update your address"
              className="w-full text-sm px-4 py-3 bg-gray-100 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
            />
          </div>

          <div className="w-full lg:w-1/3 xl:w-1/3 md:w-1/2 sm:w-1/2 xs:w-full px-2 mt-5">
            <FormInput
              name="phone"
              label="Phone Number"
              type="number"
              placeholder="Update your phone number"
              className="w-full text-sm px-4 py-3 bg-gray-100 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
            />
          </div>

          <div className="w-full lg:w-1/3 xl:w-1/3 md:w-1/2 sm:w-1/2 xs:w-full px-2 mt-5">
            <FormInput
              name="profession"
              label="Profession"
              placeholder="Update your profession"
              className="w-full text-sm px-4 py-3 bg-gray-100 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
            />
          </div>

          <div className="w-full lg:w-1/3 xl:w-1/3 md:w-1/2 sm:w-1/2 xs:w-full px-2 mt-5">
            <FormInput
              name="age"
              label="Age"
              type="number"
              placeholder="Update your age"
              className="w-full text-sm px-4 py-3 bg-gray-100 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
            />
          </div>

          <div className="w-full lg:w-1/3 xl:w-1/3 md:w-1/2 sm:w-1/2 xs:w-full px-2 mt-5">
            <FormInput
              name="nid"
              label="NID"
              type="number"
              placeholder="Update your NID"
              className="w-full text-sm px-4 py-3 bg-gray-100 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
            />
          </div>

          <div className="w-full lg:w-1/3 xl:w-1/3 md:w-1/2 sm:w-1/2 xs:w-full px-2 mt-5">
            <FormInput
              name="education"
              label="Education"
              placeholder="Update your education"
              className="w-full text-sm px-4 py-3 bg-gray-100 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
            />
          </div>

          {/* For small and extra-small devices (sm, xs) */}
          <div className="w-full lg:w-1/3 xl:w-1/3 md:w-1/2 sm:w-1/2 xs:w-full px-2 mt-5">
            <FormInput
              name="profileImg"
              label="Profile Image"
              placeholder="Update your Profile"
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
            <FormSelectField
              name="maritalStatus"
              label="Marital Status"
              options={maritalStatus}
              className="w-full text-sm px-4 py-3 bg-gray-100 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
            />
          </div>

          <div className="w-full lg:w-1/3 xl:w-1/3 md:w-1/2 sm:w-1/2 xs:w-full px-2 mt-5">
            <FormSelectField
              name="country"
              label="Country"
              options={countries}
              className="w-full text-sm px-4 py-3 bg-gray-100 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
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
            Update
          </button>
        </div>
      </Form>
    </div>
  );
};

export default MyAccount;
