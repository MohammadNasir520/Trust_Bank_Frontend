// FormRadioField.tsx
import { getErrorMessageByPropertyName } from "@/utils/schema-validator";
import React from "react";
import { useFormContext, Controller } from "react-hook-form";

interface IRadioInput {
  name: string;
  label?: string;
  options: string[];
  className?: string;
}

const FormRadioField: React.FC<IRadioInput> = ({ name, label, options }) => {
  const { control , formState: { errors }, } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <div>
      {label && (
        <label
          htmlFor={name}
          className="text-sm  text-black rounded-md p-2 block"
        >
          {label}
        </label>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <div className="flex gap-4">
            {options.map((option) => (
              <div key={option} className="flex items-center">
                <input
                  type="radio"
                  id={`${name}-${option}`}
                  name={name}
                  value={option}
                  checked={value === option}
                  onChange={() => onChange(option)}
                  className="hidden"
                />
                <label
                  htmlFor={`${name}-${option}`}
                  className="flex items-center cursor-pointer border border-gray-300 rounded p-2 transition duration-300 ease-in-out hover:bg-gray-100"
                >
                  <span
                    className={`h-4 w-4 rounded-full border border-gray-500 transition duration-300 ${
                      value === option ? "bg-[#012169] border-[#012169]" : ""
                    }`}
                  ></span>
                  <span className="ml-2">{option}</span>
                </label>
              </div>
            ))}
            
          </div>
        )}
      />
       {errorMessage && (
        <p className="text-red-500 mt-1 text-sm">{errorMessage}</p>
      )}
    </div>
  );
};

export default FormRadioField;
