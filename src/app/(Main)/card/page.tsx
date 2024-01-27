import PageLayout from "@/components/layout/PageLayout";
import Card from "@/components/pages/card_page/Card";
import CardBanner from "@/components/ui/slider/CardBanner";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const page = () => {
  const cardData = [
    {
      id: 1,
      title: "Debit Card",
      description: "Debit Card",
      image: "/assets/images/debit-card.png",
      benefits: [
        "Get 10% cashback",
        "Welcome offer",
        "Get premium discount"
    ],
    },
    {
      id: 1,
      title: "Debit Card",
      description: "Debit Card",
      image: "/assets/images/debit-card.png",
      benefits: [
        "Get 10% cashback",
        "Welcome offer",
        "Get premium discount"
    ],
    },
    {
      id: 1,
      title: "Debit Card",
      description: "Debit Card",
      image: "/assets/images/debit-card.png",
      benefits: [
        "Get 10% cashback",
        "Welcome offer",
        "Get premium discount"
    ],
    },
    {
      id: 1,
      title: "Debit Card",
      description: "Debit Card",
      image: "/assets/images/debit-card.png",
      benefits: [
        "Get 10% cashback",
        "Welcome offer",
        "Get premium discount"
    ],
    },
    {
      id: 1,
      title: "Debit Card",
      description: "Debit Card",
      image: "/assets/images/debit-card.png",
      benefits: [
        "Get 10% cashback",
        "Welcome offer",
        "Get premium discount"
    ],
    },
    {
      id: 1,
      title: "Debit Card",
      description: "Debit Card",
      image: "/assets/images/debit-card.png",
      benefits: [
        "Get 10% cashback",
        "Welcome offer",
        "Get premium discount"
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
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        </div>
     
    </>
  );
};

export default page;
