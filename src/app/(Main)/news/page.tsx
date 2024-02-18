"use client"
import { newsData } from "@/constants/constants";
import Hero from "./Hero/Hero";
import NewsCard from "./NewsCard/NewsCard";
import { usePathname } from "next/navigation";

const News = () => {
  const pathname = usePathname();
  
  return (
    <div>
      {pathname === '/news' ?  <Hero title="Stay up to date with our news" /> : <h1 className="text-center p-5 text-xl lg:text-3xl py-12 lg:py-15 gap-4 lg:gap-10">
      Latest Trust Bank news
        </h1>}
      <div className="mx-auto py-4 w-4/5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {newsData &&
          newsData.map((el, index) => {
            return <NewsCard key={index} news={el} />;
          })}
      </div>
    </div>
  );
};

export default News;
