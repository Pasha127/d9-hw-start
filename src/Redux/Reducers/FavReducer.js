import { FAV_MINUS, FAV_PLUS } from "../Actions/Actions";

const initialState = {    
    favs: [],  
  };
const FavReducer = (state = initialState, action) => {
    switch (action.type) {                
      case FAV_PLUS:          
          return {
            ...state,
            favs: [...state.favs.favs, action.payload]
          };
      case FAV_MINUS:
          return {
            ...state,
            favs: state.favs.favs.filter((job) => job._id !== action.payload._id)
          };
        
      default:
        return state; 
    }
  };
export default FavReducer;