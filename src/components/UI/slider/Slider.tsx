"use client";

// Inside SliderCarousel component
import { useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Text } from "@chakra-ui/react";


const data = [
  {
    img: "/assets/plus_saver_promo_main.jpg",
    title:
      "Open your Plus Saver account today using ENBD X App or Online Banking",
    desc: `Earn up to 4% until 31 <sup>st</sup> March 2024 when you save with the Emirates NBD Plus Saver Account.`,
  },
  {
    img: "/assets/slide-v1-1.jpg",
    title: "Float on Cloud 9 with prizes of AED 9,000,000+",
    desc: "Grow your balances with Emirates NBD and you could be one of the 3 lucky winners to WIN AED 1,000,000",
  },
  {
    img: "/assets/slide-v1-2.jpg",
    title: "Report fraud. Don’t let fraudsters survive.",
    desc: "Fighting fraud isn’t just the responsibility of banks, the police, or the government. It is the responsibility of every individual. So, let’s all come together and report fraud to stop fraud.",
  },
  {
    img: "/assets/slide-v1-3.jpg",
    title: "Instant Payments Service",
    desc: "Introducing Aani on ENBD X , a simple and faster way to move money using mobile numbers.",
  },
];

const SliderCarousel = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const settings = {
    dots: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
  };

  return (
    <>
      {isMounted && (
        <Slider {...settings}>
          {data.map((el, index) => (
            <div key={index} className="relative hidden">
              <div
                style={{
                  backgroundImage: `url(${el.img})`,
                }}
                className="bg-cover bg-no-repeat bg-center h-[360px] lg:h-[400px]  text-white relative"
              >
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className="w-full absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-5/6 lg:w-1/2">
                    <Text className="text-lg lg:text-3xl font-medium">
                      <div dangerouslySetInnerHTML={{ __html: el.title }} />
                    </Text>

                    <Text className="my-2 text-sm lg:text-base font-normal">
                      <div dangerouslySetInnerHTML={{ __html: el.desc }} />
                    </Text>

                    <button
                      className="text-sm lg:text-base font-normal uppercase tracking-wider border border-white hover:border-transparent bg-transparent hover:bg-[#1F305E] px-3 py-2 rounded-md mt-1"
                      type="button"
                    >
                      Know More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </>
  );
};

export default SliderCarousel;
