import { configureStore, combineReducers } from "@reduxjs/toolkit";
import FavReducer from "../Reducers/FavReducer";
import JobsReducer from "../Reducers/JobsReducer";



const bigReducer = combineReducers({
  search: JobsReducer,
  favs: FavReducer,
  });
const store = configureStore({    
    reducer: bigReducer,
  });
  
  export default store;

