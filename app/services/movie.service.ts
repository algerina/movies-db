import axios from "axios";

const API_key = "d13bf4ed69c1e3bd2a9e5352b34d889f";
const API_BASE_URL = "https://api.themoviedb.org/3";

const client = axios.create({
  baseURL: API_BASE_URL,
  params: { api_key: API_key }
});

export const searchMovies = async{query: string} => {
  try {
    const response = await client.get("/search/movie", {
      params: {query},
    });

    if (response.data && response.data.results) {
      return response.data.results;
    } else {
      console.error("Couldn't get the data");
    }

  } catch(error){
console.error(error);
return[];
  }
}
