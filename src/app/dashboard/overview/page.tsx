import BigChartBox from "@/components/bigChartBox/BigChartBox";
import ChartBox from "@/components/chartBox/ChartBox";
import Balance from "@/components/dashboard/Balance/Balance";
import User from "@/components/dashboard/user/User";
import PieChartBox from "@/components/pieCartBox/PieChartBox";
import TopBox from "@/components/topBox/TopBox";
import Card from "@/components/ui/dashboard/card/Card";
import { MdMoney } from "react-icons/md";

const cards = [
  {
    id: 1,
    title: "Total Deposit",
    count: "200,000",
    icon: <MdMoney />,
  },
  {
    id: 2,
    title: "Total Withdraws",
    count: "200,000",
    icon: <MdMoney />,
  },
  {
    id: 3,
    title: "Total Currency Exchanges",
    count: "200,000",
    icon: <MdMoney />,
  },
];
export default function page() {
  return (  

    <div>
      <div className="grid grid-cols-5 grid-row-8 gap-2  h-full py-6  px-4">
        <div className="col-span-3 ">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 ml-1">
              <Card item={cards[0]} />
              <Card item={cards[0]} />
              <Card item={cards[0]} />
              <Card item={cards[0]} />
            </div>
            <div className=" my-4">
              <BigChartBox />
            </div>
            <div className="h-[300px] my-2 overflow-x-hidden">
              <TopBox />
            </div>
            <div>
              <User />
            </div>
          </div>
        </div>
        <div className="border rounded-lg col-span-2 ">
          <div className="w-72 h-56 mx-auto">
            <PieChartBox />
          </div>
          <div>
            <ChartBox />
          </div>
          <div>
            <Balance />
          </div>
          <div className="bg-[#f9f9f9]">
            <ChartBox />
          </div>
        </div>
      </div>
    </div>
  );
}


