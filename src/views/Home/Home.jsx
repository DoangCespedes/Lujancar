import React from 'react'
import { Banner } from '../../Core/infrastructure/components/banner/Banner'
import { Services } from '../../Core/infrastructure/components/sections/services/services'
import './Style.css'
import { Advertising } from '../../Core/infrastructure/components/sections/advertising/Advertising'

export const Home = () => {
  return (
    <>
        <Banner/>
      <main className='bg-black'>
        <article className='principal'>
          <div className='container mt-2'>
            <h2>We restore the beauty of your vehicle.</h2>
          </div>
          <p>At Lujancar Auto Hail Repair, we are the reliable solution for all your hail damage issues. Our passion for cars and our commitment to excellence make us the ideal choice for restoring your vehicle's beauty. With years of experience in the industry, our highly trained experts are dedicated to bringing your car back to its original state. Trust us for quality service and outstanding results.</p>
        </article>
        <hr/>
        <div className='section_2'>
          <article className='cards'>  
            <h2>Why choose Lujancar Auto Hail Repair?</h2>
            <p>Our company stands out for quality and attention to detail in every project. When you trust us, you can expect:

              - Hail repair specialists.
              - Use of advanced technology and cutting-edge techniques.
              - Personalized and friendly attention at every step of the process.
              - Results that exceed your expectations.

              Restore your car's beauty with the confidence of being in the hands of true experts.
            </p>
          </article>
          <article className='cards'>
            <h2>Our Quality Promise</h2>
            <p>At Lujancar Auto Hail Repair, our promise is simple yet solid: to restore your car's perfection. We work tirelessly to ensure that every detail is taken care of, from the smallest dents to the largest damages. Our dedication to excellence and commitment to customer satisfaction have made us leaders in the hail repair industry. Trust us to breathe life back into your vehicle and enjoy results that speak for themselves.</p>
          </article>
        </div>
      </main>

      <Services/>

      <Advertising/>

    </>
  )
}
