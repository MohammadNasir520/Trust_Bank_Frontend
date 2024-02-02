import { BsChevronLeft } from "react-icons/bs";

const PrevArrow = ({ onClick }: any) => {
  return (
    <div
      className="absolute right-[80px] lg:right-[70px] -bottom-[70px] -translate-y-1/2 z-50"
      onClick={onClick}
    >
      <div className="bg-gray-600 h-[40px] w-[40px] rounded-full grid place-items-center cursor-pointer">
        <BsChevronLeft className="text-white text-lg font-bold" />
      </div>
    </div>
  );
};

export default PrevArrow;
