import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaHouseFloodWaterCircleArrowRight } from "react-icons/fa6";
import { FaHouseDamage } from "react-icons/fa";
import { RiParentFill } from "react-icons/ri";
import Image from "next/image";




const Offer = () => {
  return (
    <div>
      <div className=" my-4 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div
            className=" bg-cover bg-center h-60 lg:h-80 p-4  relative "
            style={{
              backgroundImage:
                "url(https://www2.bac-assets.com/hp-assets/spa-assets/images/assets-images-site-hp-assets-super-highlights-consumer-deposits-en-dep_shl_rising_4859749_722_gc.webp)",
            }}
          >
            <div className="bg-[#FFF8E3] md:bg-[#FFFFFF] lg:bg-[#FFFFFF]  w-56 lg:w-72 text-left py-2 px-3 rounded-md">
              <div className="text-[15px] lg:text-2xl text-[#012169] font-">
                <h1 className="">Our New Flexible CD</h1>
                <h1>offer greater access</h1>
                <h1>to your money</h1>
              </div>
              <div className="text-[14px] ">
                <p>We also offer CDs with a variety of</p>
                <p>terms and rates to meet your</p>
                <p>needs .</p>
                <h1 className="text-[#012169] text-md my-1  flex items-center gap-1">
                  Open a CD today <IoIosArrowForward />
                </h1>
              </div>
            </div>
          </div>
          <div
            className=" bg-cover bg-center h-60 lg:h-80 p-4 relative"
            style={{
              backgroundImage:
                "url(https://www2.bac-assets.com/hp-assets/spa-assets/images/assets-images-site-hp-assets-super-highlights-consumer-enterprise-en-ent_shl_local_student_5917192_722_gc.webp)",
            }}
          >
            <div className="bg-[#FFF8E3] md:bg-[#FFFFFF] lg:bg-[#FFFFFF] w-56 lg:w-80 text-left py-4 px-3 rounded-md ">
              <div className="text-[15px] lg:text-2xl text-[#012169] ">
                <h1 className="">Meet the next</h1>
                <h1>generation of</h1>
                <h1>change-makers</h1>
              </div>
              <div className="text-[14px] my-2">
                <p>Trust Bank is leading</p>
                <p>much student loan</p>
                <p>to help their communities.</p>
                <h1 className="text-[#012169] text-md my-1  flex items-center gap-1">
                  See how <IoIosArrowForward />
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-[1px] rounded-b-md">
          <div className=" bg-[#ffffff] px-4 py-6 flex flex-col justify-center ">
            <div className="my-2  ">
              <Image
                src="https://www2.bac-assets.com/hp-assets/spa-assets/images/assets-images-site-hp-assets-highlights-consumer-mobile-banking-bofa_icon_erica1_186rgb.svg"
                width={100}
                height={100}
                alt="secure"
                className="w-20 h-20"
              />
            </div>
            <h1 className="text-[#012169] text-xl text-left">
              Spend, save and plan smarter with <br /> Erica@Trust
            </h1>
            <p className="text-left my-2 text-[14px]">
              Take your banking to the next level Save money for your family and
              future
            </p>

            <h1 className="text-[#012169] text-lg my-1  flex items-center gap-1 font-normal">
              See how <IoIosArrowForward />
            </h1>
          </div>
          <div className=" bg-[#ECECEC] px-4 py-6 relative">
            <div className="my-2">
              <Image
                src="https://www2.bac-assets.com/hp-assets/spa-assets/images/assets-images-site-hp-assets-highlights-consumer-other-en-bofa_icon_rewards2_280rgb.svg"
                width={100}
                height={100}
                alt="secure"
                className="w-20 h-20"
              />
            </div>
            <h1 className="text-[#012169] text-xl text-left">
              $200 Checking cash offer buying house for parents and children
            </h1>
            <p className="text-left my-2 text-[14px]">
              Take your banking manage to the next level and save. Earn a $200
              bonus when take new loan with bank@trust qualify test.
            </p>
            <h1 className="text-[#012169] text-lg my-2 font-medium  flex items-center gap-1 ">
              See more details <IoIosArrowForward />
            </h1>
          </div>
          <div className=" bg-[#DCF2F1] px-4 py-6">
            <div className="my-4">
              <Image
                src="https://www2.bac-assets.com/hp-assets/spa-assets/images/assets-images-site-hp-assets-highlights-consumer-mobile-banking-bofa_icon_reminder-1.svg"
                width={100}
                height={100}
                alt="secure"
                className="w-20 h-20"
              />
            </div>
            <h1 className="text-left text-xl my-2 font-medium text-[#012169]">
              Explore the world with Trust@bank
            </h1>
            <p className="text-[#012169] text-[14px] text-left">
              Take a trust@bank Tour & travel credit card with some extra
              benfits. You have to access any airport vip launce for 2% discount
              and 10% cashback. Booking vvip hotel in any city for 10% cashback.
            </p>
            <h1 className="text-[#012169] text-lg my-1  flex items-center gap-1">
              See how <IoIosArrowForward />
            </h1>
          </div>
          <div className=" bg-[#F3F8FF] px-4 py-6 flex-col justify-center gap-2">
            <div className="my-3">
              <Image
                src="https://www2.bac-assets.com/hp-assets/spa-assets/images/assets-images-site-hp-assets-highlights-consumer-merrill-en-merrill_lo1_rgb.svg"
                width={100}
                height={100}
                alt="secure"
                className=" h-11 w-40  "
              />
            </div>
            <h1 className="text-[#012169] text-xl text-left">
              Open a Saving Account with Merrill Scheme
            </h1>
            <p className="text-left text-[14px] my-2">
              That's scheme belongs to village small bussiness and family
              members. Here we will help you to open saving account. Provide low
              interest rates and very easy process loan
            </p>
            <h1 className="text-[#012169] text-lg my-1  flex items-center gap-1">
              See how <IoIosArrowForward />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
