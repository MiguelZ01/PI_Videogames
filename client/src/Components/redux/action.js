import axios from "axios";
import { ADD_VIDEOGAME, REMOVE_VIDEOGAME, FILTER, ORDER } from "./action-types";

export const videogameADD = () => {
   const endpoint = "http://localhost:3001/Videogames";
   return async (dispatch) => {
      try {
         const { data } = await axios.get(endpoint);
         return dispatch({
            type: ADD_VIDEOGAME,
            payload: data,
         });
      } catch (error) {
         throw new Error(error.message);
      }
   };
};

export const videogameFilter = (gender) => {
   return { type: FILTER, payload: gender };
};

export const videogameOrder = (order) => {
   return { type: ORDER, payload: order };
};
