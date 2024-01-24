import Image from "next/image";
import React from "react";
import agriloanPic from "@/assets/images/240_F_648190691_6eZv29Qqitw3aHOGFGSgsfzni0cu2L5l.jpg";
import agriloanPic2 from "@/assets/images/1000_F_689149460_ijz29cyHCepwutpgrhNpGJGnx0RflaeU.jpg";
import agriloanPic3 from "@/assets/images/3.jpg";

const AgricultureBanner = () => {
  return (
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
  );
};

export default AgricultureBanner;
