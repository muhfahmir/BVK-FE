import React, { useEffect, useState } from "react";
import Breeds from "constants/api/breeds";
import BreedListItem from "components/molecules/BreedListItem";
import { useParams } from "react-router-dom";
import Loading from "components/atoms/Loading";

export default function BreedListSearch() {
  const [breedSearch, setBreedSearch] = useState([]);
  const { q } = useParams();
  const [loading, setLoading] = useState(false);

  const params = {
    q: q,
  };
  useEffect(() => {
    getListBreeds();
  }, [q]);

  const getListBreeds = async () => {
    setLoading(true);
    const listBreeds = await Breeds.getBreedsSearch({ params }).then((res) => {
      console.log("res.data Search :>> ", res.data);
      return res.data;
    });

    setBreedSearch(listBreeds);
    setLoading(false);
  };

  return (
    <div className="breed-list">
      <div className="flex flex-wrap  -mx-4 ">
        {breedSearch.length > 0 ? (
          breedSearch.map((breed, index) => (
            <div
              className="lg:w-4/12 relative pb-8 px-4 w-full md:w-6/12"
              key={`${breed.id}-${index}`}
              data-aos="fade-down"
              data-aos-duration={300 * (index + 1)}
            >
              <BreedListItem key={`${breed.id}-${index}`} breed={breed} />
            </div>
          ))
        ) : (
          <div>Maaf Data Tidak Ada</div>
        )}
      </div>
      {loading && <Loading />}
    </div>
  );
}
