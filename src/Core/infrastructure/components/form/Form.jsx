import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Alert from 'react-bootstrap/Alert';
import './Style.css'
import { UseForm } from '../../hooks/UseForm';

export const Form = () => {

  const {formState, onInputChange} = UseForm({
      user_name:"name",
      phone_number:"123456",
      user_email:"ejm@google.com"
  
    })
    const {user_name, phone_number, user_email} = formState
    const [error, setError] = useState(false)

    const validationForm = () =>{
      
      // console.log(e.target.name)

      if (formState === null || formState === "") {
        setError(true)
      }
    }

    // inputs.forEach((input) => {
    //   input.addEventListener('keyup', validationForm)
    //   input.addEventListener('blur', validationForm)
    // })

    const form = useRef();
    
      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_yjetuzm', 'template_f55vepc', form.current, 'Sv1FponG5Anp4MxYU')
          .then((result) => {
              console.log("RUESULTADO EXITOSO",result.text);
          }, (error) => {
            
            console.log("ERROR",error.text);
          });
          validationForm()
          e.target.reset() //de esta manera limpiamos el formulario 
      };
   
  return (
    <>
      <div className='contenedor'>
        <form ref={form} onSubmit={sendEmail} className='field'>

          <label>Name</label>
          <input type="text" name="user_name" value={user_name} onChange={onInputChange} required/>
          {error === true && 
            <div className='alerta'>
              <Alert variant="danger">
                This is a alert—check it out!
              </Alert>
            </div>
          }

          <label>Number</label>
          <input type="number" name="phone_number" value={phone_number} onChange={onInputChange} required/>
          {error === true && 
            <div className='alerta'>
              <Alert variant="danger">
                This is a alert—check it out!
              </Alert>
            </div>
          }

          <label>Email</label>
          <input type="email" name="user_email" value={user_email} onChange={onInputChange} required/>
          {/* {error === true && 
            <div className='alerta'>
              <Alert variant="danger">
                This is a alert—check it out!
              </Alert>
            </div>
          } */}

          <label>Vehicle make</label>
          <input type="text" name="make" 
          // value={make}
          />
          {/* {error === true && 
            <div className='alerta'>
              <Alert variant="danger">
                This is a alert—check it out!
              </Alert>
            </div>
          } */}

          <label>Vehicle model</label>
          <input type="text" name="model"
          //  value={model}
          />
          {/* {error === true && 
            <div className='alerta'>
              <Alert variant="danger">
                This is a alert—check it out!
              </Alert>
            </div>
          } */}

          {/* <label>How did you hear of us?</label>
          <input type="text" name="social" />
          {error === true && 
            <div className='alerta'>
              <Alert variant="danger">
                This is a alert—check it out!
              </Alert>
            </div>
          } */}

        <label>How did you hear about us?</label>
          <select id="referrer" name="social">
            <option value="">(select one)</option>
            <option value="1">Instagram</option>
            <option value="2">Facebook</option>
            <option value="3">A Friend</option>
            <option value="4">Other</option>
          </select>
        

          <label>Question?</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </>
  )
}
