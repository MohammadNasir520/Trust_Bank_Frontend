"use client";
import React from "react";
import { MdOutlineAccountBalance } from "react-icons/md";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Card = ({ item }: any) => {

  return (
    <div className="max-w-80 shadow rounded-md p-4 h-32 font-sans bg-white ">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className="flex gap-1 ">
            <MdOutlineAccountBalance size={25} color="#872341" />
            <h1 className=" font-semibold text-sm">{item?.title}</h1>
          </div>

          <h1 className="text-md font-bold ">${item?.count}</h1>
        </div>
        <div className="-mt-[15px] -mr-[10px]  ">
          <LineChart
            width={100}
            height={50}
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: 20,
              bottom: 5,
            }}
          >
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          </LineChart>
        </div>
      </div>
      <div className="flex justify-between items-center ">
        <h1 className="text-sm text-[#872341] font-semibold mt-5">View all</h1>
        <h1 className="flex flex-col text-center ">
          <span className="text-md font-bold text-[#01a9b4]">45%</span>{" "}
          <span className="font-semibold text-sm -mt-1">Growth</span>
        </h1>
      </div>
    </div>
  );
};

export default Card;
