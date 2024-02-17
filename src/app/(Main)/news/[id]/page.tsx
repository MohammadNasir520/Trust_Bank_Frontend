import { newsData } from "@/constants/constants";
import Hero from "../Hero/Hero";
import { LuNewspaper } from "react-icons/lu";
import { Divider, Text } from "@chakra-ui/react";

const NewsDetails = ({ params }: any) => {
  const { id } = params; // Assuming params is an object containing the id

  // Filter the newsData array to find the object with the matching id
  const data = newsData.find((el) => el.id === parseInt(id)); // Assuming id is a number

  console.log("ID:", data);

  // Fetch news data based on id and render the news page

  return (
    <div>
      <Hero title={data?.title} />
      <div className="mx-auto py-20 w-4/5">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <LuNewspaper />
            <Text className="text-xs">{data?.readingTime}</Text>
          </div>
          <Text className="font-light text-xs">|</Text>
          <Text className="text-xs">{data?.publishedDate}</Text>
        </div>
        <Divider className="h-[1px] bg-slate-200 mt-4 mb-10" />
        {data?.details &&
          data.details.map((p, index) => (
            <Text key={index} className="text-sm font-light my-4">
              {p}
            </Text>
          ))}
      </div>
    </div>
  );
};

export default NewsDetails;
