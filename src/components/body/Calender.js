import React from 'react'
import './calender.css'
import pana from '../../assets/pana.png'

const Calender = () => {
  return (
    <div className='calender'>
      <div className='calimg'>
        <img src={pana} alt='pana' />
      </div>
      <div className='calcontent'>
        <div className='calhead'>How to design your site footer like we did</div>
        <div className='caltext'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</div>
        <button className='calbutton'>Learn More</button>
      </div>
    </div>
  )
}

export default Calender