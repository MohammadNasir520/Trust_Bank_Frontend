"use client";

import { useGetProvidersQuery } from "@/redux/api/providerApi";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Image from "next/image";

const providerData = [
  {
    service: "Electricity",
    provider: [
      {
        name: "desco",
        image: "/desco.png",
        bill: "123",
      },
      {
        name: "desco",
        image: "/desco.png",
        bill: "123",
      },
      {
        name: "desco",
        image: "/desco.png",
        bill: "123",
      },
      {
        name: "desco",
        image: "/desco.png",
        bill: "123",
      },
    ],
  },
  {
    service: "Water",
    provider: [
      {
        name: "Oasa",
        image: "/desco.png",
        bill: "123",
      },
      {
        name: "Pure Life",
        image: "/desco.png",
        bill: "123",
      },
      {
        name: "National",
        image: "/desco.png",
        bill: "123",
      },
      {
        name: "",
        image: "/desco.png",
        bill: "123",
      },
      {
        name: "Oasa",
        image: "/desco.png",
        bill: "123",
      },
    ],
  },
];

const Overview = () => {
  const { data } = useGetProvidersQuery(undefined);

  const providers = data?.data;

  // console.log("Data::", data);

  return (
    <div>
      <div className="bg-[#535C91]  rounded-md pb-4 ">
        <div className="flex flex-col items-center justify-center bg-gray-900 py-10">
          {/* Component Start */}
          <h1 className="text-lg text-gray-400 font-medium">
            Electricity Bill Provider - Data
          </h1>

          <TableContainer className="w-[40%] rounded-md shadow-md py-0 col-span-1 lg:col-span-3 my-2">
            <Table className="w-full p-0 my-0">
              <Thead className="w-full bg-gray-800 text-[12px] uppercase font-medium">
                <Tr className="text-gray-400 py-2 bg-gray-800 text-[12px] uppercase font-medium flex items-center">
                  <Th className="flex items-center pl-6 gap-x-1 w-1/3">
                    Provider
                  </Th>
                  <Th className="flex items-center pl-6 gap-x-1 w-1/3">
                    Service
                  </Th>
                  <Th className="flex items-center pl-6 gap-x-1 w-1/3">
                    Details
                  </Th>
                </Tr>
              </Thead>

              <Tbody>
                {providers &&
                  providers.map((el: any, index: any) => (
                    <Tr
                      key={index}
                      className="text-gray-400 py-2 bg-gray-800 bg-opacity-20 text-[12px] capitalize font-medium flex items-center"
                    >
                      <Td className="flex items-center pl-6 gap-x-1 w-1/3">
                        <Image
                          src="/assets/images/regenerative.png"
                          alt="Desco"
                          width={20}
                          height={20}
                          className="w-5"
                        />
                        <span className="font-medium">{el.providerName}</span>
                      </Td>
                      <Td className="w-1/3 flex items-center pl-6">
                        {el.service}
                      </Td>
                      <Td className="w-1/3 flex items-center pl-6">
                        <button className=" text-white rounded-md px-4 py-1">
                          View
                        </button>
                      </Td>
                    </Tr>
                  ))}
              </Tbody>
            </Table>
          </TableContainer>

          {/* Component End  */}
        </div>
      </div>
    </div>
  );
};

export default Overview;
