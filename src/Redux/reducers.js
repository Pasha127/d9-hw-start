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
        /* case "EXAMPLE":
          return {
            ...state,
            cart: {
              ...state.cart,
              //   content: state.cart.content.concat(action.payload),
              content: [...state.cart.content, action.payload],
            },
            
          }; */
        
      default:
        return state; 
    }
  };
export default mainReducer;