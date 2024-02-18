
import LoanCard from "@/components/Common/LoanCard";
import Banner from "../../../../public/assets/images/home-loan.jpg";
import demoData from "./data";
import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <div >
         <div className="w-full  ">
    <div className="relative">
      <Image
        layout="responsive"
        src={Banner}
        alt="agri loan pic"
        className="h-96 object-cover "
      ></Image>

      <div className="text-[#012169] font-sans font-bold absolute left-40 top-1/2">
    
    
      </div>
    
               
          
    </div>
  </div>

      <div className="px-11 grid md:grid-cols-2 gap-10 my-3">
        <LoanCard demoData={demoData}/>
        
      </div>
    </div>
  );
};

export default Home;
