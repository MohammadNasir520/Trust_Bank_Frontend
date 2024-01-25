import DebitCreditCardTab from "@/components/UI/Debit-Credit-card/DebitCreditCardTab";

import SliderCarousel from "@/components/UI/slider/Slider";
import FaqSection from "@/components/pages/home_page/FaqSection";
import ForeignExchange from "@/components/pages/home_page/Foreign-Exchange";
import LoanCalculatorPage from "@/components/pages/home_page/LoanCalculatorPage";
import TotalCount from "@/components/pages/home_page/TotalCount";
//@ts-ignore
import CardBanner from "@/components/ui/slider/CardBanner";

export default function page() {
  return (
    <>
      <CardBanner />
      <DebitCreditCardTab />
      <LoanCalculatorPage />
      <ForeignExchange />
      <TotalCount />
      <FaqSection />
    </>
  );
}
