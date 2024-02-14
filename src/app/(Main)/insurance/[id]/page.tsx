"use client";

import Form from "@/components/Forms/Form/Form";
import FormInput from "@/components/Forms/FormInput/FormInput";
import FormSelectField from "@/components/Forms/FormSelectedField/FormSelectedField";
import { accountOptions } from "@/constants/constants";
import Image from "next/image";
import {
  FaHandPointer,
  FaPhone,
  FaRegFileAlt,
  FaRegFilePdf,
} from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { TiTickOutline } from "react-icons/ti";

const page = ({ params }) => {
  const onSubmit = async (values: any) => {
    try {
      console.log(values);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="my-11">
      <div
        className="h-64 w-full flex justify-center items-center"
        style={{
          backgroundImage: `url("https://thumbs2.imgbox.com/15/74/gujplJ95_t.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="grid grid-cols-5 my-7">
        <div className="col-span-2">
          <ul className="flex flex-col justify-center items-center gap-2 bg-[#F2F5F9] py-4">
            <h1 className="text-xl font-medium">Life is Unpredictable</h1>
            <h2 className="text-lg font-medium">
              Protect your family's future
            </h2>
            <h1>
              Get <span className="text-[#012169] font-semibold">$1000000</span>{" "}
              starting from{" "}
              <span className="text-[#012169] font-semibold">$100/month</span>{" "}
            </h1>
            <h1 className="text-[#012169] text-md">Claim within 12 months</h1>
            <div className=" p-4 rounded border-2  mx-1">
              <Form submitHandler={onSubmit} className="m-10">
                <div className="space-y-12">
                  <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                      Open your Insurance
                    </h2>

                    <div className="">
                      <div className="sm:col-span-3">
                        <div>
                          <FormInput
                            name="contactNo"
                            label="Phone"
                            type="number"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <div>
                          <FormSelectField
                            name="accountType"
                            label="Account Type"
                            options={accountOptions}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="rounded-md bg-[#012169] py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  confirm
                </button>
              </Form>
            </div>
          </ul>
          {/* resource */}

          <div>
            <ul className="flex flex-col gap-1 ">
              <li className="flex flex-col  justify-center items-center text-[14px] font-medium bg-[#FFF7F1] py-4 mx-4">
                <h1 className="flex items-center gap-1 ">Life Cover</h1>
                <span className="text-[#012169] font-semibold">$1M</span>
                <h1>Claim Settlement</h1>
                <span>97.8%</span>
                <h1>Price</h1>
                <span>$1000/month</span>
                <button className="bg-[#012169] text-white px-4 py-2 font-semibold text-sm  rounded-md">
                  View Plan
                </button>
              </li>
              <li className="flex flex-col  justify-center items-center text-[14px] font-medium bg-[#CDFADB] py-4 mx-4">
                <h1 className="flex items-center gap-1 ">Life Cover</h1>
                <span className="text-[#012169] font-semibold">$1M</span>
                <h1>Claim Settlement</h1>
                <span>97.8%</span>
                <h1>Price</h1>
                <span>$1000/month</span>
                <button className="bg-[#012169] text-white px-4 py-2 font-semibold text-sm  rounded-md">
                  View Plan
                </button>
              </li>
              <li className="flex flex-col  justify-center items-center text-[14px] font-medium bg-[#FFF6E9] py-4 mx-4">
                <h1 className="flex items-center gap-1 ">Life Cover</h1>
                <span className="text-[#012169] font-semibold">$1M</span>
                <h1>Claim Settlement</h1>
                <span>97.8%</span>
                <h1>Price</h1>
                <span>$1000/month</span>
                <button className="bg-[#012169] text-white px-4 py-2 font-semibold text-sm  rounded-md">
                  View Plan
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl font-medium my-4">Download resource</h1>
            <div className="flex  justify-center gap-1">
              <div className="border rounded-md  p-4 flex flex-col justify-center gap-1">
                <div className="flex items-center justify-center">
                  <FaRegFilePdf size={20} />
                </div>
                <h6 className="text-center text-sm">3.9KB</h6>
                <h3 className="text-center text-md">
                  Travel Plan & <br />
                  Policy
                </h3>
                <button className="bg-[#012169] text-white px-4 py-2 font-semibold text-sm  rounded-md">
                  Download
                </button>
              </div>
              <div className="border rounded-md  p-4 flex flex-col justify-center gap-1">
                <div className="flex items-center justify-center">
                  <FaRegFilePdf size={20} />
                </div>
                <h6 className="text-center text-sm">3.9KB</h6>
                <h3 className="text-center text-md">
                  Travel Plan & <br />
                  Policy
                </h3>
                <button className="bg-[#012169] text-white px-4 py-2 font-semibold text-sm  rounded-md">
                  Download
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center text-[#FFF6E9] font-sans bg-[#1C273D] w-11/12 rounded-md p-6 mx-auto  gap-1 my-4">
            <div className="flex items-center justify-center bg-[#012169] p-4 rounded-full hover:bg-[#BBE2EC] cursor-pointer mb-2">
              <FaPhone size={20} />
            </div>
            <h1>Talk to Our</h1>
            <h1>Insurance agent </h1>
            <p className="text-md">Call us at 1-800-123-4567</p>
            <p className=" text-sm">Call to Our Expert</p>
          </div>
        </div>
        <div className="col-span-3">
          <div>
            <Image
              src="https://i.ibb.co/P1qnmw2/event-4.jpg"
              alt=""
              width={500}
              height={500}
              className="w-full rounded-md h-[30rem] "
            />
          </div>
          <div className="flex justify-around py-4 text-lg font-medium ">
            <h1>Eligible ages: </h1>
            <h2>
              Minimum Ages: <span>16 Years</span>{" "}
            </h2>
            <h2>
              Maximum Ages: <span>65 Years</span>{" "}
            </h2>
          </div>
          <p className="text-justify my-4">
            Neque porro est qui dolorem ipsum quia quaed inventore veritatis et
            quasi architecto beatae vitae dicta sunt explicabo. Aelltes port
            lacus quis enim var sed efficitur turpis gilla sed sit amet finibus
            eros. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
          <h1 className="">
            Biophilia is the idea that humans possess an innate tendency to seek
            connections with nature. The term translates
          </h1>
          <p className="text-justify  my-4">
            When an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining essentially
            unchanged. Aelltes port lacus quis enim var sed efficitur turpis
            gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of
            the printing and typesetting industry.
          </p>

          <div className="grid grid-cols-2 gap-2 my-4">
            <div className="col-span-1">
              <Image
                src="https://thumbs2.imgbox.com/e4/6a/X3YyuITJ_t.jpg"
                alt=""
                width={500}
                height={500}
                className="rounded-md h-72"
              />
            </div>
            <div className="col-span-1">
              <h1 className="text-xl font-semibold text-[#000]">
                Main Feature
              </h1>
              <p className="text-justify font-medium text-md my-3">
                There are many variations of passages of available but the
                majority have suffered alteration in some form, by injected hum
                randomised words which don't slightly.
              </p>
              <ul className="text-md font-medium flex flex-col gap-3 my-2">
                <li className="flex items-center gap-1">
                  <div className="bg-[#00B9E0] p-[1px] rounded-full">
                    <TiTickOutline size={20} color="white" />{" "}
                  </div>
                  <h1>International Plans</h1>
                </li>
                <li className="flex items-center gap-1">
                  <div className="bg-[#404546] p-[1px] rounded-full">
                    <TiTickOutline size={20} color="white" />{" "}
                  </div>
                  <h1>Domestic Plans</h1>
                </li>
                <li className="flex items-center gap-1">
                  <div className="bg-[#00B9E0] p-[1px] rounded-full">
                    <TiTickOutline size={20} color="white" />{" "}
                  </div>
                  <h1>Student Study Plans</h1>
                </li>
                <li className="flex items-center gap-1">
                  <div className="bg-[#00B9E0] p-[1px] rounded-full">
                    <TiTickOutline size={20} color="white" />{" "}
                  </div>
                  <h1>Specialized Investigations</h1>
                </li>
              </ul>
            </div>
            <div>
              <div></div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center gap-2 py-3 px-4 bg-[#FFFFFF] shadow-md">
              <div className="flex-2 flex items-center gap-2">
                <FaHandPointer size={25} color="#012169" />
                <h1 className="text-md font-semibold text-[#012169]">
                  Fast & Easy <br /> Process
                </h1>
              </div>
              <hr className="bg-black w-[2px] h-[35px] mx-3" />
              <p className="text-[12px] flex-1 ">
                There are many not of age of dirm available the simply free text
                available in the market today you can use them majori{" "}
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 py-3 px-4 bg-[#FFFFFF] shadow-md">
              <div className="flex-2 flex items-center gap-2">
                <FaRegFileAlt size={25} color="#012169" />
                <h1 className="text-md font-semibold text-[#012169]">
                  Fast & Easy <br /> Process
                </h1>
              </div>
              <hr className="bg-black w-[2px] h-[35px] mx-3" />
              <p className="text-[12px] flex-1 ">
                There are many not of age of dirm available the simply free text
                available in the market today you can use them majori{" "}
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 py-3 px-4 bg-[#FFFFFF] shadow-md">
              <div className="flex-2 flex items-center gap-2">
                <GiTakeMyMoney size={25} color="#012169" />
                <h1 className="text-md font-semibold text-[#012169]">
                  Fast & Easy <br /> Process
                </h1>
              </div>
              <hr className="bg-black w-[2px] h-[35px] mx-3" />
              <p className="text-[12px] flex-1 ">
                There are many not of age of dirm available the simply free text
                available in the market today you can use them majori{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
