import React, { useEffect, useState } from "react";

import Images from "constants/api/images";

import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/css";
import HeroSlideItem from "components/molecules/HeroSlideItem";

export default function HeroSlide() {
  SwiperCore.use([]);
  const [breedItems, setBreedItems] = useState([]);

  useEffect(() => {
    const params = {
      has_breeds: 1,
      limit: 5,
    };
    const getBreeds = async () => {
      try {
        const heroLists = await Images.getImages({ params }).then((res) => {
          console.log(res.data);
          return res.data;
        });

        setBreedItems(heroLists);
      } catch (error) {
        console.log("error: ", error);
      }
    };

    getBreeds();
  }, []);

  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      grabCursor={true}
      spaceBetween={0}
      slidesPerView={1}
      // autoplay={{ delay: 5000 }}
    >
      {breedItems.map((item, index) => (
        <SwiperSlide key={index}>
          {({ isActive }) => (
            <HeroSlideItem
              item={item}
              className={`${isActive ? "active" : ""}`}
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
