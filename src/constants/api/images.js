import axios from "configs/axios";

export default {
  getImages: (params) => axios.get("/images/search?", params),
  getImage: (imageId) => axios.get("/images/:imageId"),
};
