import a from '../../../../assets/1.jpg';
import c from '../../../../assets/2.jpg';
import i from '../../../../assets/3.jpg';
import j from '../../../../assets/4.jpg';

import './Style.css'

export const ImagesGalery = () => {
  return (
    <div>
        <section>
        <img
            
            src={j}
            alt="First slide"
          />
       <img
            
            src={i}
            alt="First slide"
          />
      <img
            
            src={c}
            alt="First slide"
          />
      <img
            
            src={a}
            alt="First slide"
          />
        </section>
    </div>
  )
}
