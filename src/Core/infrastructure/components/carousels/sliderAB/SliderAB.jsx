
import a from '../../../../../assets/after_before_1/2.jpg';
import b from '../../../../../assets/after_before_1/1.jpg';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import './Style.css'

export const  SliderAB = () => {
  return (
    <>
        <Carousel fade interval={2000}>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={a}
                alt="First slide"
            />
            <Carousel.Caption>
              <h3>AFTER</h3>
            </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <img
                className="d-block w-100"
                src={b}
                alt="First slide"
            />
            <Carousel.Caption>
              <h3>BEFORE</h3>
            </Carousel.Caption>
            </Carousel.Item>
            
        </Carousel>
    </>
  )
}
