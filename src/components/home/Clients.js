import React from 'react'
import './Clients.css'
import Logoc1 from '../../assets/Logoc1.png'
import Logoc2 from '../../assets/Logoc2.png'
import Logoc3 from '../../assets/Logoc3.png'
import Logoc4 from '../../assets/Logoc4.png'
import Logoc5 from '../../assets/Logoc5.png'
import Logoc6 from '../../assets/Logoc6.png'
import Logoc7 from '../../assets/Logoc7.png'

const Clients = () => {
  return (
    <div className='clientmain'>
      <div className='clienttext'>
        <div className='clienttext1'>Our Clients</div>
        <div className='clienttext2'>We have been working with some Fortune 500+ clients</div>
      </div>
      <div className='clienticon'>
        <div className='logoc1'>
          <img alt='Logoc' src={Logoc1} className='logoc11' />
        </div>
        <div className='logoc2'>
          <img alt='Logoc' src={Logoc2} className='logoc22' />
        </div>
        <div className='logoc3'>
          <img alt='Logoc' src={Logoc3} className='logoc33' />
        </div>
        <div className='logoc4'>
          <img alt='Logoc' src={Logoc4} className='logoc44' />
        </div>
        <div className='logoc5'>
          <img alt='Logoc' src={Logoc5} className='logoc55' />
        </div>
        <div className='logoc6'>
          <img alt='Logoc' src={Logoc6} className='logoc66' />
        </div>
        <div className='logoc7'>
          <img alt='Logoc' src={Logoc7} className='logoc77' />
        </div>
      </div>
    </div>
  )
}

export default Clients
