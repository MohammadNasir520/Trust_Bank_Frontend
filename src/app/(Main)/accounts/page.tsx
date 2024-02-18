import AccountCard from "@/components/UI/Card/AccountCard";
import { Link } from "@chakra-ui/react";
import Image from "next/image";

const demoData = [
  {
    name: "Current",
    imageUrl: "/assets/images/current-account.png", 
    type:"current"
  },
  {
    name: "Saving",
    imageUrl: "/assets/images/saving.png", 
    type:"saving"
  },
  {
    name: "Student",
    imageUrl: "/assets/images/student.png", 
    type:"student"
  },
  {
    name: "Merchant",
    imageUrl: "/assets/images/merchant.png", 
    type:"merchant"
  },
  
];

function Account() {
  return (
    <div className="py-20">
      <h1 className="text-center  text-xl lg:text-3xl">Choose your preferred account type</h1>
      <div className="flex justify-center items-center py-8  ">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-y-4 gap-x-4">
          {demoData?.map((data, index) => (
            <div key={index}>
              <AccountCard data={data} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Account;
