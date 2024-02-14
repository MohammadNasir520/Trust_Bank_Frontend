import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { LuNewspaper } from "react-icons/lu";

interface NewsPropTypes {
  news: {
    id: number;
    title: string;
    readingTime: string;
    publishedDate: string;
    featuredImage: string;
    details: string[];
  };
}

const NewsCard: React.FC<NewsPropTypes> = ({ news }) => {
  return (
    <Link href={`/news/${news.id}`}>
      <Card className="shadow-lg rounded-md">
        <CardBody>
          <Image
            src={news.featuredImage}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            className="rounded-t-md"
          />
          <Stack className="py-4 px-6" spacing="3">
            <Heading className="font-semibold text-sm">{news.title}</Heading>
            <div className="flex items-center gap-2 mt-4 mb-2">
              <div className="flex items-center gap-1">
                <LuNewspaper />
                <Text className="text-xs">{news.readingTime}</Text>
              </div>
              <Text className="font-light text-xs">|</Text>
              <Text className="text-xs">{news.publishedDate}</Text>
            </div>
          </Stack>
        </CardBody>
      </Card>
    </Link>
  );
};

export default NewsCard;
