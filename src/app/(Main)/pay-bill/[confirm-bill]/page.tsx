"use client";
import Form from "@/components/Forms/Form/Form";
import FormInput from "@/components/Forms/FormInput/FormInput";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { GoDotFill } from "react-icons/go";
import { TiTickOutline } from "react-icons/ti";

const Page = () => {
  const searchParams = useSearchParams();
  const bilType = searchParams.get("keyword");
  const provider = searchParams.get("billName");

  const onSubmit = async (values: any) => {
    toast("Payment Successful", {
      icon: <span style={{ color: "black" }}>✔</span>,
      style: {
        borderRadius: "10px",
        background: "#FDB712",
        color: "#fff",
      },
    });
    console.log(values);
    
  };
  const notify = () => toast("Here is your toast.");

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="py-20 w-[1400px] mx-auto bg-[#f9f9f9]">
        <h1 className="text-3xl text-center">Payment Your {bilType} Bill </h1>
        <h2 className="text-2xl text-center">
          Provider Name: <span className="text-[#012169]"> {provider}</span>
        </h2>
        <div className="grid grid-cols-7 lg:grid-cols-7 gap-3 items-center mx-0 lg:mx-4">
          <div className="col-span-6 lg:col-span-2 w-full">
            <div className="my-3 flex flex-col gap-2 bg-[#F5F5F5]">
              <h1 className="text-3xl">Ready to pay</h1>
              <p className="flex items-center gap-1">
                <TiTickOutline />
                check your bill type {bilType}
              </p>
              <p className="flex items-center gap-1">
                <TiTickOutline />
                Select your provider {provider}
              </p>
              <p className="flex items-center gap-1">
                <TiTickOutline />
                Check all data carefully before confirm payment
              </p>

              <p className="text-[14px]">
                You can upload your supporting financial information documents
                in the application form. If you can’t upload your documents, the
                confirmation email we send will outline other ways you can
                provide the documents.
              </p>
              <hr className="my-4 h-[3px] bg-black" />
            </div>
          </div>
          <div className="col-span-6 lg:col-span-4 w-full">
            {" "}
            <Form  submitHandler={onSubmit} className="m-10">
              <div className="sm:col-span-3">
                <div className="mt-2">
                  <FormInput
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    name="phoneNumber"
                    type="string"
                    label="Phone Number"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <div className="mt-2">
                  <FormInput
                    name="billId"
                    type="string"
                    label=" Bill Id"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <div className="mt-2">
                  <FormInput
                    name="amount"
                    type="string"
                    label=" Amount"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  />
                </div>
              </div>

              <div className=" my-3 text-white text-center bg-[#012169] px-3 py-2 rounded w-[100px] cursor-pointer">
                <input type="submit" />
              </div>
            </Form>
          </div>

          <div className="col-span-6 lg:col-span-1">
            <Image
              src="https://cdn0.desidime.com/attachments/photos/777195/original/image.png?1655266158"
              title="Bill"
              alt="Bill"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
