'use client'
import { useAgricultureLoansQuery } from '@/redux/api/agricultureLoanApi';
import { Icon } from '@chakra-ui/react';
import React from 'react'



const Loan = () => {

  const { data: agricultureLoanData } = useAgricultureLoansQuery(undefined);
  const totalAgricultureLoan = agricultureLoanData?.data?.length;
  const segmentationData = [
    { c1: "Agricultural Loans", c2: totalAgricultureLoan, c3: "#363636", color: "#535353" },
    { c1: "Student Loans", c2: "441", c3: "#818bb1", color: "#595f77" },
    { c1: "Education Loans", c2: "233", c3: "#2c365d", color: "#232942" },
    { c1: "Home Loans", c2: "126", c3: "#334ed8", color: "#2c3051" },
  ];
  return (
    <div className="p-4 h-full bg-white rounded-lg mt-3">
      <div className="flex justify-between items-center">
        <div className=" text-xl">Total Loan History</div>

        <Icon path="res-react-dash-options" className="w-2 h-2" />
      </div>
      <div className="mt-3">All Loans</div>
      {segmentationData.map(({ c1, c2, c3, color }) => (
        <div className="flex items-center" key={c1}>
          <div
            className="w-2 h-2 rounded-full"
            style={{
              background: color,
            }}
          />
          <div className="ml-2" style={{ color }}>
            {c1}
          </div>
          <div className="flex-grow" />
          <div className="" style={{ color }}>
            {c2}
          </div>
          <div className="ml-2 w-12 card-stack-border" />
          <div className="ml-2 h-8">
            <div
              className="w-20 h-28 rounded-lg overflow-hidden"
              style={{
                background: c3,
              }}
            >
              {c1 === "Other" && (
                <img
                  src="https://assets.codepen.io/3685267/res-react-dash-user-card.svg"
                  alt=""
                />
              )}
            </div>
          </div>
        </div>
      ))}

      <div className="flex mt-3 px-3 items-center justify-between bg-details rounded-xl w-36 h-12">
        <div className="">Details</div>
        <Icon path="res-react-dash-chevron-right" className="w-4 h-4" />
      </div>
    </div>
  );
}

export default Loan