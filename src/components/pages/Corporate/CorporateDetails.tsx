import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const CorporateLoanDetails = () => {
  const pathname = usePathname()
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-[#012169]">Corporate Business Loan</h1>
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
          <span className="ml-2">Description of the purpose and objective for corporate loans...</span>
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
              <span className="ml-2">Eligibility criteria for individuals, groups, and organizations...</span>
            </span>
          </li>
          {/* Add more eligibility criteria if needed */}
        </ul>
      </div>

      {/* Add more sections for Types of Facility Available, Amount of Loan, Interest Rates, Repayment, Security, etc. */}

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2 text-[#012169] ">Interest Rates:</h2>
        <p>
          <span className="flex items-center mb-2">
            <FaArrowRight
              className="text-white rounded-full bg-[#ffcc25]"
              style={{ padding: '4px', height: '20px', width: '20px' }}
            />
            <span className="ml-2">Description of interest rates and where to find them...</span>
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
            <span className="ml-2">Repayment details for corporate loans...</span>
          </span>
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2 text-[#012169]">Security:</h2>
        <ul>
          {/* Add security details for corporate loans */}
          <li>
            <span className="flex items-center mb-2">
              <FaArrowRight
                className="text-white rounded-full bg-[#ffcc25]"
                style={{ padding: '4px', height: '20px', width: '20px' }}
              />
              <span className="ml-2">Security details for corporate loans...</span>
            </span>
          </li>
        </ul>
      </div>

      <p className="text-md">
        <span className="flex items-center mb-2">
          <span className="ml-2">* Additional information for corporate loans...</span>
        </span>
      </p>

      <button className="bg-[#012169] px-4 py-2 text-white flex items-center mt-3">
        Apply Now Loan <FaArrowRight className="ml-2" />
      </button>
    </div>
  );
};

export default CorporateLoanDetails;
