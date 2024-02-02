'use client'
import Link from "next/link";
import React from "react";
import { TiTickOutline } from "react-icons/ti";
import { RxCrossCircled } from "react-icons/rx";
import {
  TbCircleNumber1,
  TbCircleNumber2,
  TbCircleNumber3,
  TbCircleNumber4,
} from "react-icons/tb";
import { GoClock } from "react-icons/go";
import { GoDotFill } from "react-icons/go";
import { usePathname } from "next/navigation";

const page = ({ params }: { params: { cardApply: string } }) => {
    const pathname = usePathname();


  return (
    <div className="py-8 ">     
      <div className="text-left flex flex-col gap-2 bg-[#E6E6E6] pl-6 lg:pl-24 py-4">
        <h1 className="text-3xl">
          Personal loan application <br /> checklist
        </h1>
        <p>
          Check you meet our eligibility criteria and have the right documents
          ready before you apply for a new personal loan.
        </p>
        <p className="flex items-center gap-1">
          <GoClock /> Get response from our team
        </p>
        <Link
          href={`${pathname}/credit-loan`}
          className="btn w-[150px] ml-1 rounded-md  text-white text-center py-2 px-4 bg-[#012169]"
        >
          Apply Now
        </Link>
      </div>

      <div className="my-3 pl-6 lg:pl-24 bg-[#F5F5F5]">
        <h3>
          If you’re an existing NAB customer, save time by using your NAB ID to:
        </h3>
        <p className="flex items-center gap-1 ml-2">
          <GoDotFill />
          Pre-fill personal details
        </p>
        <p className="flex items-center gap-1 ml-2">
          <GoDotFill />
          Pre-fill NAV financial details
        </p>
        <h3 className="text-[14px]">
          If you’re a new NAB customer then apply online
        </h3>
      </div>
      <div className="my-3 flex flex-col gap-2 pl-6 lg:pl-24 bg-[#F5F5F5]">
        <h1 className="text-3xl">Have these items ready</h1>
        <p className="flex items-center gap-1">
          <TiTickOutline />
          Driver’s license number (if you have one).
        </p>
        <p className="flex items-center gap-1">
          <TiTickOutline />
          Employment details for the past three years.
        </p>
        <p className="flex items-center gap-1">
          <TiTickOutline />
          Your financial information, including income, assets, debts and
          expenses.
        </p>

        <p>
          You can upload your supporting financial information documents in the
          application form. If you can’t upload your documents, the confirmation
          email we send will outline other ways you can provide the documents.
        </p>
        <hr className="my-4 h-[3px] bg-black" />
      </div>
      <div className="my-3 flex flex-col gap-2 pl-6 lg:pl-24 bg-[#F5F5F5]">
        <h1>ELIGIBILITY</h1>
        <h1>Check if you're eligible to apply online</h1>
        <p className="flex items-center gap-1">
          <TiTickOutline />
          You're 18 years or older
        </p>
        <p className="flex items-center gap-1">
          <TiTickOutline />
          You’re applying as a sole applicant. You’ll have all the repayment
          obligations, even if someone else will be receiving a substantial
          benefit from the loan
        </p>
        <p className="flex items-center gap-1">
          <TiTickOutline />
          You're receiving a regular income
        </p>
        <p className="flex items-center gap-1">
          <TiTickOutline />
          You have to provide your NID or passport
        </p>
      </div>
      <div className="my-3 flex flex-col gap-2 pl-6 lg:pl-24 bg-[#F5F5F5]">
        <h1>What you can't use a personal loan for</h1>
        <p className="flex items-center gap-1">
          <RxCrossCircled color="red" />
          Illegal activities{" "}
        </p>
        <p className="flex items-center gap-1">
          <RxCrossCircled color="red" />
          Business purposes. Explore our business loans or discuss further with
          your business banker
        </p>
        <p className="flex items-center gap-1">
          <RxCrossCircled color="red" />
          Lender's Mortgage Insurance (LMI)
        </p>
        <p className="flex items-center gap-1">
          <RxCrossCircled color="red" />
          Home loan deposit{" "}
        </p>
      </div>
      <div className="my-3 flex flex-col gap-2 pl-6 lg:pl-24 bg-[#F5F5F5]">
        <h1>GETTING STARTED</h1>
        <h1>How to apply for a NAB Personal Loan</h1>
        <p className="flex items-center gap-2">
          <TbCircleNumber1 size={25} />
          Submit your application: Get a decision on conditional approval in
          under 60 seconds. If conditionally approved, we’ll give you your
          indicative interest rate and repayment amount.
        </p>
        <p className="flex items-center gap-2">
          <TbCircleNumber2 size={25} />
          We’ll verify your information: Depending on your circumstances, we may
          do other checks and contact you for further information.
        </p>
        <p className="flex items-center gap-2">
          <TbCircleNumber3 size={25} />
          Accept your offer: If you’re approved and accept our loan offer
          through NAB Internet Banking, your money will be ready in one business
          day.
        </p>
      </div>
      <div className="my-3 flex flex-col gap-2  p-4 pl-6 lg:pl-24 bg-[#FFFFFF]">
        <h1>Ready for Apply</h1>
        <h1>
          If you've checked you're eligible to apply and have all your
          information ready, let's get started.
        </h1>
        <Link
          href={`${pathname}/credit-loan`}
          className="btn w-[150px] rounded-md  text-white text-center py-2 px-4 bg-[#012169]"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
};


export default page;
