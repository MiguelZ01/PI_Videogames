import {
   GET_VIDEOGAME,
   GET_NAME,
   NEXT_PAGE,
   PREV_PAGE,
   HANDLE_NUMBER,
   CLEAN,
} from "../actions/action-types";

let initialState = {
   videogames: [],
   videogamesTwo: [],
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_VIDEOGAME:
         return {
            ...state,
            videogames: action.payload,
            videogamesTwo: action.payload,
         };

      case GET_NAME:
         return {
            ...state,
            videogames: action.payload,
            videogamesTwo: action.payload,
         };

      // case CLEAN:
      //    return {
      //       videogames: action.payload,
      //    };

      // case NEXT_PAGE:
      //    return {
      //       ...state,
      //       numPage: state.numPage + 1,
      //    };
      // case PREV_PAGE:
      //    return {
      //       ...state,
      //       numPage: state.numPage - 1,
      //    };
      // case HANDLE_NUMBER:
      //    return {
      //       ...state,
      //       numPage: action.payload,
      //    };

      default:
         return { ...state };
   }
};

export default reducer;
