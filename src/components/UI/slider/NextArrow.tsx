import { BsChevronRight } from "react-icons/bs";

const NextArrow = ({ onClick }: any) => {
  return (
    <div
      className="absolute right-[30px] lg:right-[20px] -bottom-[70px] -translate-y-1/2 z-50"
      onClick={onClick}
    >
      <div className="bg-gray-600 h-[40px] w-[40px] rounded-full grid place-items-center cursor-pointer">
        <BsChevronRight className="text-white text-lg font-bold" />
      </div>
    </div>
  );
};

export default NextArrow;
