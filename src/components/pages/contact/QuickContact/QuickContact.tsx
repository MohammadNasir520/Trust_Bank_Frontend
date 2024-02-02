import { Divider } from "@chakra-ui/react";
import { Table, Thead, Tr, Th, TableContainer } from "@chakra-ui/react";
import clsx from "clsx";
import Link from "next/link";

const BankHistoryData = [
  {
    Facility: "Facility",
    "Phone Number": "Phone Number",
    Service: "Service",
  },
  {
    Facility: "Missed Call Number (Balance Enquiry)",
    "Phone Number": "96776 33000",
    Service:
      "Missed Call Service for Balance enquiry.   SMS will be received in the customer’s registered Mobile Number.",
  },
  {
    Facility: "SMS Number (Loan Request)",
    "Phone Number": "56677 (IBHL, IBVL, IBML)",
    Service: `<ul style="display: flex; flex-direction: column;">
    <li>IBHL – For Home Loan Request</li>
    <li>IBVL – For Vehicle Loan Request</li>
    <li>IBML – For Mortgage Loan Request</li>
    </ul>`,
  },
];

const QuickContact = () => {
  return (
    <TableContainer className="my-2">
      <Table className="w-full flex p-0">
        <Thead className="w-full border border-[#012169] border-b-0">
          <Tr className="flex flex-col">
            {BankHistoryData.map((el, index) => (
              <Th
                key={el.Facility}
                className="border-b border-b-[#012169] w-full grid grid-cols-8 p-0 m-0 text-left"
              >
                <div
                  className={clsx(
                    `
                    whitespace-pre-line px-2 text-sm lg:text-base border-r border-r-[#012169] flex items-center col-span-2
                    `,
                    index === 0 ? "font-semibold" : "font-normal"
                  )}
                >
                  {el.Facility}
                </div>
                <div
                  className={clsx(
                    `p-2 whitespace-pre-line text-sm lg:text-base border-r border-r-[#012169] flex items-center col-span-2`,
                    index === 0 ? "font-semibold" : "font-normal"
                  )}
                >
                  {el["Phone Number"]}
                </div>
                <div
                  className={clsx(
                    `
                p-2 whitespace-pre-line text-sm lg:text-base flex items-center col-span-4`,
                    index === 0 ? "font-semibold" : "font-normal"
                  )}
                >
                  <div dangerouslySetInnerHTML={{ __html: el.Service }} />
                </div>
              </Th>
            ))}
          </Tr>
        </Thead>
      </Table>
    </TableContainer>
  );
};

export default QuickContact;
