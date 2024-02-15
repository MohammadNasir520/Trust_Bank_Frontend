
import InsuranceCard from "@/components/UI/insurance/InsuranceCard";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

interface InsuranceData {
    id: number;
    name: string;
    title: string;
    description: string;
    image: string;
}

const insuranceData : InsuranceData[] = [
    {
        id: 1,
        name: "Card Insurance",
        title: "Car Insurance",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, recusandae.",
        image: "https://thumbs2.imgbox.com/52/31/rzBVzJdV_t.jpg"
    },
    {
        id: 2,
        name: "Card Insurance",
        title: "Car Insurance",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, recusandae.",
        image: "https://thumbs2.imgbox.com/52/31/rzBVzJdV_t.jpg"
    },
    {
        id: 3,
        name: "Card Insurance",
        title: "Car Insurance",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, recusandae.",
        image: "https://thumbs2.imgbox.com/52/31/rzBVzJdV_t.jpg"
    },
    {
        id: 4,
        name: "Card Insurance",
        title: "Car Insurance",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, recusandae.",
        image: "https://thumbs2.imgbox.com/52/31/rzBVzJdV_t.jpg"
    },
]

const page = () => {
  return (
    <div>
      <div className="bg-[#f9f9f9]">
        <div className="grid grid-cols-4 gap-2 my-8">
          <div
            className="col-span-4 h-64 flex items-center justify-center"
            style={{
              backgroundImage: `url("https://thumbs2.imgbox.com/15/74/gujplJ95_t.png" )`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          <div className=" col-span-3 bg-white p-10 rounded grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            insuranceData.map((data) => {
                return (
                    <InsuranceCard key={data.id} data={data} />
                )
            })
          }
         
            
          </div>

          <div className="col-span-1 bg-white p-10 rounded">7</div>
        </div>
      </div>
    </div>
  );
};

export default page;
