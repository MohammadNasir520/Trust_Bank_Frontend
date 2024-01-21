
import DebitCreditCardTab from "@/components/UI/Debit-Credit-card/DebitCreditCardTab";
import PageLayout from "@/components/layout/PageLayout";
import Banner from "@/components/pages/home_page/Banner";
import Footer from "@/components/pages/home_page/Footer";
import ForeignExchange from "@/components/pages/home_page/Foreign-Exchange";
import LoanCalculatorPage from "@/components/pages/home_page/LoanCalculatorPage";
import Image from "next/image";

export default function Home() {
  return (
    <PageLayout>
      <>
        <Banner />
        <DebitCreditCardTab />
        <LoanCalculatorPage />
        <ForeignExchange />
      </>
    </PageLayout>
  )

}
