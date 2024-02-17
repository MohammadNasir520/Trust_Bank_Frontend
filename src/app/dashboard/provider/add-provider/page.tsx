"use client";

import CustomFileInput from "@/components/Forms/CustomFileInput/CustomFileInput";
import Form from "@/components/Forms/Form/Form";
import FormInput from "@/components/Forms/FormInput/FormInput";
import FormSelectField from "@/components/Forms/FormSelectedField/FormSelectedField";
import { providerOptions } from "@/constants/constants";
import { useProviderMutation } from "@/redux/api/providerApi";
import { Divider, Text } from "@chakra-ui/react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const AddProvider = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [provider] = useProviderMutation();

  const onSubmit = async (values: any) => {
    const data = { ...values, image: imageUrl };
    const { service, providerName, image } = data;
    try {
      const res = await provider({ service, providerName, image }).unwrap();
      console.log("Data", res);

      if (res.statusCode === 200) {
        toast(res.message, {
          icon: <span style={{ color: "white" }}>✔</span>,
          style: {
            borderRadius: "10px",
            background: "#012169",
            color: "#fff",
          },
          duration: 2000,
        });
      }
    } catch (error) {
      // console.log("Error::", error);
    }
  };

  return (
    <div className="mx-auto py-20 w-5/6">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="border rounded-md shadow-sm py-10 px-4 col-span-1 lg:col-span-2">
        <Text className="text-sm lg:text-base font-medium capitalize text-shadow-3xl whitespace-pre-line">
          Agriculture Loan Apply
        </Text>
        <Form submitHandler={onSubmit} className="w-full my-4">
          <div className="grid grid-cols-2 gap-4 my-3">
            <FormInput
              // readOnly
              name="providerName"
              label="Provider Name"
              // value={`${interestRate}%`}
              className="w-full text-sm p-3 border bg-white focus:bg-white rounded-lg focus:outline-none focus:border-[#012169]"
            />

            <FormSelectField
              name="service"
              label="Service Type"
              className="w-full text-sm p-3 border bg-white focus:bg-white rounded-lg focus:outline-none focus:border-[#012169]"
              options={providerOptions}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <CustomFileInput
              setImageUrl={setImageUrl}
              label="Upload File"
              id="fileInput"
              className="w-full text-sm p-2 border bg-white focus:bg-white rounded-lg focus:outline-none focus:border-[#012169]"
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
