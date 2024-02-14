'use client';
import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Merchant", value: 12, color: "#0088FE" },
  { name: "Saving", value: 16, color: "#00C49F" },
  { name: "General", value: 10, color: "#FFBB28" },
  { name: "Student", value: 5, color: "#FF8042" },
];

const PieChartBox = () => {
  return (
    <div className="flex flex-col justify-between h-full">
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
