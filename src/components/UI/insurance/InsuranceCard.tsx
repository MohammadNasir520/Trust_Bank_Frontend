import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const InsuranceCard = ({ data }:any) => {
  return (
    <div>
      <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <div className="rounded-t-xl">
          <Image
            src="https://thumbs2.imgbox.com/52/31/rzBVzJdV_t.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
        <div className="py-4 px-2 flex flex-col gap-1">
          <hr className="w-[50px] h-1 bg-blue-500" />
          <h1 className="text-xl font-medium">{data.title}</h1>
          <p className="text-sm">{data.description}</p>
          <Link
            href={`/insurance/${data.id}`}
            className="flex items-center justify-center "
          >
            <button className="text-sm py-3 rounded-md text-blue-500 flex items-center justify-center gap-4 hover:bg-[#012169] hover:text-white w-full ">
              Learn More <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InsuranceCard;
