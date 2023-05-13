import { ADD_VIDEOGAME } from "./action-types";
import axios from "axios";

export const videogameADD = () => {
   const endpoint = "http://localhost:3001/Videogames";
   return async (dispatch) => {
      const { data } = await axios.get(endpoint);
      return dispatch({
         type: ADD_VIDEOGAME,
         payload: data,
      });
   };
};
