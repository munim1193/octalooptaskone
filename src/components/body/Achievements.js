import React from 'react'
import './Achievements.css'
import one from '../../assets/1.png'
import two from '../../assets/2.png'
import three from '../../assets/3.png'
import four from '../../assets/4.png'


const Achievements = () => {
  return (
    <div className='achievements'>
      <div className='achheading'>
        <div className='head'>Helping a local <span className='headspan'>business reinvent itself</span></div>
        <div className='achtext'>We reached here with our hard work and dedication</div>
      </div>
      <div className='achcount'>
        <div className='row'>
          <img src={one} alt='1'/>
          <img src={two} alt='2'/>
        </div>
        <div className='row'>
          <img src={three} alt='3'/>
          <img src={four} alt='4'/>
        </div>
      </div>

    </div>
  )
}

export default Achievements