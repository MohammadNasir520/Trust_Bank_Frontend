
import LoanCard from "@/components/Common/LoanCard";
import Banner from "../../../../public/assets/images/education.jpg";
import demoData from "./data";
import React from "react";
import Image from "next/image";

const Education = () => {
  return (
    <div >
         <div className="w-full  ">
    <div className="relative">
      <Image
        width={1400}
        height={300}
        src={Banner}
        alt="agri loan pic"
        className="h-96 object-cover "
      ></Image>

      <h1 className="text-2xl text-[#012169] font-sans font-bold absolute left-36 top-1/2">
      Education 
      </h1>
    </div>
  </div>

      <div className="px-11 grid md:grid-cols-2 gap-10 my-3">
        <LoanCard demoData={demoData}/>
        
      </div>
    </div>
  );
};

export default Education;
