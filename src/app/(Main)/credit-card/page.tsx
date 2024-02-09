"use client";
import Card from "@/components/pages/card_page/Card";

import { usePathname } from "next/navigation";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const page = () => {
  const pathname = usePathname();

  const cardData = [
    {
      id: 1,
      title: "Debit Card",
      description: "Debit Card",
      category: "Credit Card",
      image: "/assets/images/debit-card.png",
      cardImg: "/assets/images/debit-card.png",
      benefits: ["Get 10% cashback", "Welcome offer", "Get premium discount"],
      condition: [
        {
          age: 10,
          limit: 5000,
          offer: 10,
        },
      ],
    },
    {
      id: 2,
      title: "Premium Shopping Card",
      description: "Credit Card",
      category: "Credit Card",
      image: "/assets/images/debit-card.png",
      cardImg: "/assets/images/debit-card.png",
      benefits: ["Get 10% cashback", "Welcome offer", "Get premium discount"],
      condition: [
        {
          age: 10,
          limit: 5000,
          offer: 10,
        },
      ],
    },
    {
      id: 3,
      title: "Debit Card",
      description: "Credit Card",
      category: "Credit Card",
      image: "/assets/images/debit-card.png",
      cardImg: "/assets/images/debit-card.png",
      benefits: ["Get 10% cashback", "Welcome offer", "Get premium discount"],
      condition: [
        {
          age: 10,
          limit: 5000,
          offer: 10,
        },
      ],
    },
    {
      id: 4,
      title: "Debit Card",
      description: "Debit Card",
      category: "Credit Card",
      image: "/assets/images/debit-card.png",
      cardImg: "/assets/images/debit-card.png",
      benefits: ["Get 10% cashback", "Welcome offer", "Get premium discount"],
      condition: [
        {
          age: 10,
          limit: 5000,
          offer: 10,
        },
      ],
    },
    {
      id: 5,
      title: "Debit Card",
      description: "Debit Card",
      category: "Credit Card",
      image: "/assets/images/debit-card.png",
      cardImg: "/assets/images/debit-card.png",
      benefits: ["Get 10% cashback", "Welcome offer", "Get premium discount"],
      condition: [
        {
          age: 10,
          limit: 5000,
          offer: 10,
        },
      ],
    },
    {
      id: 6,
      title: "Debit Card",
      description: "Debit Card",
      category: "Credit Card",
      image: "/assets/images/debit-card.png",
      cardImg: "/assets/images/debit-card.png",
      benefits: [
        "Get 10% cashback",
        "Welcome offer",
        "Get Airport launch offer",
      ],
      condition: [
        {
          age: 10,
          limit: 5000,
          offer: 10,
        },
      ],
    },
  ];
  return (
    <>
      {/* banner */}
      <div className="relative h-[400px] py-2 w-full  overflow-hidden bg-[url('https://assets-global.website-files.com/5c30841dedb5fd496eb1396c/5f157beb90654581f7f5c6ba_dPLhfpcDROPvwkdQxC6wk1b28KlkQTpoorl760f0Mzel5lQH3sSplzSyXxXY4lTPrWRg0CmCRq2-v_AG1FauFJ0EsXVTh6K7z0-ucdlTesV25uGYYxcJWZuGqJHmnJB9x0YKUCZm.jpeg')] bg-no-repeat bg-cover bg-center">
        <div className="flex flex-col gap-5 justify-center h-full pl-4 lg:px-4">
          <h1 className="text-2xl md:text-3xl lg:text-3xl font-medium font-serif uppercase text-[#F5EEE6]">
            Spend quality Time with family members
          </h1>
          <div className="w-full lg:w-[80%]">
            <p className="text-[16px]   text-[#F5EEE6] font-[400] font-serif ">
              During the winter, family members can spend time together.
            </p>
          </div>
        </div>
      </div>
      {/* banner */}
      <div className="text-center mt-8">
        <h1 className="text-center text-3xl font-semibold">
          Pick Your Best debit & credit card
        </h1>
      </div>
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto my-4">
          {cardData.map((card) => (
            <Card key={card.id} card={card} pathname={pathname} />
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
