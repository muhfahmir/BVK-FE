import Button from "components/atoms/Button";
import InputText from "components/atoms/Form/InputText";
import BreedList from "components/organisms/BreedList";
import BreedListSearch from "components/organisms/BreedListSearch";
import Header from "components/organisms/Header";
import HeroSlide from "components/organisms/HeroSlide";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

export default function Home() {
  const history = useHistory();
  const [keyword, setKeyword] = useState("");
  const breedRef = useRef(null);
  const homeRef = useRef(null);

  const goToSearch = useCallback(() => {
    console.log("run");
    if (keyword.trim().length > 0) {
      history.push(`/search/${keyword}`);
    } else {
      history.replace("/");
      setKeyword("");
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
  const { q } = useParams();
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    if (q != undefined && q != "") {
      setIsSearch(true);
    } else {
      setIsSearch(false);
    }
  }, [q]);

  useEffect(() => {
    window.title = "Catty | Home";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header breedRef={breedRef} homeRef={homeRef} />

      <section className="hero-slide mb-12  z-20 relative" ref={homeRef}>
        <HeroSlide />
      </section>

      <section
        className="breeds my-4 z-50 relative "
        id="breeds"
        ref={breedRef}
      >
        <div className="container mb-3 mx-auto px-4 lg:px-0">
          <div className="flex flex-row justify-between  my-12 items-center">
            <h2 className="text-2xl md:text-5xl font-bold text-center">
              Breeds
            </h2>

            <div className="w-[200px] md:w-[500px] md:h-14 relative ">
              <div className="breed-search  h-full w-full relative">
                <InputText
                  className="w-full h-full bg-white"
                  type="text"
                  placeholder="Find your catty"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <div className="absolute right-1 top-1">
                  <button
                    type="button"
                    className="rounded-full bg-primaryColor px-2 py-2"
                  >
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAt1JREFUaEPtmIFtFTEMhv9OAJ0AOgEwATABdALaCQoTABMAE0AnACYAJmg3aDsBdIJWn5RIVpTc2cm7cq96lipVrZP4sx3buT1tuextuf3aAfzvCI5G4JWk15IeS3oo6WkCOpf0T9KlpB+Sfi4F2gOAoZ+S4fzuEWAAeZfAPGtcOlGA95LeJm+7DiiUAPks6WPP4toaLwCe/mVSZPR8UuzlJqLhASCvMb6WLlcpNX6nfMcwhDXcixcp1R5ViLkfh5Lymi6nzAFg9EXFeAz/IOmb89SjpF+CAPFsJBJzAGeVtKGiYBD5HBGcATCVywoRAKJLpgDwMJfWymkyvuuwtAiIN8UGXGrOC0sLoJY6eJ6avwmhpNpIEM2Djqg2R4nSS+Q8FzOaNi1YHET+PzAKXdFtReBvcXGPAxfWGyHu0VejjHP2vYuzXg2ANPluNsL7lMQlhCjYykRZJb3cUgMo0+dL6r7uTQOKdOUTox8+qwZAU3puNg17JQBQRvtPan7uLWoAZe2nRg91ywlrKAyclyXcE2oAN8WBc83O7a2G4tB59xKAMD4x3rrLFApXvHt5ibe+jJaljWbDnLKEMKrbJhku2a0KQ1u3c8pdjBLXCSY0b7UAyjQafngU4atNu+EuzJ5T43Q5LTKjEOJNCLNWOZqTppwZkuiDhsiQTiPCBMokamXjDxrb2m1P4O9EAohQrqbxHONLz4drvyWfGxNqDw/WE2qegDxCPMITksmz9SGsu0jMAWAcAxdeb30a4X9MsHjSflZBP39W8bwnuiA8AEDgOYws08nj/ZoOsDWHhCG8ANkI0oZPi7ZHRCHyhS2flHmfEEQUIEeDfOYyekFoUlQw1tlSOQzRA2A9DoT9vJ5TjBTBUO4EqcdPq2oNQYwCRNOnpd8NsRYAwLog1gQwBdEcM9YGUIOYrEprBLAQsyV1rQBA0L1np9M1A7gq3A7A5aYFlXYRWNC5rq23PgK3rtObMbDQ2A8AAAAASUVORK5CYII="
                      className="md:w-[30px] w-[15px]"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div id="breeds">
            {!isSearch ? <BreedList /> : <BreedListSearch />}
          </div>
        </div>
      </section>
      {/* {breeds.map((breed, index) => {
        return <div key={`${breed.id}-${index}`}>hello</div>;
      })}
      <button onClick={loadMore}>Load more</button> */}
    </>
  );
}
