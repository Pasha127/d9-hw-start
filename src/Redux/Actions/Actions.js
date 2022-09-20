export const SEARCH = "SEARCH";
export const JOBS = "JOBS";
export const FAV_PLUS = "FAV+";
export const FAV_MINUS = "FAV-";

export const setQuery = query =>({
    type: SEARCH,
    payload: query
});
export const setJobs = jobs =>({
    type:"JOBS",
    payload: jobs
});
export const setFav = fav =>({
    type:"FAV+",
    payload: fav
  });
export const setDelFav = fav =>({
    type:"FAV-",
    payload: fav
  });
export const handleSubmitWithThunk = (q) => {
    const baseEndpoint = 'https://strive-jobs-api.herokuapp.com/jobs?search='
    console.log("1 think")
    return async (dispatch, getState)=>{
    try {
        console.log("2 thank",baseEndpoint,q)
      const response = await fetch(baseEndpoint + q + '&limit=40')
      if (response.ok) {
        const { data } = await response.json()
        dispatch(setJobs(data))
       // console.log(data);
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
      console.log(error)
    }finally{console.log("3 thunk")}
  }}
