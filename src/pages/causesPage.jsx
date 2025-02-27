import React from 'react'
import { TopImage } from '../components/topBackgroundImage/TopImage'
import topCause from '../assets/images/topCause.jpg'
import { AllCauses } from '../components/allCauses/AllCauses'

export function CausesPage() {
  return (
    <>
      <TopImage title={"Our Causes"} image={topCause}/>
      <AllCauses/>
    </>
  )
}
