import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

function convertToSlug(str: string) {
  return str
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^\w-]/g, ''); // Remove non-word characters
}

const PersonalLoanDetails = () => {
  const pathname = usePathname()

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-[#012169]">Personal Loans</h1>
       <Link href={`${pathname}/apply`}>
       <button className="bg-[#012169] px-4 py-2 text-white flex items-center mb-2">
          Apply Nows Loan <FaArrowRight className="ml-2" />
        </button>
       </Link>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2 text-[#012169]">Purpose / Objective:</h2>
        <span className="flex items-center mb-2">
          <FaArrowRight
            className="text-white rounded-full bg-[#ffcc25]"
            style={{ padding: '4px', height: '20px', width: '20px' }}
          />
          <span className="ml-2">For personal needs such as education, medical expenses, wedding, travel, etc.</span>
        </span>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2 text-[#012169]">Eligibility:</h2>
        <ul>
          <li>
            <span className="flex items-center  mb-2">
              <FaArrowRight
                className="text-white rounded-full bg-[#ffcc25]"
                style={{ padding: '4px', height: '20px', width: '20px' }}
              />
              <span className="ml-2">Individuals</span>
            </span>
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2 text-[#012169]">Types Of Facility Available:</h2>
        <ul>
          <li>
            <span className="flex items-center mb-2 ">
              <FaArrowRight
                className="text-white rounded-full bg-[#ffcc25]"
                style={{ padding: '4px', height: '20px', width: '20px' }}
              />
              <span className="ml-2">Term loan</span>
            </span>
          </li>
          <li>
            <span className="flex items-center mb-2">
              <FaArrowRight
                className="text-white rounded-full bg-[#ffcc25]"
                style={{ padding: '4px', height: '20px', width: '20px' }}
              />
              <span className="ml-2">Personal Line of Credit</span>
            </span>
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2 text-[#012169]">Amount Of Loan:</h2>
        <p>
          <span className="flex items-center mb-2">
            <FaArrowRight
              className="text-white rounded-full bg-[#ffcc25]"
              style={{ padding: '4px', height: '20px', width: '20px' }}
            />
            <span className="ml-2">Based on the individual's financial profile and needs.</span>
          </span>
        </p>
      </div>

      {/* Add more sections for Margin, Interest Rates, Repayment, Security, etc. */}
      
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2 text-[#012169] ">Interest Rates:</h2>
        <p>
          <span className="flex items-center mb-2">
            <FaArrowRight
              className="text-white rounded-full bg-[#ffcc25]"
              style={{ padding: '4px', height: '20px', width: '20px' }}
            />
            <span className="ml-2">Please refer to the Lending Rates link on the home page on our Bank’s Website <a href="https://www.indianbank.in" target="_blank" rel="noopener noreferrer">www.indianbank.in</a>.</span>
          </span>
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2 text-[#012169]">Repayment:</h2>
        <p>
          <span className="flex items-center mb-2">
            <FaArrowRight
              className="text-white rounded-full bg-[#ffcc25]"
              style={{ padding: '4px', height: '20px', width: '20px' }}
            />
            <span className="ml-2">Flexible repayment options, up to 5 years.</span>
          </span>
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2 text-[#012169]">Security:</h2>
        <ul>
          <li>
            <span className="flex items-center mb-2">
              <FaArrowRight
                className="text-white rounded-full bg-[#ffcc25]"
                style={{ padding: '4px', height: '20px', width: '20px' }}
              />
              <span className="ml-2">No specific collateral required for personal loans.</span>
            </span>
          </li>
        </ul>
      </div>
      <p className="text-md">
        <span className="flex items-center mb-2">
          <span className="ml-2">* MCLR RATE – Available on the <a href="https://www.indianbank.in" target="_blank" rel="noopener noreferrer">Home Page</a>.</span>
        </span>
      </p>

      <button className="bg-[#012169] px-4 py-2 text-white flex items-center mt-3">
        Apply Now Loan <FaArrowRight className="ml-2" />
      </button>
    </div>
  );
};

export default PersonalLoanDetails;
