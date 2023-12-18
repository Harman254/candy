import React from 'react'
import Unlock from './Unlock'
import Achievements from './Achievements'
import Calender from './Calender'
import Customers from './Customers'
import CommunityUpdates from './CommunityUpdates'

const Body = () => {
  return (
    <section className='bg-gray-200'>
        <Unlock />
        <Achievements />
        <Calender />
        <Customers />
        <CommunityUpdates />
        
    </section>
  )
}

export default Body