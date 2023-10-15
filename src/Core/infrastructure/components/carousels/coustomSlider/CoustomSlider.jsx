
import a from '../../../../../assets/galery_3/1.jpg';
import b from '../../../../../assets/galery_3/2.jpg';
import c from '../../../../../assets/galery_3/3.jpg';
import d from '../../../../../assets/galery_2/a.jpg';
import e from '../../../../../assets/galery_1/1.jpg';
import f from '../../../../../assets/galery_1/6.jpg';
import g from '../../../../../assets/galery_1/3.jpg';
import h from '../../../../../assets/galery_1/4.jpg';


import './Style.css'

import React from 'react'

const CoustomSlider = () => {
  return (
    <>
      <div className='slider'>
        <img
              className="d-block w-100"
              src={e}
              alt="First slide"
            />
      <img
            className="d-block w-100"
            src={a}
            alt="First slide"
          />
      <img
            className="d-block w-100"
            src={d}
            alt="First slide"
          />
      <img
            className="d-block w-100"
            src={b}
            alt="First slide"
          />
      <img
            className="d-block w-100"
            src={f}
            alt="First slide"
          />
      <img
            className="d-block w-100"
            src={g}
            alt="First slide"
          />
      <img
            className="d-block w-100"
            src={h}
            alt="First slide"
          />
      <img
            className="d-block w-100"
            src={c}
            alt="First slide"
          />
      </div>
    </>
  )
}

export default CoustomSlider