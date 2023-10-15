import a from '../../../../../assets/galery_3/1.jpg';
import b from '../../../../../assets/galery_3/2.jpg';
import c from '../../../../../assets/galery_3/3.jpg';
import d from '../../../../../assets/galery_3/4.jpg';


import './Style.css'

export const ImagesGalery3 = () => {
  return (
    <div className='container'>
        <section>
        <img
            
            src={a}
            alt="First slide"
          />
        <img
            
            src={b}
            alt="First slide"
          />
       <img
            
            src={c}
            alt="First slide"
          />
      <img
            
            src={d}
            alt="First slide"
          />
      
        </section>
    </div>
  )
}
