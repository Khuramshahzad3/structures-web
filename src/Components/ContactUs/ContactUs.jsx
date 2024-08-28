import React from 'react'
import ContactForm from './ContackForm'
import Contact from '../../assets/Contact.jpg'
const ContactUs = () => {
  return (
    <div>
      <div className="">
        <img src={Contact} alt="" className='h-[80vh] w-screen'/>
        <ContactForm />

      </div>
    </div>
  )
}

export default ContactUs