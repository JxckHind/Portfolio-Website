import React from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_juoj7kb', 'template_5pxwunx', form.current, 'OD5aUfae48nZ6-uE_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();

      // add message saying form has been submitted successfully
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required></input>
          <input type='email' name='email' placeholder='Your Email' required></input>
          <input type='tel' name='tel' placeholder='Your Phone Number'></input>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact