import React from 'react'
import './HeroSection.css'
import illustration from '../../assets/illustration.png'
const HeroSection = () => {
  return (
    <div className='herosection'>
      <div className='herosection1'>
        <div className='herotext'>
          <div className='herotext1'>Lessons and insights <span className='herotext11'>from 8 years</span></div>
          <div className='herotext2'>Where to grow your business as a photographer: site or social media?</div>
        </div>
        <buton className='herobutton'>Register</buton>
      </div>

      <div className='herosection2'>
        <img alt='illustration' src={illustration}/>
      </div>

    </div>
  )
}

export default HeroSection
