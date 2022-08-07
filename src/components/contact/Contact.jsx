import React, {useRef, useState} from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import emailjs from 'emailjs-com'

const Contact = () => {
const form = useRef();
const [done, setDone] = useState(false)


const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_uepaghw', 'template_a0zwu09', form.current, 'YRS6_UH0J2pBikz0a')
    .then(
      (result) => {
        console.log(result.text);
        setDone(true);
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
};

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <article className="contact__options">
          <div className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>test@test.com</h5>
            <a href="mailto:text@text.com" target="_blank" rel="noreferrer">Send a message</a>
          </div>
        
          <div className="contact__option">
            <RiMessengerLine  className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>test@test.com</h5>
            <a href="Https://m.me/rajeev.hansada" target="_blank" rel="noreferrer">Send a message</a>
          </div>
        
          <div className="contact__option">
            <MdOutlineEmail  className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>7766021895</h5>
            <a href="https://api.whatsapp.com/send?phone=7766021895" target="_blank" rel="noreferrer">Send a message</a>
          </div>
        </article>

        {/* ========END CONTACT OPTION========== */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name" required/>
          <input type="email" name="user_email" className="user" placeholder="Email" required/>
          <textarea name="message" rows='7' className="user" placeholder="Message" required/>
          <button type="submit" value="Send" className="btn btn-primary">Send message</button>
          <span>{done && "Thanks for Contacting me"}</span>

        </form>
      </div>
    </section>
  )
}

export default Contact