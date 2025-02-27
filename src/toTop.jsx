import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons'

import './index.css'

export function ToTop() {
    const { pathname } = useLocation();

    const HandleScroll=()=>{
        let scrollToTop=document.querySelector(".ToTopDiv")
        if(window.scrollY>300){
          scrollToTop.classList.add("ToTopDivShow");
        }
        else{
          scrollToTop.classList.remove("ToTopDivShow");
        }
      }
      

    const HandleToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };
  
  
  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll",HandleScroll)

    return()=>{
      window.removeEventListener("scroll",HandleScroll)
    }
  
  }, [pathname]);
  return (
    <div className="ToTopDiv">
        <FontAwesomeIcon
          icon={faArrowUp}
          className="ToTop"
          onClick={HandleToTop}
        />
    </div>
  );
}
