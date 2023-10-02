
import a from '../../../../assets/1.jpg';
import c from '../../../../assets/2.jpg';
import i from '../../../../assets/3.jpg';
import j from '../../../../assets/4.jpg';

import './Style.css'

import React from 'react'

const CoustomSlider = () => {
  return (
    <>
      <div className='slider'>
      <img
            className="d-block w-100"
            src={j}
            alt="First slide"
          />
      <img
            className="d-block w-100"
            src={i}
            alt="First slide"
          />
      <img
            className="d-block w-100"
            src={c}
            alt="First slide"
          />
      <img
            className="d-block w-100"
            src={a}
            alt="First slide"
          />
      </div>
    </>
  )
}

export default CoustomSlider