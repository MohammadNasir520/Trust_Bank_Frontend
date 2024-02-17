import React from "react";
import { useFormContext, Controller, FieldValues } from "react-hook-form";
import { getErrorMessageByPropertyName } from "../../../utils/schema-validator";
import { ClassNames } from "@emotion/react";

interface FormTextAreaProps {
  name: string;
  label?: string;
  rows?: number;
  value?: string; // Ensure value is optional
  placeholder?: string;
  className?:string;
}

const FormTextArea: React.FC<FormTextAreaProps> = ({
  name,
  label,
  rows,
  value, // Ensure value is optional
  placeholder,
  className
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<FieldValues>();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <>
     {label && (
  <label
    htmlFor={name}
    className="text-sm  text-black rounded-md p-2 block  "
  >
    {label}
  </label>
)}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <textarea
            id={name}
            rows={rows}
            placeholder={placeholder}
            className={`${className}`}
            {...field}
            value={value}
          />
        )}
      />
      {errorMessage && (
              <p className="text-red-500 mt-1 text-sm">{errorMessage}</p>
            )}
    </>
  );
};

export default FormTextArea;
