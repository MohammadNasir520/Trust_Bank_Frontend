import { Textarea } from "@chakra-ui/react";
import clsx from "clsx";

interface TextAreaProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  id,
  type,
  required,
  disabled,
}) => {
  return (
    <div className="w-full my-4">
      <label
        className="
        text-sm
        text-gray-900
        font-light
    "
        htmlFor={id}
      >
        {label}
      </label>
      <Textarea
        id={id}
        autoComplete={id}
        className={clsx(
          `
    form-input
    w-full
    border-0
    border-b
    py-1
    px-2
    text-gray-900
    sm:text-sm
    sm:leading-6
    placeholder:text-gray-400
    focus:outline-none
    bg-transparent 
    appearance-none
`
          // errors[id] && "focus:ring-rose-500",
          // disabled && "opacity-50 cursor-default"
        )}
      />
    </div>
  );
};

export default TextArea;
