import {
   GET_VIDEOGAME,
   GET_NAME,
   GET_DETAIL,
   GET_GENRES,
   GET_DB_API,
   FILTER,
   ORDER_NAME,
   ORDER_RATING,
   POST_VIDEOGAME,
} from "./action-types";
import axios from "axios";

export const videogameGET = () => {
   try {
      const endpoint = "http://localhost:3001/Videogames";

      return async (dispatch) => {
         const { data } = await axios.get(endpoint);
         return dispatch({
            type: GET_VIDEOGAME,
            payload: data,
         });
      };
   } catch (error) {
      throw new Error(error);
   }
};

export const videogamePOST = (videogame) => {
   try {
      const endpoint = "http://localhost:3001/Videogames";

      return async (dispatch) => {
         const { data } = await axios.post(endpoint, videogame);
         return dispatch({
            type: POST_VIDEOGAME,
            payload: data,
         });
      };
   } catch (error) {
      throw new Error(error);
   }
};

export const GET_detail = (id) => {
   try {
      const endpoint = `http://localhost:3001/Videogames/${id}`;

      return async (dispatch) => {
         const { data } = await axios.get(endpoint);
         return dispatch({
            type: GET_DETAIL,
            payload: data,
         });
      };
   } catch (error) {
      throw new Error(error);
   }
};

export const GetByName = (name) => {
   try {
      const endpoint = `http://localhost:3001/Videogames/name/?name=${name}`;

      return async (dispatch) => {
         const { data } = await axios.get(endpoint);
         return dispatch({
            type: GET_NAME,
            payload: data,
         });
      };
   } catch (error) {
      throw new Error(error);
   }
};

export const GetGenres = () => {
   try {
      const endpoint = "http://localhost:3001/genres";

      return async (dispatch) => {
         const { data } = await axios.get(endpoint);
         return dispatch({
            type: GET_GENRES,
            payload: data,
         });
      };
   } catch (error) {
      throw new Error(error);
   }
};

export const filter = (genre) => {
   try {
      const endpoint = "http://localhost:3001/Videogames";

      return async (dispatch) => {
         const { data } = await axios.get(endpoint);

         if (genre === "GENRES") {
            return dispatch({
               type: FILTER,
               payload: data,
            });
         } else {
            const filteredData = data.filter((game) => game.genres.includes(genre));
            return dispatch({
               type: FILTER,
               payload: filteredData,
            });
         }
      };
   } catch (error) {
      throw new Error(error);
   }
};

export function DBorAPI(event) {
   try {
      const endpoint = "http://localhost:3001/Videogames";

      return async (dispatch) => {
         const { data } = await axios.get(endpoint);
         if (event === "ALL") {
            return dispatch({
               type: GET_DB_API,
               payload: data,
            });
         }
         if (event === "API") {
            const gamesAPI = data?.filter((game) => typeof game.id === "number");
            return dispatch({
               type: GET_DB_API,
               payload: gamesAPI,
            });
         }
         if (event === "DB") {
            const gamesDB = data?.filter((game) => typeof game.id === "string");
            // console.log(gamesDB);
            return dispatch({
               type: GET_DB_API,
               payload: gamesDB,
            });
         }
      };
   } catch (error) {
      throw new Error(error);
   }
}

export const ORDER_ALFABETICO = (order) => {
   try {
      const endpoint = "http://localhost:3001/Videogames";

      return async (dispatch) => {
         const { data } = await axios.get(endpoint);
         if (order === "Default") {
            return dispatch({
               type: ORDER_NAME,
               payload: data,
            });
         } else if (order === "A-Z") {
            const ascendente = data.sort((a, b) => a.name.localeCompare(b.name));
            return dispatch({
               type: ORDER_NAME,
               payload: ascendente,
            });
         }
         if (order === "Z-A") {
            const descendente = data.sort((a, b) => b.name.localeCompare(a.name));
            return dispatch({
               type: ORDER_NAME,
               payload: descendente,
            });
         }
      };
   } catch (error) {
      throw new Error(error);
   }
};

export const ORDER_RATINGS = (order) => {
   try {
      const endpoint = "http://localhost:3001/Videogames";

      return async (dispatch) => {
         const { data } = await axios.get(endpoint);

         if (order === "Default") {
            return dispatch({
               type: ORDER_RATING,
               payload: data,
            });
         } else if (order === "5-0") {
            const ascendente = data.sort((a, b) => b.rating - a.rating);

            return dispatch({
               type: ORDER_RATING,
               payload: ascendente,
            });
         } else if (order === "0-5") {
            const descendente = data.sort((a, b) => a.rating - b.rating);

            return dispatch({
               type: ORDER_RATING,
               payload: descendente,
            });
         }
      };
   } catch (error) {
      throw new Error(error);
   }
};
