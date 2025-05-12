import React, { useRef } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_bh3qd97', 'template_ajmjywb', form.current, 'zqj8w0KPXwb_Chf_y')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent !');
            }, (error) => {
                console.log(error.text);
            });
    };

  return (
    <section id="contactPage">
        <div id="contact">
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className='name' placeholder='Your Name'  name='your_name' required/>
                <input type="email" className='email' placeholder='Your Email' name='your_email' required/>
                <textarea className='msg' name="message" rows="5" placeholder='Your Message' required></textarea>
                <button type="submit" value="Send" className='submitBtn'>Submit</button>
            </form>
        </div>
    </section>
  )
}

export default Contact;