import CharacteristicItem from "components/molecules/CharacteristicItem";
import React from "react";
import ImageDefault from "assets/images/images-deafult.png";
import "./index.scss";
export default function BreedDetail({ breedImage, breed }) {
  return (
    <div className="container m-auto" data-aos="fade-up">
      <div
        className="flex md:flex-row flex-col relative lg:-mx-4"
        data-aos="fade-up"
      >
        <div className="md:w-5/12 px-4 w-full" data-aos="fade-up">
          <div className="w-full rounded-3xl overflow-hidden shadow-xl shadow-[#16162c]">
            <img
              src={breedImage?.url || ImageDefault}
              alt="Image"
              className="w-full"
            />
          </div>
        </div>
        <div className="md:w-7/12 px-4 w-full mt-4 md:mt-0">
          <div className="w-full">
            <h1 className="font-bold text-2xl md:text-5xl mb-8">
              {breed?.name}
              <span className="text-base md:text-xl block font-normal text-[#ccc]">
                {" "}
                {breed?.alt_names} from {breed?.origin}
              </span>
            </h1>
            <div
              className="genres mb-8 flex overflow-x-auto"
              data-aos="fade-up"
            >
              {breed?.temperament &&
                breed?.temperament
                  .split(",")
                  .slice(0, 5)
                  .map((tmp, i) => (
                    <span
                      key={i}
                      className="genres__item my-1 text-xs md:text-sm"
                    >
                      {tmp}
                    </span>
                  ))}
            </div>
            <p className="overview mb-8 text-sm md:text-base">
              {breed?.description}
              <span className="block">
                This cat can live {breed?.life_span} years and has an average
                weight of {breed?.weight?.imperial || breed?.weight?.metric}
                {breed?.weight?.imperial ? " imperial" : " metric"}
              </span>
            </p>

            <div className="flex flex-col mb-8">
              <h2 className="text-xl md:text-2xl font-bold">Characteristic</h2>
              <CharacteristicItem
                className={"ml-4"}
                value={breed?.adaptability}
                name="Adaptability"
              />

              <CharacteristicItem
                className={"ml-4"}
                value={breed?.child_friendly}
                name="Child Friendly"
              />

              <CharacteristicItem
                className={"ml-4"}
                value={breed?.stranger_friendly}
                name="Stranger Friendly"
              />

              <CharacteristicItem
                className={"ml-4"}
                value={breed?.dog_friendly}
                name="Dog Friendly"
              />
              <CharacteristicItem
                className={"ml-4"}
                value={breed?.intelligence}
                name="Intelligence"
              />

              <CharacteristicItem
                className={"ml-4"}
                value={breed?.social_needs}
                name="Social Needs"
              />

              <CharacteristicItem
                className={"ml-4"}
                value={breed?.affection_level}
                name="Affection Level"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
