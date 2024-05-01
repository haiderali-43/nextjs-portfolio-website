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
            title: "Work 1",
            path: '/public/thumb1.jpg',
          },
          {
            title: "Work 2",
            path: "/thumb2.jpg",
          },
          {
            title: "Work 3",
            path: "/thumb3.jpg",
          },
          {
            title: "Work 4",
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
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div className="relative rounded-lg flex items-center justify-center overflow-hidden group" key={index}>
                    <div className="flex items-center justify-center relative overflow-hidden group:">
                      <Image
                        src={image.path}
                        width={500}
                        height={300}
                        alt="Work Image"
                      />
                      {/* overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700 "></div>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-4 text-[13px] tracking-[0.2em]">
                          {/* title part 1 */}
                          <div className="delay-100">Live</div>
                          {/* title part 2 */}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">Project</div>
                          {/* icon */}
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200"><BsArrowRight/></div>
                        </div>
                      </div>
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
