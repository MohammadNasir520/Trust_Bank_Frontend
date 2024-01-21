
import DebitCreditCardTab from "@/components/UI/Debit-Credit-card/DebitCreditCardTab";
import PageLayout from "@/components/layout/PageLayout";
import Footer from "@/components/pages/Footer";
import ForeignExchange from "@/components/pages/Foreign-Exchange";
import LoanCalculatorPage from "@/components/pages/LoanCalculatorPage";
import Image from "next/image";

export default function Home() {
  return (
    <PageLayout>
      <DebitCreditCardTab/>
      <LoanCalculatorPage/>
      <ForeignExchange/>

    
    </PageLayout>
  )

}
