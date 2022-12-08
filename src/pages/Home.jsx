import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeaderHero from '../components/LandingPage/HeaderHero'
import ImageSection from '../components/LandingPage/ImageSection'
import WomenFashion from '../components/LandingPage/WomenFashion'
import MenFashion from '../components/LandingPage/MenFashion'
import BottomHero from '../components/LandingPage/BottomHero'

const Home = () => {
  return (
    <div className='container'>
        <Navbar/>
        <HeaderHero/>
        <ImageSection/>
        <WomenFashion/>
        <MenFashion/>
        <BottomHero/>
        <Footer/>        
    </div>
  )
}

export default Home