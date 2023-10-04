import React from 'react'
import { Services } from '../../Core/infrastructure/components/sections/services/services'
import { Slider } from '../../Core/infrastructure/components/carousels/slider/Slider'
import { Footer } from '../../Core/infrastructure/components/footer/Footer'

export const MyWork = () => {
  return (
    <div>
      <Slider/>
      <Services/>
      <Footer/>
    </div>
  )
}
