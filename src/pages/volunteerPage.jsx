import React from 'react'
import { VolunteerForm } from '../components/volunteerForm/volunteerForm'
import {TopImage} from '../components/topBackgroundImage/TopImage'

import counsellingImg from '../assets/images/councelling.png'

export function VolunteerPage() {
  return (
    <>
        <TopImage title={"Volunteer"} image={counsellingImg}/>
        <VolunteerForm/>
    </>
  )
}
