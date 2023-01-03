import Button from "components/atoms/Button";
import InputText from "components/atoms/Form/InputText";
import BreedList from "components/organisms/BreedList";
import BreedListSearch from "components/organisms/BreedListSearch";
import HeroSlide from "components/organisms/HeroSlide";
import { useCallback, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [isSearch, setIsSearch] = useState(false);

  const history = useHistory();

  const goToSearch = useCallback(() => {
    if (keyword.trim().length > 0) {
      history.push(`/?q=${keyword}`);
      setIsSearch(true);
    } else {
      history.replace("/");
      setKeyword("");
      setIsSearch(false);
    }
  }, [keyword, history]);

  useEffect(() => {
    const enterEvent = (e) => {
      e.preventDefault();
      if (e.keyCode === 13) {
        goToSearch();
      }
    };
    document.addEventListener("keyup", enterEvent);
    return () => {
      document.removeEventListener("keyup", enterEvent);
    };
  }, [keyword, goToSearch]);

  return (
    <>
      <HeroSlide />
      <section className="breeds my-4">
        <div className="container mb-3 mx-auto">
          <div className="flex flex-row justify-between mb-2">
            <h2 className="text-2xl font-bold">Breeds</h2>
            <div className="w-[500px] relative ">
              <div className="breed-search w-full rounded-full relative">
                <InputText
                  className="w-full  bg-[#000]"
                  type="text"
                  placeholder="Enter keyword"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <Button
                  className={"small "}
                  isSearch={true}
                  onClick={goToSearch}
                >
                  Search
                </Button>
              </div>
            </div>
            <Link to="/breeds">
              <Button isOutline={true}>View more</Button>
            </Link>
          </div>
          {!isSearch ? <BreedList /> : <BreedListSearch q={keyword} />}
        </div>
      </section>
      {/* {breeds.map((breed, index) => {
        return <div key={`${breed.id}-${index}`}>hello</div>;
      })}
      <button onClick={loadMore}>Load more</button> */}
    </>
  );
}
