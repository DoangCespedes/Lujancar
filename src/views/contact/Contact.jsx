 
import { Form } from '../../Core/infrastructure/components/form/Form'
import { MapView } from '../../Core/infrastructure/components/mapView/MapView';
import {FiPhoneCall} from "react-icons/fi";
import './Style.css'

export const Contact = () => {
  return (
    <>
      <div className='bg-dark text-white text-center'>
        <div className="container">
          <div className="row">
            <h2 className='mt-4'>Contact us</h2>
          <p>
            We are here to take care of your hail damage repair needs.<br/>
            You can find us at 127 Roy Davis Rd,Elgin, TX 78621 Suite 4-D, during our business hours:
          </p>
            <div className="col-md-6">
                <div className="row">
                  <h4>Monday to Friday: 9am - 6pm</h4>  
                </div>
            </div>

            <div className="col-md-6">
                <div className="row">
                <h4>Saturdays: 9am - 2pm</h4>
                </div>
            </div>
          </div>
        </div>
        
        <div className="container">
          <MapView/>
        </div>  

        <div className="mt-4">
          <p>If you prefer to communicate by phone, you can call us at <br/>
          <span><FiPhoneCall/></span> +1.512.782.8523 <br/>
          <span><FiPhoneCall/></span> +1.737.587.4010 
          </p>
        </div>
        <div className='container mt-4'>
          <h3>or send us an email</h3>
        </div>
        <div className='form_container'>
          <Form/>
        </div>

        <div className="container">
          <p>We are happy to answer your questions and help you schedule an appointment.Your vehicle is in good hands with Lujancar Dent Shop.</p>
        </div>
      </div>

    </>
  )
}
