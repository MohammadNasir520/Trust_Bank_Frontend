import DebitCreditCardTab from "@/components/UI/Debit-Credit-card/DebitCreditCardTab";
import SliderCarousel from "@/components/UI/slider/Slider";
import FaqSection from "@/components/pages/home_page/FaqSection";
import ForeignExchange from "@/components/pages/home_page/Foreign-Exchange";

import LoanCalculatorPage from "@/components/pages/home_page/LoanCalculatorPage";
import Offer from "@/components/pages/home_page/Offer";
import TotalCount from "@/components/pages/home_page/TotalCount";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
//@ts-ignore

export default function page() {
  return (
    <>
      {/* <div className="relative h-[400px] w-full bg-[url('https://travel.usnews.com/dims4/USNEWS/cf7910a/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FEllis_Island_Danny_Lehman_Getty.jpg')] bg-no-repeat bg-cover bg-center">
        <div className="flex flex-col gap-5 justify-center h-full px-2 lg:px-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#F5EEE6]">
            Travel to the moon
          </h1>
          <div className="w-full lg:w-[90%]">
            <p className="text-[16px] text-[#F5EEE6] ">
              Snow-capped peaks, alpine meadows and azure lakes are just a few
              reasons why Glacier National Park is one of America's most
              striking parks. There are more than 700 miles of hiking trails in
              this Montana crown jewel, plus 13 designated areas for camping. In
              the winter, travelers can enjoy snowshoeing and skiing, while
              during the summer vacationers can go swimming in Lake McDonald and
              whitewater rafting on Flathead River
            </p>
          </div>
          <div className="flex gap-3">
            <button className="py-2 px-6 bg-[#012169] shadow-md rounded-md font-normal  text-white text-[18px] ">
              Book now
            </button>
            <button className="py-2 px-6 bg-[#012169] shadow-md rounded-md font-normal  text-[18px] text-white">
              See details
            </button>
          </div>
        </div>
      </div> */}
      {/* <CardBanner /> */}

      <SliderCarousel />

      <DebitCreditCardTab />
      <Offer />
      <LoanCalculatorPage />
      <ForeignExchange />
      <TotalCount />
      <FaqSection />
    </>
  );
}
