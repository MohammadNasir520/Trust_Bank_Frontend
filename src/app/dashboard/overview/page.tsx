import BarChart from "@/components/dashboard/charts/BarChart";
import LineChart from "@/components/dashboard/charts/LineChart";
import PieChart from "@/components/dashboard/charts/PieChart";
import InfoCard from "@/components/dashboard/dashboard_ui/InfoCard";
import { MdMoney } from "react-icons/md";

export default function page() {
  return (
    <div>
      <div className="">
        <div className="grid grid-cols-3 gap-5 mb-4 text-gray-700">
          <InfoCard
            count={150000}
            icon={<MdMoney />}
            title="Total Deposit"
            subTitle="save  money for  future"
          />
          <InfoCard
            count={150000}
            icon={<MdMoney />}
            title="Total Withdraws"
            subTitle="save  money for  future"
          />
          <InfoCard
            count={150000}
            icon={<MdMoney />}
            title="Total Currency Exchanges"
            subTitle="save  money for  future"
          />
        </div>
        <div className="grid grid-cols-3 gap-5">
          <LineChart />
          <BarChart />
          <PieChart />
        </div>
      </div>
    </div>
  );
}
