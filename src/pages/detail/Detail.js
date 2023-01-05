import BannerDetail from "components/organisms/BannerDetail";
import BreedDetail from "components/organisms/BreedDetail";
import Header from "components/organisms/Header";
import Breeds from "constants/api/breeds";
import Images from "constants/api/images";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { breedId } = useParams();
  const [breed, setBreed] = useState(null);
  const [breedImage, setBreedImage] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getBreedDetail = async () => {
      setLoading(true);
      const itemBreed = await Breeds.getBreed(breedId).then((res) => {
        return res.data;
      });

      if (itemBreed?.reference_image_id) {
        const imageBreed = await Images.getImage(
          itemBreed?.reference_image_id
        ).then((res) => {
          return res.data;
        });
        setBreedImage(imageBreed);
        console.log("imageBreed", imageBreed);
      }

      setBreed(itemBreed);
      setLoading(false);
      window.scrollTo(0, 0);
    };
    getBreedDetail();
  }, [breedId]);

  useEffect(() => {
    window.title = "Catty | Detail";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {loading && (
        <div className="container mx-auto mt-28 mb-12">
          <div
            role="status"
            className="w-full p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
          >
            <div className="flex w-full">
              <div className="flex items-center justify-center h-[400px] mr-4 bg-gray-300 rounded dark:bg-gray-700">
                <svg
                  className="w-full h-full text-gray-200 dark:text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 640 512"
                >
                  <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                </svg>
              </div>
              <div className="w-full">
                <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-96 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>

                <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>

                <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>

                <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
            </div>

            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      {breed && (
        <>
          <Header isDetail />
          <section className="detail mb-12" data-aos="fade-up">
            <BannerDetail breedImage={breedImage} />
            <BreedDetail breed={breed} breedImage={breedImage} />
          </section>
        </>
      )}
    </>
  );
}
