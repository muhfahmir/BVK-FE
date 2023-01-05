import React, { useEffect, useState } from "react";
import Breeds from "constants/api/breeds";
import BreedListItem from "components/molecules/BreedListItem";
import Loading from "components/atoms/Loading";

export default function BreedList() {
  const [breeds, setBreeds] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const params = {
    limit: 10,
    page: page,
  };
  useEffect(() => {
    getListBreeds();
  }, [page]);

  const getListBreeds = async () => {
    if (hasMore) {
      setLoading(true);
      const listBreeds = await Breeds.getBreeds({ params }).then((res) => {
        console.log("res.data Breeds :>> ", res.data);
        return res.data;
      });
      if (listBreeds.length) {
        setBreeds([...breeds, ...listBreeds]);
        setHasMore(true);
      } else {
        setHasMore(false);
      }
      setLoading(false);
    }
  };

  const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      setPage(page + 1);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [breeds]);

  return (
    <div className="breed-list">
      <div className="flex flex-wrap -mx-4 ">
        {breeds.map((breed, index) => (
          <div
            className="lg:w-4/12 relative pb-8 px-4 w-full md:w-6/12"
            key={`${breed?.id}-${index}`}
            data-aos="fade-down"
            data-aos-duration={300 * (index + 1)}
          >
            <BreedListItem breed={breed} />
          </div>
        ))}
      </div>
      {loading && <Loading />}
    </div>
  );
}
