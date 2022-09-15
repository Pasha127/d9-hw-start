import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Job from './Job'
import { useParams } from 'react-router-dom'
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    query: state.query,
    jobs: state.jobs
    
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setJobs: jobs =>{
      dispatch({
        type:"JOBS",
        payload: jobs
      })
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
    <Container>
      <Row>
        <Col>
          {props.jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanySearchResults)
