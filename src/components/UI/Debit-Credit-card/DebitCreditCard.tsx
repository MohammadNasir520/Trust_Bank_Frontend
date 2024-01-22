// import loanSvg from "@/assets/svg/loan-svgrepo-com.svg";

// const DebitCreditCard = () => {
//   return (
//     <div>
//       <div className="h-[200px] w-[350px] bg-[#1F305E] text-white rounded-xl pl-4 py-5">
//         <h4 className="">Savings Account</h4>
//         <div className="min-h-[100px] flex justify-center items-center">
//           <h1>ZERO charges on ATM transactions</h1>
//           <div>
//             <img src={loanSvg} alt="" />
//           </div>
//         </div>
//         <div className="flex  items-center gap-4 cursor-pointer">
//           <button
//             className="align-middle text-base border border-white  hover:bg-white hover:text-black  font-bold text-center uppercase  rounded-full px-5 py-1"
//             type="button"
//           >
//             Apply Now
//           </button>
//           <p className="underline">know more</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DebitCreditCard;
import React from "react";
import loanImg from "@/assets/images/loan.png";
import Image from "next/image";

const DebitCreditCard = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="h-[200px] w-[350px]  bg-gradient-to-r from-[#324e99] to-[#6588e9]  text-white rounded-xl pl-4 py-5">
        <h4>Savings Account</h4>
        <div className="min-h-[100px] font-sans font-semibold flex justify-center items-center gap-2 text-xl">
          <h1>ZERO charges on ATM transactions</h1>
          <div>
            <Image src={loanImg} width={100} height={100} alt="Loan SVG" />
          </div>
        </div>
        <div className="flex items-center gap-4 cursor-pointer">
          <button
            className="text-base border border-white hover:bg-white hover:text-blue-950 font-bold text-center uppercase rounded-full px-5 py-1"
          >
            Apply Now
          </button>
          <p className="underline">know more</p>
        </div>
      </div>
    </div>
  );
};

export default DebitCreditCard;
