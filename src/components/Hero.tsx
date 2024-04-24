"use client";

import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "./ui/button";

const Hero = () => {
  const data = [
    "/images/slide-1.jpg",
    "/images/slide-2.jpg",
    "/images/slide-3.jpg",
  ];
  return (
    <div className="h-[calc(100vh-82px)] w-full">
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        grabCursor={true}
        navigation={true}
        speed={500}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        {data.map((url, i) => (
          <SwiperSlide key={i + url}>
            <div className="w-full h-full relative">
              <Image
                src={url}
                alt="Food"
                fill
                priority
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute right-0 left-0 top-0 bottom-0 w-full h-full z-[1] bg-black/20"></div>

            <div className="absolute z-[2] right-0 left-0 top-0 bottom-0 w-full h-full flex flex-col container mx-auto justify-center items-center text-center text-white md:p-20 gap-5">
              <h1 className="md:text-7xl text-5xl font-bold">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatibus
              </h1>
              <p className="md:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus, officiis. Reiciendis, soluta impedit maiores fuga
                harum doloremque? Vitae distinctio, iste excepturi, itaque nihil
                magnam dolor quidem hic ad eos sed!
              </p>

              <Link href="/#get__started">
                <Button size="lg" className="bg-pink-500 font-bold md:text-xl">
                  Get Started
                </Button>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
