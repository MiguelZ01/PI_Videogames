import { GET_VIDEOGAME } from "../actions/action-types";

let initialState = {
   videogames: [],
   videogames2nd: [],
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_VIDEOGAME:
         return {
            ...state,
            videogames: action.payload,
            // videogames2nd: [...state.videogames, action.payload],
         };
      default:
         return { ...state };
   }
};

export default reducer;
