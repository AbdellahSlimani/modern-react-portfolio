import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import Loader from 'react-loaders'
/* import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser' */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

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
      .sendForm('service_4iiayop', 'template_7a4bzj6', form.current, 'Fr8B5VCy34Sqn_xwO')
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
          <div className="conatct-text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                idx={15}
              />
            </h1>
            <p>
              I am interested in freelance opportunities - especially on ambitious
              or large projects. However, if&nbsp;you have any other requests or
              questions, don't hesitate to contact me using below form either.
            </p>

            <h2 className='contact-info'>Contact Infomation</h2>
           {/*  <a target='_blank' rel='noreferrer' href='https://twitter.com/AbdalahSlimani'>
              <FontAwesomeIcon icon={} color="#4d4d4e"/>
            </a>
            <a target='_blank' rel='noreferrer' href='https://twitter.com/AbdalahSlimani'>
              <FontAwesomeIcon icon={} color="#4d4d4e"/>
            </a> */}
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
