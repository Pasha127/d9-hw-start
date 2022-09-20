import { FAV_MINUS, FAV_PLUS } from "../Actions/Actions";
import { initialState } from "../Store/Store";


const FavReducer = (state = initialState.favs, action) => {
    switch (action.type) {                
      case FAV_PLUS:          
          return {
            ...state,
            favs: [...state.favs, action.payload]
          };
      case FAV_MINUS:
          return {
            ...state,
            favs: state.favs.filter((job) => job._id !== action.payload._id)
          };
        
      default:
        return state; 
    }
  };
export default FavReducer;