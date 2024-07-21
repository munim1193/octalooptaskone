import React from 'react'
import '../App.css'
import HeroSection from './home/HeroSection'
import Clients from './home/Clients'
import Community from './home/Community'

const Home = () => {
  return (
    <div className='main-home'>
      <HeroSection />
      <Clients />
      <Community />
    </div>
  )
}

export default Home
