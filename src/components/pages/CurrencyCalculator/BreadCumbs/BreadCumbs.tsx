import { Button, Text } from "@chakra-ui/react";
import Link from "next/link";

const BreadCumbs = () => {
  const backgroundImageUrl = "/assets/fr-hero.jpg";
  return (
    <div className="relative">
      <div
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
        }}
        className="bg-cover bg-center h-[260px] lg:h-[420px] relative"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="absolute top-[24%] lg:top-[30%] left-[5%] text-white">
        <Text className="text-xl lg:text-4xl font-light">
          Bringing the world closer to you
        </Text>
        <Text className="text-sm lg:text-base mt-2 lg:mt-4 mb-5 font-normal w-[90%]">
          Take advantage of our advanced and innovative range of Foreign
          Exchange products and services
        </Text>
        <Link
          href="#"
          className="bg-transparent hover:bg-[#012169] text-white       font-semibold py-2 px-6 border border-white hover:border-transparent rounded"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default BreadCumbs;
