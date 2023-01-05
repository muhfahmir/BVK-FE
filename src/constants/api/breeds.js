import axios from "configs/axios";

export default {
  getBreeds: (params) => axios.get("/breeds", params),
  getBreedsSearch: (params) => axios.get("/breeds/search", params),
  getBreed: (breedId) => axios.get(`/breeds/${breedId}`),
};
