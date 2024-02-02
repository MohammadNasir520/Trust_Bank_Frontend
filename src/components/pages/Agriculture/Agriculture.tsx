import LoanCard from "@/components/Common/LoanCard";
import agriloanPic2 from "@/assets/images/1000_F_689149460_ijz29cyHCepwutpgrhNpGJGnx0RflaeU.jpg";
import demoData from "./data";
import Image from "next/image";

const Agriculture = () => {
  return (
    <div className="">
    
      <div className="w-full  ">
      <div className="relative">
        <Image
          width={1400}
          height={300}
          src={agriloanPic2}
          alt="agri loan pic"
          className="h-96 object-cover "
        ></Image>

        <h1 className="text-2xl text-white font-sans font-bold absolute left-5 top-1/2">
          Take Loan From our trust Bank in minimum interest
        </h1>
      </div>
    </div>

      <div className="px-11 grid md:grid-cols-2 gap-10 my-3">
        <LoanCard demoData={demoData}/>
        
      </div>
    </div>
  );
};

export default Agriculture;
