import a from '../../../../../assets/20.png';
import c from '../../../../../assets/21.png';
import i from '../../../../../assets/22.png';
import j from '../../../../../assets/17.png';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import './Style.css'

export const Slider = () => {
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
                src={j}
                alt="First slide"
            />
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={c}
                alt="First slide"
            />
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={i}
                alt="First slide"
            />
            </Carousel.Item>
        </Carousel>
    </>
  )
}
