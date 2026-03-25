import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {faX} from '@fortawesome/free-solid-svg-icons'

import Logo from "../../assets/images/WWF.png";

import { useLocation } from "react-router-dom";

export function Navbar() {
  const [navOpened,setNavOpened]=useState(true)
  const [borderOnBtn,setBorderOnBtn]=useState(false)
  const navigate = useNavigate();
  const location=useLocation()


  const HandleClickOnMenu=()=>{
    
    const appear=document.querySelector(".ContentOfNavDiv");
    if(appear.classList.contains("ContentOfNavDivAppear")){
      appear.classList.remove("ContentOfNavDivAppear")
      document.body.style.overflow="auto";
      setNavOpened(true)
    }else{
      appear.classList.add("ContentOfNavDivAppear")
      document.body.style.overflow="hidden";
      setNavOpened(false)
    }
  }


  const HandleClickLink=()=>{
    const appear=document.querySelector(".ContentOfNavDiv");
    appear.classList.remove("ContentOfNavDivAppear")
    setNavOpened(true)
    document.body.style.overflow="auto";
  }

  const HandleToDonate=()=>{
    HandleClickLink();
    navigate("/WWFoundation/donate")
  }

  useEffect(()=>{
    if(location.pathname==="/donate"){
      setBorderOnBtn(true)
      return()=>{
        setBorderOnBtn(false)
      }
    }
  },[location.pathname])
  
  return (
    <section className="MainNavSec">
      <nav className="MainNavTag">
        <Link to="/WWFoundation" className="NavLogoDiv">
          <img src={Logo} alt="" />
        </Link>
        <div className="ContentOfNavDiv">
            <div className="AllNavLinksDiv">
              <NavLink
                to="/WWFoundation"
                className="EachLink medium"
                activeclassname="active"
                onClick={HandleClickLink}
              >
                Home
              </NavLink>
              <NavLink
                to="/WWFoundation/about"
                className="EachLink medium"
                activeclassname="active"
                onClick={HandleClickLink}
              >
                About
              </NavLink>
              <NavLink
                to="/WWFoundation/causes"
                className="EachLink medium"
                activeclassname="active"
                onClick={HandleClickLink}
              >
                Causes
              </NavLink>
              <NavLink
                to="/WWFoundation/contact"
                className="EachLink medium"
                activeclassname="active"
                onClick={HandleClickLink}
              >
                Contact
              </NavLink>
            </div>
          <div className="ButtonOnNavDiv">
            <button onClick={HandleToDonate} className={navOpened && borderOnBtn?"BorderOnNav italics":navOpened && !borderOnBtn?"NoBorderOnNav italics":!navOpened?"buttonCapsLockNav medium":null}>
              Make Donation
            </button>
          </div>
        </div>
        <div className="MenuIconDiv">
          <FontAwesomeIcon icon={navOpened ?faBars:faX} id="MenuIcon" onClick={HandleClickOnMenu}/>
        </div>
      </nav>
    </section>
  );
}
