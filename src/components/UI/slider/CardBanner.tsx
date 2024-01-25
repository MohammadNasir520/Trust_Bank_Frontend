"use client";
import Slider from "react-slick";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

const cardBanner = () => {
  const settings = {
    dots: false,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="">
   
      <Slider {...settings}>
        <div className="relative h-[400px] py-2 w-full bg-[url('https://assets-global.website-files.com/5c30841dedb5fd496eb1396c/5f157beb90654581f7f5c6ba_dPLhfpcDROPvwkdQxC6wk1b28KlkQTpoorl760f0Mzel5lQH3sSplzSyXxXY4lTPrWRg0CmCRq2-v_AG1FauFJ0EsXVTh6K7z0-ucdlTesV25uGYYxcJWZuGqJHmnJB9x0YKUCZm.jpeg')] bg-no-repeat bg-cover bg-center">
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
        <div className="relative h-[400px] w-full bg-[url('https://travel.usnews.com/dims4/USNEWS/cf7910a/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FEllis_Island_Danny_Lehman_Getty.jpg')] bg-no-repeat bg-cover bg-center">
          <div className="flex flex-col gap-5 justify-center h-full px-2 lg:px-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#F5EEE6]">
              Travel to the moon
            </h1>
            <div className="w-full lg:w-[90%]">
              <p className="text-[16px] text-[#F5EEE6] ">
                Snow-capped peaks, alpine meadows and azure lakes are just a few
                reasons why Glacier National Park is one of America's most
                striking parks. There are more than 700 miles of hiking trails
                in this Montana crown jewel, plus 13 designated areas for
                camping. In the winter, travelers can enjoy snowshoeing and
                skiing, while during the summer vacationers can go swimming in
                Lake McDonald and whitewater rafting on Flathead River
              </p>
            </div>
            <div className="flex gap-3">
              <button className="py-2 px-6 bg-[#012169] shadow-md rounded-md font-normal  text-white text-[18px] ">
                Book now
              </button>
              <button className="py-2 px-6 bg-[#012169] shadow-md rounded-md font-normal  text-[18px] text-white">
                See details
              </button>
            </div>
          </div>
        </div>
        <div className="relative h-[400px] w-full bg-[url('https://www.bankrate.com/2020/04/06134711/HowToMakePaymentsWithYourPhone.jpeg?auto=webp&optimize=high&crop=16:9')] bg-no-repeat bg-cover bg-center">
          <div className="flex flex-col gap-5 justify-center h-full px-2 lg:px-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-[#F5EEE6] font-semibold ">
              Save time and money with credit cards
            </h1>
            <div className="w-full lg:w-[90%]">
              <p className="text-[18px] text-[#F5EEE6]  font-medium ">
                It's a good idea to pay off your credit card balance in full
                whenever you're able. Carrying a monthly credit card balance can
                cost you in interest and increase your credit utilization rate,
                which is one factor used to calculate your credit scores.
              </p>
            </div>
            <div className="flex gap-3">
              <p className="text-2xl text-[#F5EEE6]">
                Take discount on your shopping {" "}
                <span className="text-[#012169] text-2xl">credit</span> card
              </p>
            </div>
          </div>
        </div>
        <div className="relative h-[400px] w-full bg-[url('https://www.loucoporviagens.com.br/wp-content/uploads/2011/10/Viceroy-Bali-2-thegem-blog-default.jpg')] bg-no-repeat bg-cover bg-center">
          <div className="flex flex-col gap-5 justify-center h-full px-2 lg:px-4 ">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#F5EEE6]">
              Explore the world
            </h1>
            <div className="w-full lg:w-[80%]">
              <p className="text-[16px]  text-[#F5EEE6] font-serif font-[500]">
                Snow-capped peaks, alpine meadows and azure lakes are just a few
                reasons why Glacier National Park is one of America's most
                striking parks. There are more than 700 miles of hiking trails
                in this Montana crown jewel, plus 13 designated areas for
                camping. In the winter, travelers can enjoy snowshoeing and
                skiing, while during the summer vacationers can go swimming in
                Lake McDonald and whitewater rafting on Flathead River
              </p>
            </div>
            <div className="flex gap-3">
              <button
                className="py-2 px-6 bg-[#012169] shadow-md rounded-md font-normal font-serif text-[18px] 
              text-[#F5EEE6]"
              >
                Explore Tour & Travel Credit card
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default cardBanner;
