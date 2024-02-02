"use client";
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
  const { control } = useFormContext();

  return (
    <>
      {label && (
  <label
    htmlFor={name}
    className="text-smtext-black rounded-md px-2 block "
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
            className={`mt-1 p-3 w-full border rounded-md ${size === "large" ? "large-styles" : "small-styles"}`}
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
    </>
  );
};

export default FormSelectField;
