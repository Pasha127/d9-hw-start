import { configureStore, combineReducers } from "@reduxjs/toolkit";
import mainReducer from "../Reducers/Reducers";

const bigReducer = combineReducers({
  search: searchReducer,
  favs:jobsReducer,
  favPlus: plusFavReducer,
  favMinus: minusFavReducer
  });
const store = configureStore({    
    reducer: bigReducer,
  });
  
  export default store;

