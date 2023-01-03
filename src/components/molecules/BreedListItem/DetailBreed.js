import React from "react";
import { Link } from "react-router-dom";

export default function DetailBreed({ breed }) {
  return (
    <div className="detail-breed text-left">
      <h3>
        {breed?.alt_names} from {breed?.origin}
      </h3>
      <p className="mt-2">{breed?.description}</p>
      <p className="mt-2">Temperament: {breed?.temperament}</p>
      <Link className="text-red-500" to={`/breed/${breed.id}`}>
        More detail ...
      </Link>
    </div>
  );
}
