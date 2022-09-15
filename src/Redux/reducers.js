const initialState = {    
    query: "" ,
    jobs: [],  
    favs: [],  
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
      case "FAV+":          
          return {
            ...state,
            favs: [...state.favs, action.payload]
          };
      case "FAV-":
          return {
            ...state,
            favs: state.favs.filter((job) => job._id !== action.payload._id)
          };
        
      default:
        return state; 
    }
  };
export default mainReducer;