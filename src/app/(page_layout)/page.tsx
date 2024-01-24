"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import DebitCreditCardTab from "@/components/UI/Debit-Credit-card/DebitCreditCardTab";
import SliderCarousel from "@/components/UI/slider/Slider";
import Banner from "@/components/pages/home_page/Banner";
import ForeignExchange from "@/components/pages/home_page/Foreign-Exchange";
import LoanCalculatorPage from "@/components/pages/home_page/LoanCalculatorPage";
import BankProfile from "@/components/pages/BankProfile/BankProfile";
import TotalCount from "@/components/pages/home_page/TotalCount";
import FaqSection from "@/components/pages/home_page/FaqSection";

export default function Home() {
  return (

    <>
      {/* <SliderCarousel /> */}
      {/* <Banner /> */}
      {/* <DebitCreditCardTab />
        <LoanCalculatorPage />
        <ForeignExchange /> */}
      <BankProfile />
      <TotalCount />
      <FaqSection />
    </>

  );
}
