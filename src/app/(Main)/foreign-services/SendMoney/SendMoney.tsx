"use client";

import Form from "@/components/Forms/Form/Form";
import FormInput from "@/components/Forms/FormInput/FormInput";

const SendMoney = () => {
  const onSubmit = async (values: any) => {
    console.log(values);
    try {
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center py-12 lg:py-20 gap-4 lg:gap-10 bg-white">
      <div className="text-lg lg:text-3xl text-black font-extralight">
        Send Money
      </div>
      <Form
        className="w-5/6 px-8 py-12 border grid grid-cols-span-1 lg:grid-cols-3 gap-4"
        submitHandler={onSubmit}
      >
        <div className="w-full px-2 ">
          <FormInput
            name="sender"
            label="Sender Account"
            placeholder="Enter your account number"
            className="w-full text-sm px-4 py-3 bg-gray-100 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
          />
        </div>

        <div className="w-full px-2 ">
          <FormInput
            name="swift"
            label="Bank Swift Code"
            placeholder="Enter bank swift code"
            className="w-full text-sm px-4 py-3 bg-gray-100 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
          />
        </div>
        <div className="w-full px-2 ">
          <FormInput
            name="reciever"
            label="Reciever Account"
            placeholder="Enter reciever account number"
            className="w-full text-sm px-4 py-3 bg-gray-100 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-[#012169] text-white font-bold py-2 px-4 text-sm rounded focus:outline-none focus:shadow-outline mt-5"
          >
            Send
          </button>
        </div>
      </Form>
    </div>
  );
};

export default SendMoney;
