'use client'

import Card from "@/components/UI/dashboard/card/Card";
import BigChartBox from "@/components/bigChartBox/BigChartBox";
import ChartBox from "@/components/chartBox/ChartBox";
import Balance from "@/components/dashboard/Balance/Balance";
import Loan from "@/components/dashboard/user/Loan";

import PieChartBox from "@/components/pieCartBox/PieChartBox";
import TopBox from "@/components/topBox/TopBox";

import { useGetAllBankProfilesQuery } from "@/redux/api/bankProfileApi";
import { useGetAllDepositQuery, useGetAllWithdrawQuery } from "@/redux/api/transactionApi";
import { totalBalance } from "@/utils/totalBalanceCount";
import { MdMoney } from "react-icons/md";


export default function page() {
  const { data } = useGetAllBankProfilesQuery(undefined)
  const bankProfile = data?.data || []
  const { data: depositData } = useGetAllDepositQuery(undefined)
  const { data: withdrawData } = useGetAllWithdrawQuery(undefined)
  const totalDeposit = totalBalance(depositData?.data)
  const totalWithdraw = totalBalance(withdrawData?.data)



  const cards = [
    {
      id: 1,
      title: "Total Deposit",
      count: totalDeposit,
      icon: <MdMoney />,
    },
    {
      id: 2,
      title: "Total Withdraws",
      count: totalWithdraw,
      icon: <MdMoney />,
    },
    // {
    //   id: 3,
    //   title: "Total Currency Exchanges",
    //   count: "200,000",
    //   icon: <MdMoney />,
    // },
  ];
  return (
    <div>
      <div className="grid grid-cols-5 grid-row-8 gap-2  h-full  bg-gray-100 p-4">
        <div className="col-span-3 ">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 ml-1">
              <Card item={cards[0]} />
              <Card item={cards[1]} />
              {/* <Card item={cards[0]} />
              <Card item={cards[0]} /> */}
            </div>
            <div className=" my-4">
              <BigChartBox />
            </div>
            <div className="h-[300px] my-2 overflow-x-hidden">
              <TopBox deposit={depositData?.data?.slice(0, 10)} withdraw={withdrawData?.data?.slice(0, 10)} />
            </div>
            <div>
              <Loan />
            </div>
          </div>
        </div>
        <div className=" rounded-lg col-span-2 ">
          <div className="w-full mx-auto">
            <PieChartBox />
          </div>
          <div>
            <ChartBox />
          </div>
          <div>
            <Balance bankProfile={bankProfile[0]} />
          </div>
          <div className="bg-[#f9f9f9]">
            <ChartBox />
          </div>
        </div>
      </div>
    </div>
  );
}


