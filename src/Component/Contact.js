import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Contact.css";
import { init, send } from 'emailjs-com';
init('user_AtU1Z9dIYmIQfcJyncoZU');

const Contact = () => {

  const [contactNumber, setContactNumber] = useState('000000')
  const [sendSucceeded, setSendSucceeded] = useState(false);
  const [sendFailed, setSendFailed] = useState(false);
  const generateContactNumber = () => {
    const numStr = '000000' + (Math.random() * 1000000 | 0);
    setContactNumber(numStr.substring(numStr.length - 6))
  }

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    const form = document.querySelector('#contact-form')
    generateContactNumber();
    send('service_os3l1l8', 'template_17zc00x', data)
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        setSendSucceeded(true)
        setTimeout(() => {
         setSendSucceeded(false)
          }, 5000)
          form.reset()
          

      }, function (error) {
        console.log('FAILED...', error);
        
        setSendFailed(true)
        setTimeout(() => {
          setSendFailed(false)
        }, 5000)
      })
  }

  const message = watch('message') || "";
  const messageCharsLeft = 1500 - message.length;

  return (

    <body>

      <div className="Contact" >
        <h1>Contact me</h1>
        <p className="comment">Please talk me any question if you have</p>
        {sendSucceeded && <p className="status-message success">Thank you for your message!!</p>}
        {sendFailed && <p className="status-message failure">Failed to send message! Please try again  </p>}
        
      </div>

      <form id='contact-form' onSubmit={handleSubmit(onSubmit)} >
        <input type='hidden' name='contact_number' value={contactNumber} />

        {errors.user_name && errors.user_name.type === "required" && (
          <div role="alert">Name is required<br /></div>)}
        <input type='text' name='user_name' placeholder='Name' maxLength='30'
          aria-invalid={errors.user_name ? "true" : "false"}{...register("user_name", ({ required: true }))} />
        <br />

        {errors.user_email && errors.user_email.type === "required" && (
          <div role="alert">Email is required<br /></div>)}
        <input type='email' name='user_email' placeholder='Email'{...register("user_email", ({ required: true }))} />
        <br />

        {errors.message && errors.message.type === "required" && (
          <div role="alert">Message is required<br /></div>)}
        <textarea name='message'{...register("message", ({ required: true }))} placeholder='Message' maxLength='1500'/>
        {/* <p className='message-chars-left'>{messageCharsLeft}</p> */}
        <br />

        <input type='submit' className="submit" value='Send' />
      </form>

    </body>
  )
}

export default Contact

