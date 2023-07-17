import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <div className="contact-text-zone">
            <div className="topPart">
              <h1>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                  idx={15}
                />
              </h1>
              <p>
                I am interested in freelance opportunities - especially on
                ambitious or large projects. However, if&nbsp;you have any other
                requests or questions, don't hesitate to contact me using below
                form either.
              </p>
            </div>

            <div className="contactInfo">
              <h2 className="contactInfo__title">Contact Information</h2>
              <div className="contactInfo__link">
                <FontAwesomeIcon icon={faPhone} color="#e7ab0a" />
                <p className="text-[5vw] md:text-2xl">+212 770032613</p>
              </div>
              <div className="contactInfo__link">
                <FontAwesomeIcon icon={faEnvelope} color="#e7ab0a" />
                <p className="text-[5vw] md:text-2xl">
                  slimaniabdellah.as@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
