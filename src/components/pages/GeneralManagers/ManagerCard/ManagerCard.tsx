"use client";

import Image from "next/image";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Card,
  CardBody,
  Heading,
  useDisclosure,
  Button,
  Text,
  HStack,
} from "@chakra-ui/react";
import { useRef } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

interface ManagerCardProps {
  index: number; // Receive index prop
  name: string;
  avatar: string;
  designation: string;
  about: string;
  socials?: {
    facebook?: string;
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

const ManagerCard: React.FC<ManagerCardProps> = ({
  name,
  avatar,
  designation,
  about,
  socials,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = useRef(null);

  return (
    <>
      <Card
        onClick={onOpen}
        ref={finalRef}
        maxW="sm"
        className="border border-[#01206997] cursor-pointer"
      >
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
          <Heading className="text-sm text-center font-normal mt-1">
            {designation}
          </Heading>
        </CardBody>
      </Card>
      <Modal finalFocusRef={finalRef} onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent className="bg-white shadow-md border rounded p-8 h-[50vh] overflow-y-scroll max-w-[50%] fixed top-48 left-0 right-0 bottom-0 m-auto">
          <ModalCloseButton style={{ justifyContent: "flex-end" }} />
          <ModalBody>
            <div className="flex items-center gap-6">
              <Image
                src={avatar}
                alt=""
                width={100}
                height={100}
                className="border rounded-full object-cover"
              />
              <div>
                <Heading className="text-sm lg:text-base font-bold">
                  {name}
                </Heading>
                <Heading className="text-sm font-normal mt-1">
                  {designation}
                </Heading>
              </div>
            </div>
            <Text className="text-sm text-justify font-normal mt-2">
              {about}
            </Text>
            <HStack className="flex items-center justify-center mt-2 gap-4">
              {socials?.facebook && (
                <Link href={socials.facebook} passHref>
                  <Button
                    as="a"
                    target="_blank"
                    leftIcon={<FaFacebook className="w-5 h-5" />}
                    className="scrollbar-hide"
                  />
                </Link>
              )}
              {socials?.linkedin && (
                <Link href={socials.linkedin} passHref>
                  <Button
                    as="a"
                    target="_blank"
                    leftIcon={<FaLinkedin className="w-5 h-5" />}
                    className="scrollbar-hide"
                  />
                </Link>
              )}
              {socials?.twitter && (
                <Link href={socials.twitter} passHref>
                  <Button
                    as="a"
                    target="_blank"
                    leftIcon={<FaTwitter className="w-5 h-5" />}
                    className="scrollbar-hide"
                  />
                </Link>
              )}
              {socials?.github && (
                <Link href={socials.github} passHref>
                  <Button
                    as="a"
                    target="_blank"
                    leftIcon={<FaGithub className="w-5 h-5" />}
                    className="scrollbar-hide"
                  />
                </Link>
              )}
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ManagerCard;
