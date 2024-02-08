import React from "react";
import { useFormContext, Controller, FieldValues } from "react-hook-form";
import { getErrorMessageByPropertyName } from "../../../utils/schema-validator";

interface FormTextAreaProps {
  name: string;
  label?: string;
  rows?: number;
  value?: string; // Ensure value is optional
  placeholder?: string;
}

const FormTextArea: React.FC<FormTextAreaProps> = ({
  name,
  label,
  rows,
  value, // Ensure value is optional
  placeholder,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<FieldValues>();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <textarea
            id={name}
            rows={rows}
            placeholder={placeholder}
            className="mt-1 p-2 w-full border rounded-md"
            {...field}
            value={value || ""}
          />
        )}
      />
      {errorMessage && (
        <small className="text-red-500 mt-1">{errorMessage}</small>
      )}
    </>
  );
};

export default FormTextArea;
