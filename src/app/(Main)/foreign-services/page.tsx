import BreadCumbs from "@/components/pages/CurrencyCalculator/BreadCumbs/BreadCumbs";
import Calculator from "@/components/pages/CurrencyCalculator/Calculator/Calculator";
import SendMoney from "./SendMoney/SendMoney";

const page = () => {
  return (
    <div>
      <BreadCumbs />
      <SendMoney />
      <Calculator />
    </div>
  );
};

export default page;
