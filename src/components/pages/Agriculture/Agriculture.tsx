import AgricultureBanner from "@/components/UI/Agriculture/AgricultureBanner";
import AgricultureCard from "@/components/UI/Agriculture/AgricultureCard";
import React from "react";

const Agriculture = () => {
  return (
    <div className="">
      <AgricultureBanner></AgricultureBanner>

      <div className="px-11 grid md:grid-cols-2 gap-10 my-3">
        <AgricultureCard></AgricultureCard>
        <AgricultureCard></AgricultureCard>
        <AgricultureCard></AgricultureCard>
        <AgricultureCard></AgricultureCard>
        <AgricultureCard></AgricultureCard>
        <AgricultureCard></AgricultureCard>
      </div>
    </div>
  );
};

export default Agriculture;
