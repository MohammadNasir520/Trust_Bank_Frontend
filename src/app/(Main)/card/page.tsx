import Card from "@/components/pages/card_page/Card";
import CardBanner from "@/components/UI/slider/CardBanner";

// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";

const page = () => {
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
