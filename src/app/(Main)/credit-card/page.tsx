"use client";
import Card from "@/components/pages/card_page/Card";
// @ts-ignore
import CardBanner from "@/components/ui/slider/CardBanner";
// import CardBanner from "@/components/ui/slider/CardBanner";
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
      <CardBanner />
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
