"use client"
import React from "react";
import EducationBanner from "../../../../../../public/assets/images/education.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import EducationLoanDetails from "@/components/pages/Education/EducationLoanDetails";


const AgricultureDetailsPage = ({ params }: any) => {
  const { title } = params;
  const router = useRouter();

  const loanTypes = [
    { label: "Agriculture", href: "/loans/agriculture" },
    { label: "Personal/Individual", href: "/loans/personal" },
    { label: "Corporate & Business", href: "/loans/corporate" },
    { label: "Education", href: "/loans/education" },
    { label: "Home Loans", href: "/loans/home" },
    { label: "Vehicle Loans", href: "/loans//vehicle" },
  ];

  const handleLoanTypeClick = (href: string) => {
    router.push(href);
  };

  return (
    <div>
      <div className="w-full">
        <div className="relative">
          <Image
            layout="responsive"
            src={EducationBanner}
            alt="agri loan pic"
            className="h-96 object-cover"
          ></Image>

          <h1 className="text-2xl text-[#012169] font-sans font-bold absolute left-36 top-1/2">
            Education Loan Scheme
          </h1>
        </div>
      </div>

    
      <div className="w-full flex flex-col gap-1 items-center justify-center py-12 lg:py-16">
       
        <div className="w-4/5 lg:w-5/6 flex flex-col lg:flex-row gap-6 lg:gap-10">
         
          <div className="w-full lg:w-1/4 flex flex-col items-start gap-4">
            {loanTypes.map((loanType, index) => (
              <p
                key={index}
                onClick={() => handleLoanTypeClick(loanType.href)}
                className="border border-[#012169] hover:bg-[#012169] py-1 lg:py-2 px-4 lg:px-0 w-auto lg:w-full text-center font-medium hover:text-white rounded cursor-pointer"
              >
                {loanType.label}
              </p>
            ))}
          </div>

          <div className="w-full lg:w-3/4">
          
            <EducationLoanDetails />
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgricultureDetailsPage;
