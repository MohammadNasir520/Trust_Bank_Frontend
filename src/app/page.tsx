"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import DebitCreditCardTab from "@/components/UI/Debit-Credit-card/DebitCreditCardTab";
import SliderCarousel from "@/components/UI/slider/Slider";
import PageLayout from "@/components/layout/PageLayout";
// import Banner from "@/components/pages/home_page/Banner";
import ForeignExchange from "@/components/pages/home_page/Foreign-Exchange";
import LoanCalculatorPage from "@/components/pages/home_page/LoanCalculatorPage";
import AgricultureCard from "@/components/UI/Agriculture/AgricultureCard";
import Agriculture from "@/components/pages/Agriculture/Agriculture";

export default function Home() {
  return (
    <PageLayout>
      <>
        <SliderCarousel />
        {/* <Banner /> */}
        <DebitCreditCardTab />
        <LoanCalculatorPage />
        <ForeignExchange />
        <Agriculture />
      </>
    </PageLayout>
  );
}
