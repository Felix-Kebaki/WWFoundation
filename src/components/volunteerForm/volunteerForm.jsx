import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import './volunteerForm.css'

export function VolunteerForm() {
  const [formData,setFormData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    phone:"",
    county:"",

  })
  const [sendMessage,setSendMessage]=useState("")
  const {firstName,lastName,email,phone,county}=formData

  const OnChange=(e)=>{
    setFormData((prev)=>({
      ...prev,
      [e.target.name]:e.target.value
    }))
  }
  const HandleFormSubmit=(e)=>{
    e.preventDefault();
    let showpre=document.querySelector(".PreTagWithSendMessage")
    if(firstName !="" || lastName !="" || email !="" || phone !="" || county !=""){

      var serviceId = import.meta.env.VITE_SERVICE_ID;
      var templateId = import.meta.env.VITE_TEMPLATE_ID_VOLUNTEER;
      var publicKey=import.meta.env.VITE_PUBLIC_KEY

      const templateParams={
        FirstName:firstName,
        LastName:lastName,
        Email:email,
        Phone:phone,
        County:county
      }
      emailjs.send(serviceId,templateId,templateParams,publicKey)
      .then(response=>{
        setSendMessage("Request sent successfully")
        setFormData({
          firstName:"",
          lastName:"",
          email:"",
          phone:"",
          county:"",
        })
        showpre.style.display="block";
        if(showpre.style.display="block"){
            setTimeout(()=>{
              showpre.style.display="none";
            },3000);
        }
      })
      .catch((error)=>{
        setSendMessage(error.message || error.text)
        console.log(`Error :${error.text||error.message}`)
        
        if(sendMessage===error.message || error.text){
          setTimeout(()=>{
              setSendMessage("");
          },3000);
      }
      })
    }else{
      window.alert("Fill all fields please")
    }
  }
  return (
    <section className='VolunteerFormMainSec'>
        <div className='VolunteerFormMainDiv'>
          <p className='WhyJoinTitle italics'>Why join us</p>
          <p className='IntroTitleInVolunteer medium'>Make a difference—volunteer today and inspire hope!</p>
          {/* 80 words */}
          <p className='VolunteerDescAlot regular'>Volunteering with us is a chance to make a real impact in the lives of vulnerable children. By joining our mission, you help provide education, food, clothing, shelter and emotional support to those in need. Beyond changing lives, you gain valuable experience, personal growth, and the joy of giving back to society. Your time and skills can bring hope and opportunities to children, shaping a brighter future. Join us today and be a hero in a child’s life!</p>
          <p className='FillInFormTitle medium'>Please fill in the form to join us</p>
          <div className='VolunteerActualFormMainDiv'>
            <form onSubmit={HandleFormSubmit} >
              <div className='EachInputFieldDivVolunteer'>
                <input type="text" placeholder='First Name' name="firstName" value={firstName} onChange={OnChange}/>
              </div>
              <div className='EachInputFieldDivVolunteer'>
                <input type="text" placeholder='Last Name' name="lastName" value={lastName} onChange={OnChange}/>
              </div>
              <div className='EachInputFieldDivVolunteer'>
                <input type="text" placeholder='Email Address' name="email" value={email} onChange={OnChange}/>
              </div>
              <div className='EachInputFieldDivVolunteer'>
                <input type="text" placeholder='Tel Number'  name="phone" value={phone} onChange={OnChange}/>
              </div>
              <div className='EachInputFieldDivVolunteer'>
                <input type="text" placeholder='County' name="county" value={county} onChange={OnChange}/>
              </div>
              <button className='SubmitBtnDivVolunteer' type='submit'>
               Submit
              </button>
            </form>
            <pre className='PreTagWithSendMessage regular'>{sendMessage}</pre>
          </div>
        </div>
    </section>
  )
}
