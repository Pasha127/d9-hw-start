import { LOADING } from "../Actions/Actions";
import { initialState } from "../Store/Store";

const LoadReducer = (state = initialState.search, action) => {
    switch (action.type) {
      case LOADING:
        return {
          ...state,
          loading: action.payload          
        };        
      
      default:
        return state; 
    }
  };
export default LoadReducer;