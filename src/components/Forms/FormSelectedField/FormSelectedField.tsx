"use client";
import { getErrorMessageByPropertyName } from '@/utils/schema-validator';
import { useFormContext, Controller } from 'react-hook-form';

export type SelectOptions = {
  label: string;
  value: string;
};

interface IInput {
  options?: SelectOptions[];
  name: string;
  value?: string | string[] | undefined;
  label?: string;
  defaultValue?: SelectOptions;
  className?: string;
  size?:any;
}

const FormSelectField = ({
  name,
  value,
  options,
  size="large",
  label,
  defaultValue,
  className,
}: IInput) => {
  const { control , formState: { errors }, } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);
  return (
    <>
      {label && (
  <label
    htmlFor={name}
    className="text-sm  text-black rounded-md p-2 block "
  >
    {label}
  </label>
)}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <select
            onChange={(e) => onChange(e.target.value)}
            value={value}
            className={`${className}`}
          >
            {/* Add an empty option as a placeholder */}
            <option value="">
              {"Select"} {/* Use the label or a default text */}
            </option>
            {options?.map((option) => (
              <option
                key={option.value}
                value={option.value}
                selected={value === option.value}
              >
                {option.label}
              </option>
              
            ))}
          </select>
          
        )}
        
      />
       {errorMessage && (
        <p className="text-red-500 mt-1 text-sm">{errorMessage}</p>
      )}
    </>
  );
};

export default FormSelectField;
