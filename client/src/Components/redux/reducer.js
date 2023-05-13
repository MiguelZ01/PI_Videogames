import { ADD_VIDEOGAME, REMOVE_VIDEOGAME } from "./action-types";

const initialState = {
   videogames: [],
   videogames2nd: [],
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_VIDEOGAME:
         return {
            ...state,
            videogames: [...state.videogames, action.videogame],
            videogames2nd: [...state.videogames, action.videogame],
         };
      // case FILTER:

      //    return state;
      // case ORDER:
      //    return state;
      case REMOVE_VIDEOGAME:
         return {
            ...state,
            videogames: action.payload,
         };

      default:
         return { ...state };
   }
};

export default reducer;
