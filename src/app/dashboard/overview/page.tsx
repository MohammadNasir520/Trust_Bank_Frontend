import BarChart from "@/components/dashboard/charts/BarChart";
import LineChart from "@/components/dashboard/charts/LineChart";
import PieChart from "@/components/dashboard/charts/PieChart";


export default function page() {
    return (
        <div>dashboard overview page
            <div className=" grid lg:grid-cols-3 gap-4">
                <LineChart />
                <BarChart />
                <PieChart />
            </div>
        </div>
    )
}
