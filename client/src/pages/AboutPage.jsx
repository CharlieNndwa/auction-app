import React from 'react'
import AboutComponent from '../Components/pages/AboutComponent'
import Philosophy from '../Components/pages/Philosophy'
import ExperiencedBanner from '../Components/pages/Home/ExperiencedBanner'
import Client from "../Components/pages/Home/Client";

const AboutPage = () => {
  return (
    <>
          <Client />
        <Philosophy />
        <ExperiencedBanner />
    </>
  )
}

export default AboutPage