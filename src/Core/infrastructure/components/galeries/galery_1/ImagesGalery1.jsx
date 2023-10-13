import a from '../../../../../assets/galery_1/1.jpg';
import b from '../../../../../assets/galery_1/2.jpg';
import c from '../../../../../assets/galery_1/3.jpg';
import d from '../../../../../assets/galery_1/4.jpg';
import e from '../../../../../assets/galery_1/5.jpg';
import f from '../../../../../assets/galery_1/6.jpg';


import './Style.css'

export const ImagesGalery1 = () => {
  return (
    <div>
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
      <img
            
            src={e}
            alt="First slide"
          />
      <img
            
            src={f}
            alt="First slide"
          />
      
        </section>
    </div>
  )
}
