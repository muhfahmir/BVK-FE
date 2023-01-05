import React from "react";
import CharacteristicItem from "../CharacteristicItem";

import "./index.scss";

export default function HeroSlideItem({ item, className }) {
  return (
    <div
      className={`hero-slide__item ${className}`}
      style={{
        backgroundImage: `url(${item.url})`,
      }}
    >
      <div className="hero-slide__item__content container">
        <div className="hero-slide__item__content__info">
          <h2 className="title">
            {item?.breeds?.[0]?.name}
            <span className="md:text-xl block font-normal mt-2 text-sm">
              {" "}
              {item?.breeds?.[0]?.alt_names} from {item?.breeds?.[0]?.origin}
            </span>
          </h2>

          <div className="overview">{item?.breeds?.[0]?.description}</div>

          <div className="characteristics md:flex md:flex-col hidden">
            <h2 className="text-2xl font-medium">Characteristics</h2>

            <CharacteristicItem
              className={"ml-4"}
              value={item?.breeds?.[0]?.adaptability}
              name="Adaptability"
            />

            <CharacteristicItem
              className={"ml-4"}
              value={item?.breeds?.[0]?.child_friendly}
              name="Child Friendly"
            />

            <CharacteristicItem
              className={"ml-4"}
              value={item?.breeds?.[0]?.stranger_friendly}
              name="Stranger Friendly"
            />

            <CharacteristicItem
              className={"ml-4"}
              value={item?.breeds?.[0]?.dog_friendly}
              name="Dog Friendly"
            />
          </div>
          {/* stranger_friendly,adaptability,child_friendly,dog_friendly */}
          {/* <div className="btns">hello</div> */}
        </div>
        <div className="hero-slide__item__content__poster h-[500px] hidden">
          <img src={item?.url} alt={item.title} className="h-full" />
        </div>
      </div>
    </div>
  );
}
