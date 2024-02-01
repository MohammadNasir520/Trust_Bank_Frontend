// components/CurrencyField.tsx
import { Text } from "@chakra-ui/react";
import Image from "next/image";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface CurrencyFieldProps {
  currency: string;
  onChange?: (amount: number) => void;
  placeholder: string;
  value?: number;
  readOnly?: boolean;
}

const CurrencyField: React.FC<CurrencyFieldProps> = ({
  currency,
  onChange,
  placeholder,
  value,
  readOnly,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amount = Number(e.target.value);
    if (!isNaN(amount) && onChange) {
      onChange(amount);
    }
  };

  return (
    <div className="w-full relative grid-cols-span-1 lg:col-span-2 flex flex-col gap-4">
      <div className="flex items-center w-full relative">
        <Image
          className="w-6 h-6 absolute left-4"
          alt=""
          width={100}
          height={100}
          src={`/assets/${currency.toLowerCase()}-icon.webp`}
        />
        <input
          type="text"
          className="w-full border border-gray-300 py-2 pr-2 pl-12 rounded-md text-gray-900 sm:text-sm sm:leading-6 placeholder:text-gray-900 focus:outline-none focus:rounded-bl-none focus:rounded-br-none bg-gray-50 appearance-none"
          placeholder={placeholder}
          onChange={handleInputChange}
          value={value !== undefined ? value : ""}
          readOnly={readOnly}
        />
        <div className="absolute right-4">
          {readOnly ? null : <IoIosArrowDown />}
        </div>
      </div>
    </div>
  );
};

export default CurrencyField;
