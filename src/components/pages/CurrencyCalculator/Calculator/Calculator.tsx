"use client";
import FormInput from "@/components/Forms/FormInput/FormInput";
import React, { ChangeEvent, useState, useEffect } from "react";

interface ExchangeRates {
  BDT: number;
  USD: number;
  EURO: number; // Add EURO currency
  JPY: number; // Add JPY currency
}

const Calculator: React.FC = () => {
  const mockExchangeRates: ExchangeRates = {
    USD: 1 / 106.99,
    BDT: 106.99,
    EURO: 1 / 1.12, // Add exchange rate for EURO
    JPY: 1 / 0.0096, // Add exchange rate for JPY
  };

  const currencies = Object.keys(mockExchangeRates) as (keyof ExchangeRates)[];

  const [fromCurrency, setFromCurrency] = useState<keyof ExchangeRates>("USD");
  const [toCurrency, setToCurrency] = useState<keyof ExchangeRates>("BDT");
  const [amount, setAmount] = useState<number>(1);
  const [exchangeRate, setExchangeRate] = useState<number>(
    mockExchangeRates[fromCurrency]
  );
  const [convertedAmount, setConvertedAmount] = useState<string>(
    (amount / exchangeRate).toFixed(2)
  );

  useEffect(() => {
    setConvertedAmount((amount / exchangeRate).toFixed(2));
  }, [amount, exchangeRate]);

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseFloat(e.target.value);
    const newAmount = isNaN(inputValue) ? 0 : inputValue;
    setAmount(newAmount);
  };

  const handleFromCurrencyChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedCurrency = e.target.value as keyof ExchangeRates;
    setFromCurrency(selectedCurrency);
    setToCurrency(selectedCurrency === "BDT" ? "USD" : "BDT");
    setExchangeRate(mockExchangeRates[selectedCurrency]);
  };

  const handleToCurrencyChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedCurrency = e.target.value as keyof ExchangeRates;
    setToCurrency(selectedCurrency);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center py-12 lg:py-20 gap-4 lg:gap-10 bg-[#F3F4F6]">
      <div className="text-lg lg:text-3xl text-black font-extralight">
        Currency conversion calculator
      </div>
      <div className="w-4/5 md:w-3/4 lg:w-2/3 px-8 py-12 border rounded bg-white">
        <div className="w-full flex flex-wrap justify-between items-center gap-4">
          <div className="w-full lg:w-auto">
            <label>From Currency: </label>
            <select
              className="w-full text-sm px-4 py-3 bg-gray-100 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
              value={fromCurrency}
              onChange={handleFromCurrencyChange}
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full lg:w-auto">
            <label>Amount: </label>
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              className="w-full text-sm px-4 py-3 bg-gray-100 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
            />
          </div>

          <div className="w-full lg:w-auto">
            <label>To Currency: </label>
            <select
              className="w-full text-sm px-4 py-3 bg-gray-100 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
              value={toCurrency}
              onChange={handleToCurrencyChange}
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-10 text-center font-bold">
          The result: {amount} {fromCurrency} = {convertedAmount} {toCurrency}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
