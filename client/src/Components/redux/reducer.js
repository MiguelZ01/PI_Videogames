import { ADD_VIDEOGAME, FILTER, ORDER, REMOVE_FAV } from "./action-types";

const initialState = {
   Videogames: [],
   Videogames2nd: [],
};

const reducer = (state = initialState, { type, payload }) => {
   switch (type) {
      case ADD_VIDEOGAME:
         return {
            ...state,
            Videogames: payload,
            Videogames2nd: payload,
         };

      default:
         return { ...state };
   }
};

export default reducer;
