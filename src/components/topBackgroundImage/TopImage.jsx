import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'
import "./topImage.css"

export function TopImage({title,image}) {
  return (
    <section className='TopImageMainSec'>
        <div className='TopImageMainDiv'>
        <img src={image} alt="" className='TopActualBackgroundImage'/>
        <div className='ImageColoring'></div>
        <div className='TopBackgroundTittleDiv'>
            <div>
            <p className='TopBackgroundTittle medium'>{title}</p>
            <p className='TopBackgroundDecs regular'>Home  <FontAwesomeIcon icon={faAngleRight} id="ArrowIconTopBackground"/> {title}</p>
            </div>
        </div>
        </div>
    </section>
  )
}
