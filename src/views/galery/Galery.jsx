
import MediaPlayer from '../../Core/infrastructure/components/mediaPlayer/MediaPlayer';
import { ImagesGalery1 } from '../../Core/infrastructure/components/galeries/galery_1/ImagesGalery1'
import { ImagesGalery2 } from '../../Core/infrastructure/components/galeries/galery_2/ImagesGalery2';
import { SliderAB } from '../../Core/infrastructure/components/carousels/sliderAB/SliderAB';
import { SliderAB_1 } from '../../Core/infrastructure/components/carousels/SliderAB_1/SliderAB_1';
import { SliderAB_2 } from '../../Core/infrastructure/components/carousels/SliderAB_2/SliderAB_2';

export const Galery = () => {
  return (
    <>

      <div className="row text-white text-center bg-dark">
        <div className="block col-12 bg-dark align-middle">
          <h2 className='mt-4'>At Lujancar Dent Shop</h2>
          <div className='container mt-2'>
            <p>We are proud to showcase our work. Our image gallery reflects the commitment and skill we put into each hail damage repair. Check out our before and after projects to see how we have restored the original beauty to numerous vehicles. Every dent tells a success story, and we are here to share those stories with you.</p>
          </div>
        </div>
      </div>
      {/* -----------------------------------------  SLIDER ----------------------------------------------- */}
      <div className="row">
        <div className="col-md-4">
            <div className="row">
                <SliderAB/>    
            </div>
        </div>
        <div className="col-md-4">
            <div className="row">
                <SliderAB_2/>
            </div>
        </div>
        <div className="col-md-4">
            <div className="row">
                <SliderAB_1/>    
            </div>
        </div>
      </div>



      {/* -----------------------------------------  SLIDER ----------------------------------------------- */}

      <div className="row text-white text-center bg-dark">
        <div className="block col-12 bg-dark align-middle">
          <div className='container mt-4'>
            <p>Our passion is your satisfaction. At Lujancar Dent Shop, each image in our gallery tells the story of a vehicle that has recovered its original splendor. From the most minor hail damage to the most difficult challenges, our repair experts work magic. Take a look at our images and discover how we transform each dent into a testimony of success.</p>
          </div>
        </div>
      </div>
      <div className='container bg-dark'>
        <ImagesGalery1/>
      </div>
      <MediaPlayer/>
      
      <div className='container bg-dark'>
        <ImagesGalery2/>
      </div>
    </>
  )
}


