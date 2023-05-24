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
   const endpoint = "Videogames";

   return async (dispatch) => {
      try {
         const { data } = await axios.get(endpoint);
         return dispatch({
            type: GET_VIDEOGAME,
            payload: data,
         });
      } catch (error) {
         throw new Error(error);
      }
   };
};

export const videogamePOST = (videogame) => {
   const endpoint = "Videogames";

   return async (dispatch) => {
      try {
         const { data } = await axios.post(endpoint, videogame);
         console.log(data);
         return dispatch({
            type: POST_VIDEOGAME,
            payload: data,
         });
      } catch (error) {
         throw new Error(error.response.data.replace(/^Error:\s*/i, ""));
      }
   };
};

export const GET_detail = (id) => {
   const endpoint = `Videogames/${id}`;

   return async (dispatch) => {
      try {
         const { data } = await axios.get(endpoint);
         return dispatch({
            type: GET_DETAIL,
            payload: data,
         });
      } catch (error) {
         window.alert(error.response.data);
      }
   };
};

export const GetByName = (name) => {
   const endpoint = `Videogames/name/?name=${name}`;

   return async (dispatch) => {
      try {
         const { data } = await axios.get(endpoint);
         return dispatch({
            type: GET_NAME,
            payload: data,
         });
      } catch (error) {
         window.alert(error.response.data);
      }
   };
};

export const GetGenres = () => {
   const endpoint = "genres";

   return async (dispatch) => {
      try {
         const { data } = await axios.get(endpoint);
         return dispatch({
            type: GET_GENRES,
            payload: data,
         });
      } catch (error) {
         throw new Error(error);
      }
   };
};

export const FilterGenres = (genre) => {
   const endpoint = "Videogames";

   return async (dispatch) => {
      try {
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
      } catch (error) {
         throw new Error(error);
      }
   };
};

export function DB_API(event) {
   const endpoint = "Videogames";

   return async (dispatch) => {
      try {
         const { data } = await axios.get(endpoint);
         if (event === "ALL") {
            return dispatch({
               type: GET_DB_API,
               payload: data,
            });
         }
         if (event === "API") {
            const gamesAPI = data?.filter((game) => game.created === "API");
            return dispatch({
               type: GET_DB_API,
               payload: gamesAPI,
            });
         }
         if (event === "DB") {
            const gamesDB = data?.filter((game) => game.created === "DB");
            return dispatch({
               type: GET_DB_API,
               payload: gamesDB,
            });
         }
      } catch (error) {
         throw new Error(error);
      }
   };
}

export const ORDER_ALFABETICO = (order) => {
   const endpoint = "Videogames";

   return async (dispatch) => {
      try {
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
      } catch (error) {
         throw new Error(error);
      }
   };
};

export const ORDER_RATINGS = (order) => {
   const endpoint = "Videogames";

   return async (dispatch) => {
      try {
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
      } catch (error) {
         throw new Error(error);
      }
   };
};
