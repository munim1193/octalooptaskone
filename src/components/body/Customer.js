import React from 'react'
import './customer.css'
import image9 from '../../assets/image 9.png'

const Customer = () => {
  return (
    <div className='customer'>
      <div className='custimg'>
        <img src={image9} alt='img9' />
      </div>
      <div className='custcontent'>
        <div className='contone'>
          <div className='contone1'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</div>
          <div className='contone2'>
            <div className='contone21'>Tim Smith</div>
            <div className='contone22'>British Dragon Boat Racing Association</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Customer