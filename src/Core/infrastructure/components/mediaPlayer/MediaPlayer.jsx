import ReactPlayer from 'react-player';
import './Style.css'


const MediaPlayer = () => {
  return (
    <>
      
        <div className='container bg-dark text-center text-white'>
          <h2>
            Repairs Captured on Video
          </h2>
          <p>Explore our videos showcasing remarkable improvements in our valued customers' vehicles. Witness the transformation they undergo, seeing both the previous state and the end result. We also invite you to follow us on our YouTube channel to stay updated on our latest updates.</p>
            <div className=" row text-black justify-content-around mt-4">
              
              <p>AFTER</p>
              <ReactPlayer url='https://youtu.be/lNP1w3Nkn3c'/>
              <p>BEFORE</p>
              <ReactPlayer url='https://youtu.be/l7cGsJqQEXQ'/>
              <p>AFTER</p>
              <ReactPlayer url='https://youtu.be/0CMlEbo55aA'/>
              <p>BEFORE</p>
              <ReactPlayer url='https://youtu.be/dwpymxWgT_I'/>
              <p>AFTER</p>
              <ReactPlayer url='https://youtube.com/shorts/A3dNRt0BRKg?feature=share'/>
              <p>BEFORE</p>
              <ReactPlayer url='https://youtube.com/shorts/LfVRboQugHM?feature=share'/>
            </div>
          
        </div>
        
        
    </>
  )
}

export default MediaPlayer