import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Body from './components/Body'
import Footer from './components/Footer'

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <NavBar/>
      <Home/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default LandingPage
