import React from "react";
import ImageDefault from "assets/images/cats-bg-test.jpg";

import "./index.scss";
export default function BannerDetail({ breedImage }) {
  console.log("breedImage", breedImage);
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${breedImage?.url || ImageDefault})`,
      }}
    ></div>
  );
}
