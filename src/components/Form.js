import "./FormStyles.css"

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  
    function alertbar(){
        toast.success('email sent succesfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0w7ny2l', 'template_4pcx4fo', form.current, 'CDt4mFWUTJgOJMRij')
      .then((result) => {
          alertbar();
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
    return (
    <div className="form" onSubmit={sendEmail}>
        <form ref={form} >
            <label >Your Name</label>
            <input type="text" name="user_name" required/>
            <label >Your Email</label>
            <input type="email" name="user_email" required/>
            <label >Subject</label>
            <input type="text" name="subject"/>
            <label >Message</label>
            <textarea rows="6" placeholder="Type your message here" name="message" required></textarea>
            <button className="btn">Submit</button>
        </form>
        <ToastContainer />
    </div>
  )
}

export default Form