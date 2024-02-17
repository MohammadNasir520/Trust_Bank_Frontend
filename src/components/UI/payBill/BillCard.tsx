import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

interface Provider {
  name: string;
  image: string;
}

interface BillCardProps {
  item: Provider;
  title: string;
}

const BillCard: React.FC<BillCardProps> = ({ item, title }) => {
  return (
    <Link
      href={{
        pathname: "/pay-bill/confirm-bill",
        query: { keyword: title, billName: item.name },
      }}
    >
      <div className="flex flex-col justify-center items-center  border-2 py-2 font-serif font-medium text-md">
        <h1>{item.name}</h1>
        <Image
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover object-center"
          width={500}
          height={500}
        />
      </div>
    </Link>
  );
};

export default BillCard;
