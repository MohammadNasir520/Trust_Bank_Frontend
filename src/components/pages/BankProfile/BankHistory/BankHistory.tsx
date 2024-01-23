import { Divider } from "@chakra-ui/react";
import { Table, Thead, Tr, Th, TableContainer } from "@chakra-ui/react";

const BankHistoryData = [
  {
    year: "1907",
    description:
      "Bank was incorporated on March 5, 1907 with an Authorized Capital of Rs 20 lakhs and commenced its business on August 15, 1907. In the year 1907, the Indian Bank Ltd. had the tree ‘Banyan’ as a part of its emblem denoting an all-around progress, growth (far and wide) and an ever-increasing prosperity.",
  },
  {
    year: "1921",
    description: "Bank’s capital was raised to Rs 60 lakhs from Rs 20 lakhs.",
  },
  {
    year: "1932",
    description:
      "Bank celebrated its Silver Jubilee. Bank opened its first overseas operations in Colombo.",
  },
  { year: "1941", description: "Singapore branch was opened." },
  { year: "1957", description: "Bank celebrated its Golden Jubilee." },
  { year: "1967", description: "Bank celebrated its Diamond Jubilee." },
  {
    year: "1978",
    description:
      "Bank’s logo comprising of three circling arrows arranged around a central point was approved.",
  },
  { year: "1982", description: "Bank celebrated its Platinum Jubilee." },
  {
    year: "1990",
    description:
      "Bank of Thanjavur Ltd. (BoT) with 157 branches was amalgamated with the Bank.",
  },
  {
    year: "2006",
    description:
      "The centenary year celebration was inaugurated by His Excellency the President of India Shri. A P J Abdul Kalam on 4th September.",
  },
  {
    year: "2007",
    description: "Bank went in for Initial Public Offer in February 2007.",
  },
  {
    year: "2008",
    description:
      "Achieved 100 per cent Core Banking Solutions (CBS) compliant.",
  },
  {
    year: "2019",
    description:
      "Tamil Nadu Grama Bank’ commenced operations on 1st April 2019 after a successful amalgamation of Pandyan Grama Bank of Indian Overseas Bank with Bank’s Pallavan Grama Bank. Government of India announced Amalgamation of Allahabad Bank – a bank with 155 years legacy into Indian Bank.",
  },
  {
    year: "2020",
    description:
      "Bank commenced its operation as an amalgamated entity from 1st April 2020.  The integration of CBS systems of both the Banks was completed on 14.02.2021.",
  },
  {
    year: "2022",
    description: "Bank’s Global Business surpassed Rs 10 lakh Crores.",
  },
  {
    year: "2023",
    description: "Bank’s Global Business was at Rs 10.95 lakh Crores.",
  },
  {
    year: "2024(C. Year)",
    description: "Global Business crossed Rs 11.33 lakh Crores.",
  },
];

const BankHistory = () => {
  return (
    <div>
      <div className="text-lg lg:text-2xl font-bold tracking-wide mb-1">
        Bank’s Profile
      </div>
      <Divider className="h-[1px] bg-[#012169] opacity-20" />

      {/* Table start here  */}
      <TableContainer className="my-8">
        <div className="text-sm lg:text-base text-center font-semibold mb-2 uppercase text-shadow-3xl whitespace-pre-line">
          A BRIEF HISTORY OF THE BANK SINCE ITS INCORPORATION
        </div>

        <Table className="w-full flex p-0">
          <Thead className="w-full border border-[#012169] border-b-0">
            <Tr className="flex flex-col">
              {BankHistoryData.map((el) => (
                <Th
                  key={el.year}
                  className="border-b border-b-[#012169] w-full grid grid-cols-8 p-0 m-0 text-left"
                >
                  <div className="whitespace-pre-line px-2 text-sm font-semibold lg:text-base border-r border-r-[#012169] flex items-center col-span-2 lg:col-span-1">
                    {el.year}
                  </div>
                  <div className="p-2 whitespace-pre-line text-sm lg:text-base font-normal flex items-center col-span-6 lg:col-span-7">
                    {el.description}
                  </div>
                </Th>
              ))}
            </Tr>
          </Thead>
        </Table>
      </TableContainer>
    </div>
  );
};

export default BankHistory;
