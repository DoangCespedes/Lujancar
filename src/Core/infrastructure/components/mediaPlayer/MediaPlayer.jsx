import ReactPlayer from 'react-player';
import { Carousel } from 'react-bootstrap';
import './Style.css'


const MediaPlayer = () => {
  return (
    <>
        <div className='container bg-dark text-center text-white'>
          <h2>
              Servicios
          </h2>
            <div className=" row text-black justify-content-around mt-4">
              <p>after</p>
              <ReactPlayer url='https://youtube.com/shorts/A3dNRt0BRKg?feature=share'/>
              <p>after</p>
              <ReactPlayer url='https://youtube.com/shorts/LfVRboQugHM?feature=share'/>
            </div>
          
        </div>
        
        
    </>
  )
}

export default MediaPlayer