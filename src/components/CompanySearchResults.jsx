import { useEffect } from 'react'
import { Container, Row, Col,Button } from 'react-bootstrap'
import Job from './Job'
import { useParams } from 'react-router-dom'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { setJobs } from '../Redux/Actions/Actions';
import Loader from './Loader';

const mapStateToProps = state => {
  return {
    query: state.search.query,
    jobs: state.search.jobs
    
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setJobs: jobs =>{
      dispatch(setJobs(jobs))
    }
  };
};

const CompanySearchResults = (props) => {
/*   const [jobs, setJobs] = useState([])*/
  const params = useParams() 

  const baseEndpoint = 'https://strive-jobs-api.herokuapp.com/jobs?company='

  useEffect(() => {
    getJobs()
  }, [])

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.companyName)
      if (response.ok) {
        const { data } = await response.json()
        props.setJobs(data)
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    <Loader></Loader>
    <Container>
      <Row>
        <Col>
        <div className='d-flex flex-row align-items-center'>
          <h1 className='mr-auto'>Selected Company</h1>
          <Link to="/"><Button>Go Home</Button></Link> 
          </div>
          {props.jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} isCompany={true} />
          ))}
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanySearchResults)
