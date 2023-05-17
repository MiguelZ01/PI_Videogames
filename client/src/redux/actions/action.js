import {
   GET_VIDEOGAME,
   GET_NAME,
   GET_DETAIL,
   GET_GENRES,
   GET_DB_API,
   FILTER,
   ORDER_NAME,
   ORDER_RATING,
} from "./action-types";
import axios from "axios";

export const videogameGET = () => {
   const endpoint = "http://localhost:3001/Videogames";

   return async (dispatch) => {
      const { data } = await axios.get(endpoint);
      return dispatch({
         type: GET_VIDEOGAME,
         payload: data,
      });
   };
};

export const GET_detail = (id) => {
   const endpoint = `http://localhost:3001/Videogames/${id}`;

   return async (dispatch) => {
      const { data } = await axios.get(endpoint);
      return dispatch({
         type: GET_DETAIL,
         payload: data,
      });
   };
};

export const GetByName = (name) => {
   const endpoint = `http://localhost:3001/Videogames/name/?name=${name}`;

   return async (dispatch) => {
      const { data } = await axios.get(endpoint);
      return dispatch({
         type: GET_NAME,
         payload: data,
      });
   };
};

export const GetGenres = () => {
   const endpoint = "http://localhost:3001/genres";

   return async (dispatch) => {
      const { data } = await axios.get(endpoint);
      return dispatch({
         type: GET_GENRES,
         payload: data,
      });
   };
};

export const filter = (genre) => {
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
};

export function DBorAPI(event) {
   const endpoint = "http://localhost:3001/Videogames";

   return async (dispatch) => {
      const { data } = await axios.get(endpoint);
      if (event === "TYPES") {
         dispatch({
            type: GET_DB_API,
            payload: data,
         });
      }
      if (event === "ALL") {
         return dispatch({
            type: GET_DB_API,
            payload: data,
         });
      }
      if (event === "API") {
         return dispatch({
            type: GET_DB_API,
            payload: data,
         });
      }
      if (event === "DB") {
         return dispatch({
            type: GET_DB_API,
            payload: data,
         });
      }
   };
}

export const ORDER_ALFABETICO = (order) => {
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
};

export const ORDER_RATINGS = (order) => {
   const endpoint = "http://localhost:3001/Videogames";

   return async (dispatch) => {
      const { data } = await axios.get(endpoint);
      if (order === "Default") {
         return dispatch({
            type: ORDER_RATING,
            payload: data,
         });
      } else if (order === "5-0") {
         const ascendente = data.sort((a, b) => a.rating - b.rating);
         return dispatch({
            type: ORDER_RATING,
            payload: ascendente,
         });
      } else if (order === "0-5") {
         const descendente = data.sort((a, b) => b.rating - a.rating);
         return dispatch({
            type: ORDER_RATING,
            payload: descendente,
         });
      }
   };
};
