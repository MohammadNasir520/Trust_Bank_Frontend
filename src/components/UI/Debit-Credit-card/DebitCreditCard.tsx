const DebitCreditCard = () => {
  return (
    <div>
      <div className="h-[200px] w-[350px] bg-[#1F305E] text-white rounded-xl pl-4 py-5">
        <h4 className="">Savings Account</h4>
        <div className="min-h-[100px] flex justify-center items-center">
          <h1>ZERO charges on ATM transactions</h1>
          <div>
            <img
              src="https://www.idfcfirstbank.com/content/dam/idfcfirs…ank/images/homepage-redesign/personal_loan_01.svg"
              alt=""
            />
          </div>
        </div>
        <div className="flex  items-center gap-4 cursor-pointer">
          <button
            className="align-middle text-base border border-white  hover:bg-white hover:text-black  font-bold text-center uppercase  rounded-full px-5 py-1"
            type="button"
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
