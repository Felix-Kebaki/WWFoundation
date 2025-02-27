import React from 'react'
import { IntroAbout } from '../components/introAbout/IntroAbout'
import { TopImage } from '../components/topBackgroundImage/TopImage'
import { MissionVission } from '../components/missinVission/MissionVission'
import { QandAnswers } from '../components/questionAndAnswer/QandA'
import AboutTop from '../assets/images/topAbout.png'

export function AboutPage() {
  return (
    <>
        <TopImage title={"About Us"} image={AboutTop}/>
        <IntroAbout/>
        <MissionVission/>
        <QandAnswers/>
    </>
  )
}
