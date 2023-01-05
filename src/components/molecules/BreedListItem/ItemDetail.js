import React from "react";
import { Link } from "react-router-dom";

export default function ItemDetail({ breed }) {
  return (
    <div className="detail-breed text-left">
      <h3 className="text-left text-[#ccc] text-sm md:text-xl">
        {breed?.alt_names} from {breed?.origin}
      </h3>
      <p className="mt-2 line-clamp-3 font-light mb-4 text-sm md:text-base">
        {breed?.description}
      </p>

      <Link className="" to={`/breed/${breed.id}`}>
        <button className="bg-primaryColor text-white w-full py-2 rounded-md">
          Detail
        </button>
      </Link>
    </div>
  );
}
