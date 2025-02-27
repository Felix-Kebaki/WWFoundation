import React from 'react'
import './target.css'
import { useNavigate } from 'react-router-dom'

export function Target() {
    const navigate=useNavigate()
    const HandleContactClick=()=>{
        navigate("/WWFoundation/contact")
    }
  return (
    <section className='TargetMainSec'>
        <div className='TargetMainDiv'>
            <div className='TargetSectionWithImgWordDiv'>
                <p className='TargetImgWordDesc regular'><span id="TargetValue" className='medium'>10k</span><br/>targeted children<br/><span id="TargetValue" className='medium'>100+</span><br/>orphanages helped</p>
            </div>
            <div className='TargetSectionWithDetailsDiv'>
                <p id="TargetWithDetailsMainTitle" className='medium'>Hard times for whole world & opportunities to help children in need</p>
                <p className='regular' id="TargetWithDetailsMainDesc">In these challenging times, countless children face hardships, lacking basic needs like education, healthcare and essentials.Their dreams and futures depend on the kindness of generous hearts.</p>
                <p className='regular' id="TargetWithDetailsMainDesc">Your support can make a difference. By helping through our foundation, you provide hope and a chance for a better tomorrow. Together, we can transform lives.</p>
                <div className='TargetBtnMainDiv'>
                    <button onClick={HandleContactClick}>Contact us</button>
                </div>
            </div>
        </div>
    </section>
  )
}
