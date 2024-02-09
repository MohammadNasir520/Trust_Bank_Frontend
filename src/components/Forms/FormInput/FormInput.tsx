import React from "react";
import { useFormContext, Controller, FieldValues } from "react-hook-form";
import { getErrorMessageByPropertyName } from "../../../utils/schema-validator";

interface FormInputProps {
  name: string;
  type?: string;
  size?: any; // Adjust the type based on your specific use case
  value?: string;
  id?: string;
  placeholder?: string;
  validation?: any; // Adjust the type based on your validation requirements
  label?: string;
  className?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  type,
  size,
  value,
  id,
  placeholder,
  validation,
  label,
  className,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<FieldValues>();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <div >
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
          <div>
            <input
              type={type}
              size={size}
              placeholder={placeholder}
              {...field}
              value={value ? value : field.value}
              className={`${className}`}
            />
            {errorMessage && (
              <p className="text-red-500 mt-1 text-sm">{errorMessage}</p>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default FormInput;
