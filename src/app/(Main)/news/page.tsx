import { newsData } from "@/constants/constants";
import Hero from "./Hero/Hero";
import NewsCard from "./NewsCard/NewsCard";

const News = () => {
  return (
    <div>
      <Hero title="Stay up to date with our news" />
      <div className="mx-auto py-20 w-4/5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {newsData &&
          newsData.map((el, index) => {
            return <NewsCard key={index} news={el} />;
          })}
      </div>
    </div>
  );
};

export default News;
