import "./ContactPage.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import selfie from "../../images/self.jpeg";
import github from "../../images/github-mark.png";
import insta from "../../images/insta.png";
import linkedin from "../../images/linkedin.png";


export default function ContactPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q3g5u8k', 'template_3e0qizb', form.current, '3xcd8DobDNhZg9R9J')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
    <section className="profile-card">
      <img src={selfie} alt="selfie with dog" className="selfie" />
      <div className="socials">
        <a className="link3" href="https://github.com/kxiside"><img src={github}></img></a>
        <a className="link3" href="https://www.linkedin.com/in/kxiside/"><img src={linkedin}></img></a>
        <a className="link3" href="https://www.instagram.com/kxiside/"><img src={insta}></img></a>
        </div>
    </section>
    <section className="contact">
      <h1 className="contact-title"></h1>
      <form className="contact-form" ref={form} onSubmit={sendEmail} >
        <input className="contact-input" type="text" placeholder="Name" name="user_name"/>
        <input className="contact-input" type="email" placeholder="Email" name="user_email" />
        <textarea className="contact-input" placeholder="Message" name="message" rows={6} />
        <button className="contact-input" type="submit" value="Send">Submit</button>
      </form>
    </section>
    </>
  );
}
