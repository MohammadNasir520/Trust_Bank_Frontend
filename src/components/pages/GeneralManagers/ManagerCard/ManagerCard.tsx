import { Card, CardBody, Heading } from "@chakra-ui/react";
import Image from "next/image";

interface ManagerCardProps {
  name: string;
  avatar: string;
  designation: string;
}

const ManagerCard: React.FC<ManagerCardProps> = ({
  name,
  avatar,
  designation,
}) => {
  return (
    <Card maxW="sm" className="border border-[#01206997]">
    <CardBody className="flex flex-col items-center justify-center py-4">
      <div className="w-3/4 lg:w-2/3 p-[3px] border border-[#01206997] rounded">
        <Image
          src={avatar}
          alt={name}
          width={100}
          height={300}
          className="w-full h-28 lg:h-32 border object-cover"
        />
      </div>

      <Heading className="text-sm text-center lg:text-base font-medium mt-2">
        {name}
      </Heading>
      <Heading className="text-sm text-center font-normal mt-1">{designation}</Heading>
    </CardBody>
  </Card>
  );
};

export default ManagerCard;
