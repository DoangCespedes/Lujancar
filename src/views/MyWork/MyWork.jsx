import { FiPhoneCall } from "react-icons/fi"
import './Style.css'
import CoustomSlider from "../../Core/infrastructure/components/carousels/coustomSlider/CoustomSlider"
import { NavLink } from "react-router-dom"


export const MyWork = () => {
  return (
    <>
      <div className="bg-dark text-center text-white">
      
      
        <div className="container">
          <div>
            <h2>My Work</h2>
            <p>At Lujancar Dent Shop, we take great pride in offering the highest level of quality and expertise in the world of Paintless Dent Repair. With 11 years of experience in the industry, we've perfected the technique of Paintless Dent Repair to deliver exceptional results.</p>
          </div>
          
          <CoustomSlider/>
            <div>
              <h2>What is Paintless Dent Repair?</h2>
              <p>Paintless Dent Repair is a highly effective method for removing dents and surface damage from your vehicle without the need for repainting. Our highly skilled technicians use specialized tools and precise techniques to restore your vehicle to its original condition, preserving the paint and saving you time and money.</p>
            </div>

            

          <div className="row">
            <div className="col-md-5">
              <div className="row">
                <h2>Our Work Hours</h2>
                <p>We are committed to your convenience. Our work hours are as follows:</p>
                <p>Monday to Friday: 9:00 am - 6:00 pm</p>
                <p>Saturday: 9:00 am - 2:00 pm</p>
                <p>We are here to address your dent repair needs during these hours, ensuring your vehicle receives the attention it deserves when you need it most.</p>
              </div>
            </div>

            <div className="col-md-2">
              <div className="row">
                <br/>
              </div>
            </div>

            <div className="col-md-5">
              <div className="row">
                <h2>Location</h2>
                <p>We are conveniently located in Texas to serve the local community and its surroundings. You can find us at the following address, 127 Roy Davis Rd,Elgin, TX 78621 Suite 4-D.</p>
                <p>If you prefer to communicate by phone, you can call us at <br/>
                <span><FiPhoneCall/></span> +1.512.782.8523 <br/>
                <span><FiPhoneCall/></span> +1.737.587.4010 
                </p>
                <p>Request a free online quote in our contact area <br/><span><button className="contact"><NavLink to='/contact'>contact</NavLink></button> </span></p>
                
              </div>
            </div>
          </div>

          <div>
            <h2>We Work with All Insurances</h2>
            <p>At Lujancar Dent Shop, we understand the importance of peace of mind when it comes to repairing your vehicle. That's why we work with all insurance providers, simplifying the claims process and ensuring your experience with us is hassle-free.
              <br/>
              Our mission is to provide exceptional dent repair service, backed by years of experience and an unwavering commitment to customer satisfaction. Trust Lujancar Dent Shop to restore your vehicle to its former glory.  
              <br/>
              If you have any questions or need to schedule an appointment, please don't hesitate to get in touch with us. We are here to assist you!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
