import { configureStore, combineReducers } from "@reduxjs/toolkit";
import FavReducer from "../Reducers/FavReducer";
import JobsReducer from "../Reducers/JobsReducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import {encryptTransform} from 'redux-persist-transform-encrypt';
import LoadReducer from "../Reducers/LoadReducer";


const persistConfig = {
  key: "root", 
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_ENCRYPTED_KEY,
      onError: function (error) {
        console.log(error)
      },
    })
  ]
}


export const initialState = {
  search: {jobs:[],query:"", load: false },
  favs:{favs:[]},
 /*  load:{load:false} */
} 

const bigReducer = combineReducers({
  search: JobsReducer,
  favs: FavReducer,
  load: LoadReducer
  });
  
  const persistedReducer = persistReducer(persistConfig, bigReducer)
  const store = configureStore({    
    reducer: persistedReducer,
  });
  const persistor = persistStore(store);
  export { store, persistor };
  