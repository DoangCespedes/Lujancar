import a from '../../../../../assets/galery_2/a.jpg';
import b from '../../../../../assets/galery_2/b.jpg';
import c from '../../../../../assets/galery_2/c.jpg';
import d from '../../../../../assets/galery_2/d.jpg';
import e from '../../../../../assets/galery_2/e.jpg';
import f from '../../../../../assets/galery_2/f.jpg';


import './Style.css'

export const ImagesGalery2 = () => {
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
