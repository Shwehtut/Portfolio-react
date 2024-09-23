/* eslint-disable no-unused-vars */
import React from 'react'
import './Contact.css'
import themepattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import locatiion_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


const Contact = () => {


  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "4ff35b20-2842-468d-b992-702900b94c5f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
          <h1>Contact </h1>
          <img src={themepattern} alt="" />
        </div>
        <div className="contact-section">
          <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I am currently available to take on new project, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.</p>
            <div className="contact-details">
              <div className="contact-detail">
                  <img src={mail_icon} alt="" /> <p>yhtet5066@gmail.com</p>
              </div>
              <div className="contact-detail">
                <img src={locatiion_icon} alt="" /> <p>Hlaingthaya, Yangon</p>
              </div>
              <div className="contact-detail">
                <img src={call_icon} alt="" /> <p>09-780806874</p>
              </div>
            </div>
          </div>
        
          <form onSubmit={onSubmit} action=""className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name'/>
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email'/>
            <label htmlFor="">Write your message here</label>
            <textarea name="message" placeholder='Message' rows={8} ></textarea>
            <button type='submit' className='contact-submit'>Submit Now</button>
          </form>
         
        </div>
    </div>
  )
}

export default Contact