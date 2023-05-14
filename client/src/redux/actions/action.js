import { GET_VIDEOGAME } from "./action-types";
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
