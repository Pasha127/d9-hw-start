import { Container, Row, Col, Form,Button } from 'react-bootstrap'
import Job from './Job'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { setQuery } from '../Redux/Actions/Actions';

const mapStateToProps = state => {
  return {
    query: state.query,
    jobs: state.jobs,
    favs: state.favs
    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setQuery: query => {
      dispatch(setQuery(query));
    },
    setJobs: jobs =>{
      dispatch({
        type:"JOBS",
        payload: jobs
      })
    }
  };
};

const MainSearch = (props) => {

  const baseEndpoint = 'https://strive-jobs-api.herokuapp.com/jobs?search='

  const handleChange = (e) => {
    props.setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(baseEndpoint + props.query + '&limit=20')
      if (response.ok) {
        const { data } = await response.json()
        props.setJobs(data);
       // console.log(data);
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
      console.log(error)
    }//finally{console.log(props.jobs)}
  }

  return (
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
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MainSearch)
