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
    };
  return (
    <>
        <form ref={form} onSubmit={sendEmail} className='field'>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Number</label>
          <input type="text" name="phone_number" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Vehicle make</label>
          <textarea name="message" />
          <label>Vehicle model</label>
          <textarea name="message" />
          <label>How did you hear of us?</label>
          <textarea name="message" />
          <label>Question?</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
    </>
  )
}
