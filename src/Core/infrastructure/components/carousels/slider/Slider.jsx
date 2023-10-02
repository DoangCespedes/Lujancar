import a from '../../../../../assets/1.jpg';
import c from '../../../../../assets/2.jpg';
import i from '../../../../../assets/3.jpg';
import j from '../../../../../assets/4.jpg';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import './Style.css'

export const Slider = () => {
  return (
    <>
        <div className='containerr'>
            <Carousel fade>
                <Carousel.Item>
                <img
                    className="img d-block w-100"
                    src={a}
                    alt="First slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="img d-block w-100"
                    src={c}
                    alt="First slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="img d-block w-100"
                    src={i}
                    alt="First slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="img d-block w-100"
                    src={j}
                    alt="First slide"
                />
                </Carousel.Item>
            </Carousel>
        </div>
    </>
  )
}
