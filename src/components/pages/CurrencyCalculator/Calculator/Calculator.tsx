"use client"
import React, { ChangeEvent, useState, useEffect } from "react";

interface Currency {
  name: string;
  code: string;
  exchangeRate: number;
}

const currencyDataArray: Currency[] = [
  { name: "Bangladesh", code: "BDT", exchangeRate: 106.99 },
  { name: "United States", code: "USD", exchangeRate: 1 },
  { name: "Eurozone", code: "EUR", exchangeRate: 0.85 },
  { name: "Japan", code: "JPY", exchangeRate: 110.23 },
  { name: "India", code: "INR", exchangeRate: 74.5 },
  { name: "China", code: "CNY", exchangeRate: 6.37 },
  { name: "South Korea", code: "KRW", exchangeRate: 1175.5 },
  { name: "Singapore", code: "SGD", exchangeRate: 1.34 },
  { name: "United Kingdom", code: "GBP", exchangeRate: 0.72 },
  { name: "Canada", code: "CAD", exchangeRate: 1.25 },
  { name: "Australia", code: "AUD", exchangeRate: 1.29 },
  { name: "Brazil", code: "BRL", exchangeRate: 5.41 },
  { name: "Russia", code: "RUB", exchangeRate: 76.85 },
  { name: "South Africa", code: "ZAR", exchangeRate: 15.18 },
  { name: "Turkey", code: "TRY", exchangeRate: 13.23 },
  { name: "Pakistan", code: "PKR", exchangeRate: 295.0 },
  // Add more currencies as needed
];

const Calculator: React.FC = () => {
  const demoCountry: Currency = { name: "United States", code: "USD", exchangeRate: 1 };

  const [fromCurrency, setFromCurrency] = useState<string>(demoCountry.code);
  const [toCurrency, setToCurrency] = useState<string>(currencyDataArray[1].code);
  const [amount, setAmount] = useState<number>(1);
  const [convertedAmount, setConvertedAmount] = useState<number>(amount);

  useEffect(() => {
    const fromExchangeRate = currencyDataArray.find((currency) => currency.code === fromCurrency)?.exchangeRate || 1;
    const toExchangeRate = currencyDataArray.find((currency) => currency.code === toCurrency)?.exchangeRate || 1;
    const newConvertedAmount = (amount / fromExchangeRate) * toExchangeRate;
    setConvertedAmount(newConvertedAmount);
  }, [amount, fromCurrency, toCurrency]);

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseFloat(e.target.value);
    const newAmount = isNaN(inputValue) ? 0 : inputValue;
    setAmount(newAmount);
  };

  const handleFromCurrencyChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedCurrency = e.target.value;
    setFromCurrency(selectedCurrency);
  };

  const handleToCurrencyChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedCurrency = e.target.value;
    setToCurrency(selectedCurrency);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center  text-white ">
      <div className="w-4/5 md:w-3/4 lg:w-2/3 px-8  rounded-lg  p-6">
        <div className="text-2xl lg:text-2xl text-gray-800 font-extralight mb-4">
          Currency Conversion Calculator
        </div>
        <div className="w-full flex flex-wrap justify-between items-center gap-4">
          <div className="w-full lg:w-1/3">
            <label className="text-gray-800">From Currency: </label>
            <select
              className="w-full text-black text-sm px-4 py-3 bg-[#F3F8FF] focus:bg-[#F3F8FF] border border-[#012169] rounded-lg p-12 "
              value={fromCurrency}
              onChange={handleFromCurrencyChange}
            >
              {currencyDataArray.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.name}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full lg:w-1/3">
            <label className="text-gray-800">To Currency: </label>
            <select
              className="w-full text-black text-sm px-4 py-3 bg-[#F3F8FF] focus:bg-[#F3F8FF] border border-[#012169] rounded-lg "
              value={toCurrency}
              onChange={handleToCurrencyChange}
            >
              {currencyDataArray.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.name}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full lg:w-1/3">
            <label className="text-gray-800">Amount: </label>
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              className="w-full text-black text-sm px-4 py-3 bg-[#F3F8FF] focus:bg-[#F3F8FF] border border-[#012169] rounded-lg "
            />
          </div>

          <div className="w-full lg:w-1/3">
            <label className="text-gray-800">Result: </label>
            <input
              type="text"
              value={`${convertedAmount.toFixed(2)} ${toCurrency}`}
              readOnly
              className="w-full text-black text-sm px-4 py-3 bg-[#F3F8FF] focus:bg-[#F3F8FF] border border-[#012169] rounded-lg "
            />
          </div>
        </div>

        <div className="mt-8 text-center font-bold text-gray-800">
          The result: {amount} {fromCurrency} = {convertedAmount.toFixed(2)} {toCurrency}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
