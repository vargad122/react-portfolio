import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Pricing from '../components/Pricing'

const Prices = () => {
  return (
    <div>
        <Navbar />
        <HeroImage heading="Árak" text="Válassz egy utat." />
        <Pricing />
        <Footer />
    </div>
  )
}

export default Prices