import React from 'react'
import Unlock from './body/Unlock'
import Achievements from './body/Achievements'
import Calender from './body/Calender'
import Customer from './body/Customer'
import '../App.css'

const Body = () => {
  return (
    <div className='body'>
      <Unlock />
      <Achievements />
      <Calender />
      <Customer />
    </div>
  )
}

export default Body
