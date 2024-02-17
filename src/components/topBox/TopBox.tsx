import React, { useEffect, useState } from "react";

import { topDealUsers } from "../../../public/data/data";
import { Select } from "@chakra-ui/react";
import { formatDate, formatTime } from "@/utils/formatDate";

const TopBox = ({ deposit, withdraw }: any) => {
  const [loading, setLoading] = useState(false)
  const [transaction, setTransaction] = useState('Deposit');
  const [transactionData, setTransactionData] = useState<any[]>(deposit)
  useEffect(() => {
    if (deposit?.length) { setLoading(true) }
    setTransactionData(transaction === 'Deposit' ? deposit : withdraw)
  }, [transaction, deposit])
  return (
    <div className=" px-4 py-2 rounded-lg bg-white shadow">
      <div className="flex justify-between mb-5 mt-2 ">
        <h1 className="text-xl ">Latest Transaction ({transaction})</h1>
        <div className="flex text-sm gap-2 mt-2">
          <span onClick={() => setTransaction('Deposit')} className={`px-3 h-fit cursor-pointer rounded-2xl ${transaction === 'Deposit' ? 'bg-blue-500 text-white' : ' bg-gray-200 text-gray-700'}`}>Deposit</span>
          <span onClick={() => setTransaction('Withdraw')} className={`px-3 h-fit cursor-pointer  rounded-2xl ${transaction === 'Withdraw' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>Withdraw</span>
        </div>

      </div>
      <div className="min-h-[225px]">
        {transactionData?.map((trans: any) => (
          <div className="flex items-center justify-between mb-8 " key={trans.id}>

            <div className="flex gap-5">
              <img
                src={'/assets/images/regenerative.png'}
                alt=""
                className="w-11 h-11 rounded-full object-cover"
              />
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium capitalize">{trans?.user?.name} <span className="text-xs text-gray-700">({formatDate(trans?.createdAt)} at {formatTime(trans?.createdAt)})</span> </p>
                <span className="text-[12px]">{trans?.user?.email}</span>
              </div>
            </div>
            <span className="font-medium"> {trans?.amount} <span className="text-xs ml-1">{trans?.currency}</span></span>

          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
