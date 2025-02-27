import React from 'react'
import { Link } from 'react-router-dom'
import './donate.css'

import Mpesa from '../../assets/images/MpesaImg.png'

export function Donate() {
  return (
    <section className='DonateMainSec'>
        <div className='DonateMainDiv'>
            <div className='EachDonateMainDiv'>
                <div>
                    <img src={Mpesa} alt="" id="MpesaImg" />
                    <p className='paybillAccount regular'>Paybill: <span>247247</span></p>
                    <p className='paybillAccount regular'>Account: <span>0799019135</span></p>
                    <p className='InKenyanShs regular'>Donate in Kenyan Shillings vie M-pesa</p>
                </div>
            </div>
            <div className='EachDonateMainDiv donateDifferentBackground'>
                <div>
                <p className='BankTransferMainTitle medium'>Bank Transfer</p>
                <p className='BankTransferMainDetails regular'>For Bank Deposits and Wire transfers, contact us on our <Link to="/WWFoundation/contact">contact</Link> page</p>
                </div>
            </div>
        </div>
    </section>
  )
}
