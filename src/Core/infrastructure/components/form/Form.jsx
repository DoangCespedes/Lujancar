import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Alert from 'react-bootstrap/Alert';
import './Style.css'

export const Form = () => {
    const form = useRef();
    const [error, setError] = useState(false)

    const validationForm = (e) =>{
      if (e.target.name.user_name === null || e.target.name.user_name === "") {
        setError(true)
      }
    }

    const sendEmail = (e) => {
      e.preventDefault();

      validationForm()
  
      emailjs.sendForm('service_yjetuzm', 'template_f55vepc', form.current, 'Sv1FponG5Anp4MxYU')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset() //de esta manera limpiamos el formulario 
    };
  return (
    <>
      <div className='contenedor'>
        <form ref={form} onSubmit={sendEmail} className='field'>

          <label>Name</label>
          <input type="text" name="user_name"/>
          {error === true && 
            <div className='alerta'>
              <Alert variant="danger">
                This is a alert—check it out!
              </Alert>
            </div>
          }

          <label>Number</label>
          <input type="number" name="phone_number" />
          {error === true && 
            <div className='alerta'>
              <Alert variant="danger">
                This is a alert—check it out!
              </Alert>
            </div>
          }

          <label>Email</label>
          <input type="email" name="user_email" />
          {error === true && 
            <div className='alerta'>
              <Alert variant="danger">
                This is a alert—check it out!
              </Alert>
            </div>
          }

          <label>Vehicle make</label>
          <input type="text" name="make" />
          {error === true && 
            <div className='alerta'>
              <Alert variant="danger">
                This is a alert—check it out!
              </Alert>
            </div>
          }

          <label>Vehicle model</label>
          <input type="text" name="model" />
          {error === true && 
            <div className='alerta'>
              <Alert variant="danger">
                This is a alert—check it out!
              </Alert>
            </div>
          }

          <label>How did you hear of us?</label>
          <input type="text" name="social" />
          {error === true && 
            <div className='alerta'>
              <Alert variant="danger">
                This is a alert—check it out!
              </Alert>
            </div>
          }

          <label>Question?</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </>
  )
}
