import {
   GET_VIDEOGAME,
   GET_NAME,
   GET_DETAIL,
   // REMOVE_FAV,
   // PREV_PAGE,
   // NEXT_PAGE,
   // HANDLE_NUMBER,
   UNMOUNT_COMPONENT,
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

export const desmontaje = () => {
   return {
      type: UNMOUNT_COMPONENT,
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

// export function prevPage() {
//    return {
//       type: PREV_PAGE,
//    };
// }

// export function nextPage() {
//    return {
//       type: NEXT_PAGE,
//    };
// }

// export function handleNumber(num) {
//    return {
//       type: HANDLE_NUMBER,
//       payload: num,
//    };
// }
