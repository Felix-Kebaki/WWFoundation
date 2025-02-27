import React from 'react'
import { Hero } from '../components/hero/Hero'
import { CauseExplore } from '../components/causeExplore/CauseExplore'
import { HomeDonate } from '../components/donationHome/HomeDonate'
import { Target } from '../components/targetHome/Target'

export function HomePage() {
  return (
    <>
        <Hero/>
        <CauseExplore/>
        <HomeDonate/>
        <Target/>
    </>
  )
}
