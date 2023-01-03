import React, { useState } from "react";
import DetailBreed from "./DetailBreed";

export default function BreedListItem({ breed }) {
  const [show, setshow] = useState(false);

  const switchShow = () => {
    setshow(!show);
  };
  return (
    <div className="w-3/12 relative pr-3 pb-3">
      <button className="relative " type="button" onClick={() => switchShow()}>
        <div className="w-full h-full relative rounded-3xl overflow-hidden">
          <img
            src={breed?.image?.url}
            alt={`${breed?.name}-Image`}
            className="h-full"
          />
        </div>
        <h3 className="text-xl font-bold">{breed?.name}</h3>
      </button>
      {show && <DetailBreed breed={breed} />}
    </div>
  );
}
