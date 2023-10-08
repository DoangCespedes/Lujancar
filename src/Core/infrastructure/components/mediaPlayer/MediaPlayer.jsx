import ReactPlayer from 'react-player';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const MediaPlayer = () => {
  return (
    <>
        <div className='container'>
            <ReactPlayer url='https://youtube.com/shorts/A3dNRt0BRKg?feature=share'/>
        
        
            <ReactPlayer url='https://youtube.com/shorts/LfVRboQugHM?feature=share'/>
        
        
            <ReactPlayer url='https://www.youtube.com/watch?v=WM8bTdBs-cw'/>
        </div>
        
    </>
  )
}

export default MediaPlayer