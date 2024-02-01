import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const AgricultureDetails = () => {
  const pathname = usePathname()
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-[#012169]">Agricultural Godowns / Cold Storage</h1>
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
          <span className="ml-2">For the construction of new Agri Godowns or cold storages, market yards, silos / expansion of existing units / modernization of existing units, irrespective of their location.</span>
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
    <span className="ml-2">Individuals, Group of Individuals</span>
  </span>
</li>
          <li>
            <span className="flex items-center mb-2">
              <FaArrowRight
      className="text-white rounded-full bg-[#ffcc25]"
      style={{ padding: '4px', height: '20px', width: '20px' }}
    />
              <span className="ml-2">Association of persons, Cooperatives, firms, companies etc.</span>
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
              <span className="ml-2">Cash Credit</span>
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
            <span className="ml-2">Term loan: Based on the Project Cost</span>
          </span>
        </p>
        <p>
          <span className="flex items-center mb-2">
            <FaArrowRight
      className="text-white rounded-full bg-[#ffcc25]"
      style={{ padding: '4px', height: '20px', width: '20px' }}
    />
            <span className="ml-2">Working Capital: Cash budget method to assess the WC irrespective of limits.</span>
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
            <span className="ml-2">Term Loan: Up to 9 years including a maximum holiday period of 2 years.</span>
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
              <span className="ml-2">Mortgage of land & building of the Cold Storage constructed.</span>
            </span>
          </li>
          <li>
            <span className="flex items-center mb-2">
              <FaArrowRight
      className="text-white rounded-full bg-[#ffcc25]"
      style={{ padding: '4px', height: '20px', width: '20px' }}
    />
              <span className="ml-2">Hypothecation of assets created out of Bank Finance (Stock of Cold Storage Owner).</span>
            </span>
          </li>
          <li>
            <span className="flex items-center mb-2">
              <FaArrowRight
      className="text-white rounded-full bg-[#ffcc25]"
      style={{ padding: '4px', height: '20px', width: '20px' }}
    />
              <span className="ml-2">Assignment of receivables/book debt arising out of advances to farmers for storage of agricultural commodities.</span>
            </span>
          </li>
          <li>
            <span className="flex items-center mb-2">
              <FaArrowRight
      className="text-white rounded-full bg-[#ffcc25]"
      style={{ padding: '4px', height: '20px', width: '20px' }}
    />
              <span className="ml-2">Wherever, WC limit is sanctioned for the purpose of on-lending to farmers, collateral security value equivalent to 100% loan amount to be obtained.</span>
            </span>
          </li>
          <li>
            <span className="flex items-center mb-2">
              <FaArrowRight
      className="text-white rounded-full bg-[#ffcc25]"
      style={{ padding: '4px', height: '20px', width: '20px' }}
    />
              <span className="ml-2">Collateral security in the form of FD, NSC, LIC Policies, Equitable Mortgage of immovable properties as per credit rating of borrower.</span>
            </span>
          </li>
          <li>
            <span className="flex items-center mb-2">
              <FaArrowRight
      className="text-white rounded-full bg-[#ffcc25]"
      style={{ padding: '4px', height: '20px', width: '20px' }}
    />
              <span className="ml-2">Minimum Security Coverage Ratio of 1.20 should be maintained at all times.</span>
            </span>
          </li>
          <li>
            <span className="flex items-center mb-2">
              <FaArrowRight
      className="text-white rounded-full bg-[#ffcc25]"
      style={{ padding: '4px', height: '20px', width: '20px' }}
    />
              <span className="ml-2">Guarantee: Personal guarantee of partners/directors.</span>
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

export default AgricultureDetails;
