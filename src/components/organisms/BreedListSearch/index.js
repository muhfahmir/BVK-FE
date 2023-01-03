import React, { useEffect, useState } from "react";
import Breeds from "constants/api/breeds";
import BreedListItem from "components/molecules/BreedListItem";

export default function BreedListSearch({ q }) {
  const [breedSearch, setBreedSearch] = useState([]);
  const [loading, setLoading] = useState(false);

  const params = {
    q: q,
  };
  useEffect(() => {
    getListBreeds();
  }, [q]);

  const getListBreeds = async () => {
    setLoading(true);
    const listBreeds = await Breeds.getBreed({ params }).then((res) => {
      console.log("res.data Search :>> ", res.data);
      return res.data;
    });
    if (listBreeds.length) {
      // setBreedSearch([...breedSearch, ...listBreeds]);
      setBreedSearch(listBreeds);
    }
    setLoading(false);
  };

  return (
    <div className="breed-list">
      <div className="flex flex-wrap">
        {breedSearch.map((breed, index) => (
          <BreedListItem key={`${breed.id}-${index}`} breed={breed} />
        ))}
        {loading && <div>loading....</div>}
      </div>
    </div>
  );
}
