import React, { useEffect, useState } from "react";
import DetailBreed from "./ItemDetail";
import ImageDefault from "assets/images/images-deafult.png";

export default function BreedListItem({ breed }) {
  const [show, setshow] = useState(false);

  const switchShow = () => {
    setshow(!show);
  };
  return (
    <>
      <div
        onClick={() => switchShow()}
        className={"cursor-pointer shadow-xl shadow-[#16162c]"}
      >
        <div>
          <div
            className="w-full relative rounded-3xl overflow-hidden "
            style={{ maxHeight: "300px" }}
          >
            <img
              src={breed?.image?.url || ImageDefault}
              alt={`${breed?.name}-Image`}
              className="w-full"
              style={{ minHeight: "300px" }}
            />
          </div>
        </div>
        {show && (
          <div data-aos="fade-down" className="p-4">
            <h3 className={"text-xl md:text-2xl font-bold text-left"}>
              {breed?.name}
            </h3>
            <DetailBreed breed={breed} />
          </div>
        )}
      </div>
    </>
  );
}
