const initialState = {    
    query: "" ,
    jobs: [],  
  };
const mainReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SEARCH":
        return {
          ...state,
          query: action.payload          
        };        
      case "JOBS":
        return {
          ...state,
          jobs: action.payload          
        };           
      case "FAV":
          return {
            ...state,
            favs: action.payload
          };
        
      default:
        return state; 
    }
  };
export default mainReducer;