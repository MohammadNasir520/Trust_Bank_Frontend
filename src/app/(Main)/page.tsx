import DebitCreditCardTab from "@/components/UI/Debit-Credit-card/DebitCreditCardTab";
import SliderCarousel from "@/components/UI/slider/Slider";
import FaqSection from "@/components/pages/home_page/FaqSection";
import ForeignExchange from "@/components/pages/home_page/Foreign-Exchange";
import LoanCalculatorPage from "@/components/pages/home_page/LoanCalculatorPage";
import TotalCount from "@/components/pages/home_page/TotalCount";

export default function page() {
    return (
        <>
      
        <SliderCarousel /> 
        {/* <Banner /> */}
         <DebitCreditCardTab />
      <div className="my-44 lg:my-8 md:my-20">
      <LoanCalculatorPage />
      </div>
      <TotalCount />
    <FaqSection />
        {/* <BankProfile /> */}
        <ForeignExchange />
       
        

        </>
    )
}
