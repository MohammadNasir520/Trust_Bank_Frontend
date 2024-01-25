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
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/pages/home_page/Footer";

export default function Home() {
  return (
   
      <>
        <Navbar />
        <SliderCarousel /> 
        {/* <Banner /> */}
         <DebitCreditCardTab />
      <div className="my-44 lg:my-8 md:my-20">
      <LoanCalculatorPage />
      </div>
        {/* <BankProfile /> */}
        <ForeignExchange />
        <Footer />
      </>
    
  );
}
