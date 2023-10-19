import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Style.css'

export const Form = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
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
          <div className='contenedor'>
            <input type="text" name="user_name" />
          </div>
          <label>Number</label>
          <input type="number" name="phone_number" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Vehicle make</label>
          <input type="text" name="make" />
          <label>Vehicle model</label>
          <input type="text" name="model" />
          <label>How did you hear of us?</label>
          <input type="text" name="social" />
          <label>Question?</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </>
  )
}
