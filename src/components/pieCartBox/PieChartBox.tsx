'use client';
import { useCurrentAccountsQuery, useGetAllAccountsQuery, useMerchantAccountsQuery, useSavingAccountsQuery, useStudentAccountsQuery } from "@/redux/api/accountApi";
import { totalAccountByRole } from "@/utils/accountCount";
import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";



const PieChartBox = () => {


  const { data: studentAccounts } = useStudentAccountsQuery(undefined);
  const { data: merchantAccounts } = useMerchantAccountsQuery(undefined);
  const { data: savingsAccounts } = useSavingAccountsQuery(undefined)
  const { data: currentAccounts } = useCurrentAccountsQuery(undefined)


  const data = [
    { name: "Merchant", value: merchantAccounts?.data?.length, color: "#0088FE" },
    { name: "Savings", value: savingsAccounts?.data?.length, color: "#00C49F" },
    { name: "Currents", value: currentAccounts?.data?.length, color: "#FFBB28" },
    { name: "Student", value: studentAccounts?.data?.length, color: "#FF8042" },
  ];


  return (
    <div className="flex flex-col justify-between h-full bg-white shadow px-4 py-2 rounded-lg ">
      <h1 className="text-xl">Bank Account</h1>
      <div className="flex items-center justify-center w-full h-full">
        <ResponsiveContainer width="99%" height={150}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-between text-[10px] px-3">
        {data.map((item) => (
          <div className="flex flex-col  items-center" key={item.name}>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
