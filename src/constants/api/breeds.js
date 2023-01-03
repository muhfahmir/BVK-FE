import axios from "configs/axios";

export default {
  getBreeds: (params) => axios.get("/breeds", params),
  getBreed: (params) => axios.get("/breeds/search", params),
};
