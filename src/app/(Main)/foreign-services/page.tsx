import BreadCumbs from "@/components/pages/CurrencyCalculator/BreadCumbs/BreadCumbs";
import Calculator from "@/components/pages/CurrencyCalculator/Calculator/Calculator";
import SendMoney from "./SendMoney/SendMoney";
import ForeignExchange from "@/components/pages/home_page/Foreign-Exchange";

const page = () => {
  return (
    <div >
      <BreadCumbs />
      <ForeignExchange/>
   
     {/* <Calculator /> */}
      <SendMoney />
     

    </div>
  );
};

export default page;
