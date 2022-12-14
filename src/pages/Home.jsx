import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeaderHero from '../components/LandingPage/HeaderHero'
import ImageSection from '../components/LandingPage/ImageSection'
import WomenFashion from '../components/LandingPage/WomenFashion'
import MenFashion from '../components/LandingPage/MenFashion'
import BottomHero from '../components/LandingPage/BottomHero'
//import Products from '../components/Products'
import ProductList from './ProductList'

const Home = () => {
  return (
    <div className='xl:w-1440'>
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