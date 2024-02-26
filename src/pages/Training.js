import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage'
import TrainingSection from '../components/Training'

const Training = () => {
  return (
    <div>
        <Navbar />
        <HeroImage heading="Képzés" text="Utazás előtti és utazás közbeni képzések." />
        <TrainingSection />
        <Footer />
    </div>
  )
}

export default Training