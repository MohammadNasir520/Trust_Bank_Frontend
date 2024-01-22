import AgricultureBanner from "@/components/UI/Agriculture/AgricultureBanner";
import AgricultureCard from "@/components/UI/Agriculture/AgricultureCard";
import React from "react";

const Agriculture = () => {
  return (
    <div className="min-h-screen">
      <AgricultureBanner></AgricultureBanner>
      <div className="px-11">
        <AgricultureCard></AgricultureCard>
      </div>
    </div>
  );
};

export default Agriculture;
