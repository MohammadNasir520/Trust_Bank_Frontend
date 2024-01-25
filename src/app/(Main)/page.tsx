import CurrencyCalculator from "@/components/pages/CurrencyCalculator/CurrencyCalculator";
import FaqSection from "@/components/pages/home_page/FaqSection";
import TotalCount from "@/components/pages/home_page/TotalCount";

export default function page() {
  return (
    <>
      <CurrencyCalculator />
      <TotalCount />
      <FaqSection />
    </>
  );
}
