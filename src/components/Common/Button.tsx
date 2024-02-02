"use client";
import clsx from "clsx";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type,
  children,
  onClick,
  disabled,
  fullWidth,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        `bg-transparent 
        hover:bg-[#012169] 
        text-[#012169] 
        font-semibold 
        hover:text-white 
        py-2 px-6 border 
        border-[#012169] 
        hover:border-transparent 
        rounded
      `,
        fullWidth && "w-full"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
