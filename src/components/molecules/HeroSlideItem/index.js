import Star from "components/atoms/Star";
import React from "react";

import "./index.scss";

export default function HeroSlideItem({ item, className }) {
  return (
    <div
      className={`hero-slide__item ${className}`}
      style={{
        backgroundImage: `url(${item.url})`,
      }}
    >
      <div className="hero-slide__item__content container relative flex flex-row">
        <div className="hero-slide__item__content__info w-[55%] px-12 relative">
          <h2 className="title">
            {item?.breeds?.[0].name}
            <span className="text-xl block font-normal mt-2">
              {" "}
              {item?.breeds?.[0]?.alt_names} from {item?.breeds?.[0].origin}
            </span>
          </h2>

          <div className="overview">{item?.breeds?.[0].description}</div>

          <div className="characteristics flex flex-col delay-75">
            <h2 className="text-2xl font-medium">Characteristics</h2>
            <div className="flex items-center">
              Adaptability{" "}
              <Star
                className="ml-4"
                value={item?.breeds?.[0].adaptability}
                width={35}
                height={35}
                spacing={4}
              />
            </div>
            <div className="flex items-center">
              Child Friendly{" "}
              <Star
                className="ml-4"
                value={item?.breeds?.[0].child_friendly}
                width={35}
                height={35}
                spacing={4}
              />
            </div>
            <div className="flex items-center">
              Stranger Friendly{" "}
              <Star
                className="ml-4"
                value={item?.breeds?.[0].stranger_friendly}
                width={35}
                height={35}
                spacing={4}
              />
            </div>
            <div className="flex items-center">
              Dog Friendly{" "}
              <Star
                className="ml-4"
                value={item?.breeds?.[0].dog_friendly}
                width={35}
                height={35}
                spacing={4}
              />
            </div>
          </div>
          {/* stranger_friendly,adaptability,child_friendly,dog_friendly */}
          {/* <div className="btns">hello</div> */}
        </div>
        <div className="hero-slide__item__content__poster h-[500px]">
          <img src={item?.url} alt={item.title} className="h-full" />
        </div>
      </div>
    </div>
  );
}
