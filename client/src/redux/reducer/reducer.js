import {
   GET_VIDEOGAME,
   GET_NAME,
   GET_GENRES,
   GET_DB_API,
   FILTER,
   ORDER_NAME,
   ORDER_RATING,
   POST_VIDEOGAME,
} from "../actions/action-types";

let initialState = {
   videogames: [],
   videogamesTwo: [],
   genres: [],
   post: [],
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_VIDEOGAME:
         return {
            ...state,
            videogames: action.payload,
            videogamesTwo: action.payload,
         };

      case POST_VIDEOGAME:
         return {
            ...state,
            post: action.payload,
         };

      case GET_NAME:
         return {
            ...state,
            videogames: action.payload,
            videogamesTwo: action.payload,
         };

      case GET_GENRES:
         return {
            ...state,
            genres: action.payload,
         };

      case FILTER:
         return {
            ...state,
            filter: action.payload,
         };

      case ORDER_NAME:
         return {
            ...state,
            videogames: action.payload,
         };

      case ORDER_RATING:
         return {
            ...state,
            videogames: action.payload,
         };

      case GET_DB_API:
         return {
            ...state,
            videogames: action.payload,
         };

      default:
         return { ...state };
   }
};

export default reducer;
