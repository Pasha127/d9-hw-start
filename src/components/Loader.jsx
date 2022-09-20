import { Spinner} from 'react-bootstrap'

const Loader = () => {  
 
  return (       
     <div className='loadContainer'>
        {console.log("I'm LOADING!")}
        <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>
    </div>    
  )
}

export default Loader
