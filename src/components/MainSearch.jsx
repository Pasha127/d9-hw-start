import { Container, Row, Col, Form,Button } from 'react-bootstrap'
import Job from './Job'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { handleSubmitWithThunk, setQuery } from '../Redux/Actions/Actions';
import Loader from './Loader';

const mapStateToProps = state => {
  return {
    query: state.search.query,
    jobs: state.search.jobs,
    favs: state.favs.favs,
    load: state.search.load
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setQueryForD: query => {
      dispatch(setQuery(query));
    },
    handleSub: query => { 
      dispatch( handleSubmitWithThunk(query));
    }   
  };  
};

const MainSearch = (props) => {
  
  

  const handleChange = (e) => {
    props.setQueryForD(e.target.value)
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("0 consider",props.query);
    props.handleSub(props.query);
}
  

  return (
    <>
    {props.load && <Loader></Loader>}
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <div className='d-flex flex-row align-items-center'>
          <h1 className='mr-auto'>Remote Jobs Search</h1>
          <Link to="/favs"><Button>See Favorites</Button></Link> 
          </div>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={props.query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {props.jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} isCompany={false} button={true} />
          ))}
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MainSearch)
