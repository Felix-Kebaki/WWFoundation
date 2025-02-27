import React from 'react'
import { ContactForm } from '../components/contactForm/ContactForm'
import { TopImage } from '../components/topBackgroundImage/TopImage'

import Test from '../assets/images/heroImg.jpg'

export function ContactPage() {
  
  return (
    <div>
      <TopImage title={"Contact Us"} image={Test}/>
      <ContactForm/>
    </div>
  )
}
