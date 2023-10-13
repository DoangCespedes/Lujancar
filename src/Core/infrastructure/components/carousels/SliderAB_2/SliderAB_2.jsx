
import a from '../../../../../assets/after_before_2/2.jpg';
import b from '../../../../../assets/after_before_2/1.jpg';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import './Style.css'

export const SliderAB_2 = () => {
  return (
    <>
        <Carousel fade interval={1500}>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={a}
                alt="First slide"
            />
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={b}
                alt="First slide"
            />
            </Carousel.Item>
            
        </Carousel>
    </>
  )
}
