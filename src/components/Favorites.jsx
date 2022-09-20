import { Container, Row, Col, Button } from 'react-bootstrap'
import Job from './Job'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { setQuery } from '../Redux/Actions/Actions';
import { setJobs } from '../Redux/Actions/Actions';
import Loader from './Loader';

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
    }
  };


const Favorites = (props) => {
  return (
    <>
    <Loader></Loader>
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
        <div className='d-flex flex-row align-items-center'>
          <h1 className='mr-auto'>Remote Jobs Search</h1>
          <Link to="/"><Button>Go Home</Button></Link> 
          </div>
        </Col>        
        <Col xs={10} className="mx-auto mb-5">
          {props.favs.map((jobData) => (
            <Job key={jobData._id} data={jobData} isCompany={false} button={false}/>
          ))}
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)
