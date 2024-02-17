"use client";

import CustomFileInput from "@/components/Forms/CustomFileInput/CustomFileInput";
import Form from "@/components/Forms/Form/Form";
import FormInput from "@/components/Forms/FormInput/FormInput";
import FormSelectField from "@/components/Forms/FormSelectedField/FormSelectedField";
import { providerOptions } from "@/constants/constants";
import { Divider, Text } from "@chakra-ui/react";

const AddProvider = () => {
  const onSubmit = async (values: any) => {
    console.log("Values::", values);
    // try {
    //   console.log("Input values:::", values);
    // } catch (error) {
    //   console.log("Error::", error);
    // }
  };

  return (
    <div className="mx-auto py-20 w-5/6">
      <div className="border rounded-md shadow-sm py-10 px-4 col-span-1 lg:col-span-2">
        <Text className="text-sm lg:text-base font-medium capitalize text-shadow-3xl whitespace-pre-line">
          Agriculture Loan Apply
        </Text>
        <Form submitHandler={onSubmit} className="w-full my-4">
          <div className="grid grid-cols-2 gap-4 my-2">
            <FormInput
              name="name"
              label="Provider Account"
              className="w-full text-sm p-2 border bg-white focus:bg-white rounded-lg focus:outline-none focus:border-[#012169]"
              // onChange={(e: any) =>
              //   setInvestmentAmount(parseFloat(e.target.value))
              // }
            />
            <FormInput
              // readOnly
              name="providerName"
              label="Provider Name"
              // value={`${interestRate}%`}
              className="w-full text-sm p-2 border bg-white focus:bg-white rounded-lg focus:outline-none focus:border-[#012169]"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 my-2">
            <CustomFileInput label="Upload File" id="fileInput" />
            {/* <FormInput
              // readOnly
              name="provider"
              type="string"
              label="Provider"
              // value={`${interestRate}%`}
              className="w-full text-sm p-2 border bg-white focus:bg-white rounded-lg focus:outline-none focus:border-[#012169]"
            /> */}

            <FormSelectField
              name="service"
              label="Service Type"
              className="w-full text-sm p-2 border bg-white focus:bg-white rounded-lg focus:outline-none focus:border-[#012169]"
              options={providerOptions}
            />
          </div>

          <Divider className="my-10 mx-auto max-w-[98%] h-[1px] bg-gray-500 opacity-20" />

          <div className="flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-[#012169] py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddProvider;

{
  /* <div className="mx-1 lg:mx-6 md:mx-6 ">
  <h2 className="text-base font-semibold leading-7 text-gray-900">
    Agriculture Loan Apply
  </h2>

  <Form submitHandler={onSubmit} className="m-10">
    <div className="space-y-12">
      <div className="border-b border-gray-900/10 pb-12">
        grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-6
        <div className="mt-10 grid-cols-12 gap-6">
          <div className="col-span-6">
            <FormInput
              readOnly
              name="providerAccount"
              type="string"
              label="Provider Account"
              className="w-full text-sm p-2 border bg-white focus:bg-white rounded-lg focus:outline-none focus:border-[#012169]"
            />
          </div>
          <div className="col-span-6">
            <FormInput
              readOnly
              name="providerName"
              type="string"
              label="Provider Name"
              className="w-full text-sm p-2 border bg-white focus:bg-white rounded-lg focus:outline-none focus:border-[#012169]"
            />
          </div>
          <div className="col-span-6">
            <FormSelectField
              name="service"
              label="Service Type"
              className="w-full text-sm p-2 border bg-white focus:bg-white rounded-lg focus:outline-none focus:border-[#012169]"
              options={providerOptions}
            />
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="providerAccount"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Provider Account
            </label>
            <div className="mt-2">
              <FormInput
                type="text"
                name="providerAccount"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="providerName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Provider Name
            </label>
            <div className="mt-2">
              <FormInput
                name="provider"
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <div>
              <CustomFileInput label="Upload File" id="fileInput" />
            </div>
          </div>
          <div className="sm:col-span-3">
            <FormSelectField
              name="service"
              label="Service Type"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              options={providerOptions}
            />
          </div>
        </div>
      </div>
    </div>
    <div className="mt-6 flex items-center justify-end gap-x-6">
      <button
        type="button"
        className="text-sm font-semibold leading-6 text-gray-900"
      >
        Cancel
      </button>
      <button
        type="submit"
        className="rounded-md bg-[#012169] py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Save
      </button>
    </div>
  </Form>
</div>; */
}
