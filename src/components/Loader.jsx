import { Spinner} from 'react-bootstrap'
import { connect } from "react-redux";

import { setLoading} from '../Redux/Actions/Actions';


const mapStateToProps = state => {
  return {    
    isLoaded: state.load.loaded
  };
};

const mapDispatchToProps = dispatch => {
  return {
   setLoad: loadBool => {
      dispatch(setLoading(loadBool));
    }
  };  
};

const Loader = (props) => {  
 
  return (
    <>
    {/* {console.log(props)} */}
    {props.isloaded && <div className='loadContainer'>
        <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>
    </div>}
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Loader)
