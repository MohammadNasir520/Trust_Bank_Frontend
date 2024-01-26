"use client";

// Inside SliderCarousel component
import { useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  { img: "/assets/slide-v1-1.jpg" },
  { img: "/assets/slide-v1-2.jpg" },
  { img: "/assets/slide-v1-3.jpg" },
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
                className="bg-cover bg-center lg:h-[400px] h-[280px] text-white relative"
                id="c__animate"
              >
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="mb-2 text-base font-normal text-center w-3/4 lg:w-1/2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Corrupti quas, natus ipsam odit vel laudantium, dicta
                    maiores quis labore minus accusamus ut ullam vitae ad quasi?
                    Laboriosam natus eaque ut.
                  </p>
                  <button className="bg-[#1F305E] px-3 py-2 w-20 rounded-md">
                    Hello
                  </button>
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
