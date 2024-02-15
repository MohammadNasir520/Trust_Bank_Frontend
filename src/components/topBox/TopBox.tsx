import React from "react";

import { topDealUsers } from "../../../public/data/data";

const TopBox = () => {
  return (
    <div className="">
      <h1 className="mb-5 text-xl">Latest Transaction</h1>
      <div className="">
        {topDealUsers.map((user) => (
          <div className="flex items-center justify-between mb-8" key={user.id}>
            <div className="flex gap-5">
              <img
                src={user.img}
                alt=""
                className="w-11 h-11 rounded-full object-cover"
              />
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium ">{user.username}</span>
                <span className="text-[12px]">{user.email}</span>
              </div>
            </div>
            <span className="font-medium">${user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
