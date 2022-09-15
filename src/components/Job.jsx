import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"; 
const mapStateToProps = state => {
  return {
    query: state.query,
    jobs: state.jobs,
    favs: state.fav    
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setQuery: query => {
      dispatch({
        type: "SEARCH",
        payload: query,
      });
    },
    setJobs: jobs =>{
      dispatch({
        type:"JOBS",
        payload: jobs
      })
    },
    setFav: fav =>{
      dispatch({
        type:"FAV+",
        payload: fav
      })
    },
    setDelFav: fav =>{
      dispatch({
        type:"FAV-",
        payload: fav
      })
    }
  };
};


const Job = (props) => (
  <Row
    className="mx-0 mt-3 p-3"
    style={{ border: '1px solid #00000033', borderRadius: 4 }}
  >
    <Col xs={3}>
      <Link to={`/${props.data.company_name}`}>{props.data.company_name}</Link>
    </Col>
    <Col xs={8}>
      <a href={props.data.url} target="_blank" rel="noreferrer">
        {props.data.title}
      </a>
    </Col>
    {!props.isCompany? <Col onClick={() =>{
      props.button? props.setFav(props.data):props.setDelFav(props.data)}} xs={1}>
      {props.button? <p className='favButton'><span>⭐</span></p>:<p className='favButton'><span>❌</span></p>}
    </Col>:<Col></Col>}

  </Row>
)

export default connect(mapStateToProps, mapDispatchToProps)(Job)
