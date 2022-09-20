import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"; 
import { setQuery } from '../Redux/Actions/Actions.js';

import { setJobs } from '../Redux/Actions/Actions.js';
import { setFav} from '../Redux/Actions/Actions.js';
import { setDelFav } from '../Redux/Actions/Actions.js';
const mapStateToProps = state => {
  return {
    query: state.search.query,
    jobs: state.search.jobs,
    favs: state.favs.favs    
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setQuery: query => {
      dispatch(setQuery(query));
    },
    setJobs: jobs =>{
      dispatch(setJobs(jobs))
    },
    setFav: fav =>{
      dispatch(setFav(fav))
    },
    setDelFav: fav =>{
      dispatch(setDelFav(fav))
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
