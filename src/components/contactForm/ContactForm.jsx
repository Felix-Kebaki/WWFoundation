import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import emailjs from '@emailjs/browser'
import "./contactForm.css";

import building from "../../assets/images/building.png";

export function ContactForm() {
  const [formdata, setFormdata] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  });
  const [sendMessage,setSendMessage]=useState("")

  const { Name, Email, Subject, Message } = formdata;

  const OnChange = (e) => {
    setFormdata((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const HandleFormSubmit = (e) => {
    e.preventDefault();
    let showpre=document.querySelector(".PreTagWithSendMessage")
    if(Name !="" || Email !="" || Subject !="" || Message !=""){

      var serviceId = import.meta.env.VITE_SERVICE_ID;
      var templateId = import.meta.env.VITE_TEMPLATE_ID;
      var publicKey=import.meta.env.VITE_PUBLIC_KEY

      const templateParams={
        Name:Name,
        Email:Email,
        Subject:Subject,
        Message:Message
      }
      emailjs.send(serviceId,templateId,templateParams,publicKey)
      .then(response=>{
        setSendMessage("Message sent successfully")
        setFormdata({
          Name:"",
          Email:"",
          Subject:"",
          Message:""
        })
        showpre.style.display="block";
        if(showpre.style.display="block"){
            setTimeout(()=>{
                showpre.style.display="none"
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
  };

  return (
    <section className="ContactPageMainSec">
      <div className="ContactPageMainDiv">
        <form className="ContactFormMainContactP" onSubmit={HandleFormSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="regular"
            name="Name"
            value={Name}
            onChange={OnChange}
          />
          <br />
          <input
            type="text"
            placeholder="Email"
            className="regular"
            name="Email"
            value={Email}
            onChange={OnChange}
          />
          <br />
          <input
            type="text"
            placeholder="Subject"
            className="regular"
            name="Subject"
            value={Subject}
            onChange={OnChange}
          />
          <br />
          <textarea
            row="1"
            column="100%"
            placeholder="Message..."
            className="regular"
            name="Message"
            value={Message}
            onChange={OnChange}
          ></textarea>
          <pre className="PreTagWithSendMessage regular">{sendMessage}</pre>
          <div className="SubmitMessageContactDiv">
            <button className="italics">Submit Message</button>
          </div>
        </form>
        <div className="ContactPageContentMainDiv">
          <p id="ItalicContactMainTitle" className="italics">
            contact us
          </p>
          <p id="GetinTouchContactPage" className="medium">
            Lets Get in Touch
          </p>
          <p className="regular" id="GetInTouchContactDesc">
            Stay connected with us! Send a message through our contact page and
            join us in making a difference for children’s futures.
          </p>
          <div className="ContactIconMainDiv">
            <div className="ContactIconDiv1">
              <div className="IconOrImgMainDivContact">
                <img src={building} alt="" />
              </div>
              <div className="ContactDescRelationToIconDiv regular">
                <p>Office Location</p>
                <p className="italics">Eldoret,kesses</p>
              </div>
            </div>
            <div className="ContactIconDiv2">
              <div className="IconOrImgMainDivContact">
                <FontAwesomeIcon icon={faPhone} id="ContactPhoneIcon" />
              </div>
              <div className="ContactDescRelationToIconDiv regular">
                <p>Emergency Call</p>
                <p className="italics">+254799019135</p>
                <p className="italics">+254762294119</p>
              </div>
            </div>
          </div>
          <hr id="HorizontalLineAtContactPage" />
          <p id="FollowLinkTittleOnContact" className="regular">
            Follow Us On Social Media
          </p>
          <div className="ContactSocilLinkMainDiv">
            <a
              href="https://x.com/WATOTONIWETU?t=LAsQl8NCgW7UrkRpYVQmsQ&s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faXTwitter} id="iconSocials" />
              <p className="regular">Twitter</p>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61573584983539&mibextid=rS40aB7S9Ucbxw6v"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} id="iconSocials" />
              <p className="regular">Facebook</p>
            </a>
            <a
              href="https://www.instagram.com/watotowetufoundation1?igsh=YzljYTk1ODg3Zg=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} id="iconSocials" />
              <p className="regular">Instagram</p>
            </a>
            <a
              href="https://tiktok.com/@watotowetufoundation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTiktok} id="iconSocials" />
              <p className="regular">TikTok</p>
            </a>
            <a
              href="https://www.youtube.com/@WatotoniWetuFoundation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} id="iconSocials" />
              <p className="regular">Youtube</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
