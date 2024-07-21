import React from 'react'
import Iconmember from '../../assets/Iconmember.png'
import Iconmember2 from '../../assets/Iconmember2.png'
import Iconmember3 from '../../assets/Iconmember3.png'
import './Community.css'
const Community = () => {
  return (
    <div className='maincom'>
      <div className='comone'>
        <div className='comtext1'>Manage your entire community in a single system</div>
        <div className='comtext2'>Who is Nextcent suitable for?</div>
      </div>
      <div className='comtwo'>
        <div className='comframe1'>
          <div className='memberbox'>
            <img alt='Iconmember' src={Iconmember} className='Iconmember'/>
            <p className='membertext'>Membership Organisations</p>
          </div>
          <div className='frame3'>
            <div className='framecon'>Our membership management software provides full automation of membership renewals and payments</div>
          </div>
        </div>
        <div className='comframe2'>
          <div className='memberbox'>
            <img alt='Iconmember' src={Iconmember2} className='Iconmember'/>
            <p className='membertext'>Membership Organisations</p>
          </div>
          <div className='frame3'>
            <div className='framecon'>Our membership management software provides full automation of membership renewals and payments</div>
          </div>
        </div>
        <div className='comframe3'>
          <div className='memberbox'>
            <img alt='Iconmember' src={Iconmember3} className='Iconmember'/>
            <p className='membertext'>Clubs And Groups</p>
          </div>
          <div className='frame3'>
            <div className='framecon'>Our membership management software provides full automation of membership renewals and payments</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Community
