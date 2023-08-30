// data

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

const WorkSlider = () => {
  const workSlides = {
    slides: [
      {
        images: [
          {
            title: "title",
            path: "/thumb1.jpg",
          },
          {
            title: "title",
            path: "/thumb2.jpg",
          },
          {
            title: "title",
            path: "/thumb3.jpg",
          },
          {
            title: "title",
            path: "/thumb4.jpg",
          },
        ],
      },
    ],
  };
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div>
              {slide.images.map((image, index) => {
                return (
                  <div key={index}>
                    <div>
                      {/* image */}
                      <Image src={image.path} width={500} height={300} alt="" />
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
