import { configureStore, combineReducers } from "@reduxjs/toolkit";
import FavReducer from "../Reducers/FavReducer";
import JobsReducer from "../Reducers/JobsReducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "root", 
  storage,
}

export const initialState = {
  search: {jobs:[],query:"" },
  favs:{favs:[]}
} 

const bigReducer = combineReducers({
  search: JobsReducer,
  favs: FavReducer,
  });
  
  const persistedReducer = persistReducer(persistConfig, bigReducer)
  const store = configureStore({    
    reducer: persistedReducer,
  });
  const persistor = persistStore(store);
  export { store, persistor };
  