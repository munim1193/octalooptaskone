import React from 'react'
import unlock from '../../assets/unlock.png'
import './Unlock.css'
const Unlock = () => {
  return (
    <div className='unlockmain'>
      <div className='unlock'>
        <div className='unlock1'>
          <img alt='unlock' src={unlock} className='unlock11'/>
        </div>
        <div className='unlock2'>
          <div className='unlock21'>
            <div className='unlock211'>The unseen of spending three years at Pixelgrade</div>
            <div className='unlock212'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</div>
          </div>
          <button className='unlock22'>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default Unlock