import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeaderHero from '../components/LandingPage/HeaderHero'
import ImageSection from '../components/LandingPage/ImageSection'

const Home = () => {
  return (
    <div className='container'>
        <Navbar/>
        <HeaderHero/>
        <ImageSection/>
        <Footer/>        
    </div>
  )
}

export default Home