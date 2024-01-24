"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import DebitCreditCardTab from "@/components/UI/Debit-Credit-card/DebitCreditCardTab";
import SliderCarousel from "@/components/UI/slider/Slider";
import PageLayout from "@/components/layout/PageLayout";
import Banner from "@/components/pages/home_page/Banner";
import ForeignExchange from "@/components/pages/home_page/Foreign-Exchange";
import LoanCalculatorPage from "@/components/pages/home_page/LoanCalculatorPage";
import BankProfile from "@/components/pages/BankProfile/BankProfile";

export default function Home() {
  return (
    <PageLayout>
      <div>
        <SliderCarousel /> 
        <Banner /> 
        <DebitCreditCardTab />
        <div className="my-44 lg:my-8 md:my-20">
        <LoanCalculatorPage />
        </div>
        <ForeignExchange />
        <BankProfile />
      </div>
    </PageLayout>
  );
}
