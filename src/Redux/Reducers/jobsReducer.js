import { JOBS, SEARCH } from "../Actions/Actions";
const initialState = {    
    query: "" ,
    jobs: [],        
  };
const JobsReducer = (state = initialState, action) => {
    switch (action.type) {
      case SEARCH:
        return {
          ...state,
          query: action.payload          
        };        
      case JOBS:
        return {
          ...state,
          jobs: action.payload          
        };                 
        
      default:
        return state; 
    }
  };
export default JobsReducer;