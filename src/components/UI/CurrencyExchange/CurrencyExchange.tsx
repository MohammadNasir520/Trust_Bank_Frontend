"use client";
import { useExchangeCurrencyMutation } from "@/redux/api/currency";
import React, { ChangeEvent, useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

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

const CurrencyExchange = () => {
  // const demoCountry: Currency = { name: "United States", code: "USD", exchangeRate: 1 };
  const [exchangeRate, setExchangeRate] = useState<number>();
  const [fromCurrency, setFromCurrency] = useState<string>();
  const [toCurrency, setToCurrency] = useState<string>();
  const [amount, setAmount] = useState<number>(0);
  const [convertedAmount, setConvertedAmount] = useState<number>(amount);
  const [exchangeCurrency] = useExchangeCurrencyMutation()
  useEffect(() => {
    const fromExchangeRate =
      currencyDataArray.find((currency) => currency.code === fromCurrency)
        ?.exchangeRate || 1;
    const toExchangeRate =
      currencyDataArray.find((currency) => currency.code === toCurrency)
        ?.exchangeRate || 1;
    setExchangeRate(toExchangeRate);
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

  const handleExchange = async () => {
    console.log(fromCurrency);
    console.log(amount);
    console.log(toCurrency);
    console.log(convertedAmount);
    const obj = {
      fromCurrency: fromCurrency,
      fromAmount: amount,
      toCurrency: toCurrency,
      toAmount: convertedAmount,
    };
    const data = JSON.stringify(obj)
    const res =  await exchangeCurrency(data).unwrap()
    console.log(res?.message);
    if(res){
        toast(res?.message, {
            icon: <span style={{ color: "black" }}>✔</span>,
            style: {
              borderRadius: "10px",
              background: "#FDB712",
              color: "#fff",
            }
          });
    }
  };

  return (
    <div>
         <Toaster position="top-right" reverseOrder={false} />
      <div className="bg-white p-8 border rounded-lg">
        <div className="mb-6">
          <select
            value={fromCurrency}
            onChange={handleFromCurrencyChange}
            aria-placeholder="Currency Exchange From"
            className="w-full text-sm px-4 py-4 bg-[#F3F8FF] focus:bg-[#F3F8FF] border border-white rounded-lg focus:outline-none focus:border-[#012169]"
          >
            <option value="">Currency Exchange From</option>
            {currencyDataArray.map((currency) => (
              <option key={currency.code} value={currency.code}>
                {currency.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <input
            type="number"
            onChange={handleAmountChange}
            placeholder="Exchange Currency From Amount"
            className="w-full text-sm px-4 py-4 bg-[#F3F8FF] focus:bg-[#F3F8FF] rounded-lg focus:outline-none focus:border-[#012169]"
          />
        </div>

        <div className="mb-6">
          <select
            onChange={handleToCurrencyChange}
            className="w-full text-sm px-4 py-4 bg-[#F3F8FF] focus:bg-[#F3F8FF] border border-white rounded-lg focus:outline-none focus:border-[#012169]"
          >
            <option value="">Currency Exchange From</option>
            {currencyDataArray.map((currency) => (
              <option key={currency.code} value={currency.code}>
                {currency.name}
              </option>
            ))}
          </select>
        </div>

        <div className="">
          <input
            type="text"
            value={
              fromCurrency === undefined ||
              toCurrency === undefined ||
              amount === 0
                ? ""
                : `${convertedAmount.toFixed(2)} ${toCurrency}`
            }
            readOnly
            placeholder="Exchange Currency From Amount"
            className="w-full text-sm px-4 py-4 bg-[#F3F8FF] focus:bg-[#F3F8FF] rounded-lg focus:outline-none focus:border-[#012169]"
          />
          <div className="p-2 text-xs text-gray-800">
            {fromCurrency === undefined ||
            toCurrency === undefined ||
            amount === 0 ? (
              ""
            ) : (
              <p>
                Currency Rate: 1 {fromCurrency} = {exchangeRate}
                {toCurrency}
              </p>
            )}
          </div>
          <div className=" px-1">
            <button
              type="submit"
              className={`px-5 py-3 bg-[#FDB712] rounded-md text-black focus:outline-none ${
                fromCurrency === undefined ||
                toCurrency === undefined ||
                amount === 0
                  ? "cursor-not-allowed"
                  : ""
              }`}
              onClick={(e) => {
                if (
                  fromCurrency === undefined ||
                  toCurrency === undefined ||
                  amount === 0
                ) {
                  e.preventDefault(); // Prevent any default behavior
                } else {
                  handleExchange();
                }
              }}
            >
              Exchange Currency
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyExchange;
