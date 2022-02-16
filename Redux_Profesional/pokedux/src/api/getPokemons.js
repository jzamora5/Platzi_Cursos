import axiosInstance from "./config";

export const getPokemons = (limit = 151) =>
  axiosInstance
    .get(`/pokemon?limit=${limit}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
