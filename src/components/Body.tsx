import React from 'react'
import Unlock from './Unlock'
import Achievements from './Achievements'
import Calender from './Calender'
import Customers from './Customers'
import CommunityUpdates from './CommunityUpdates'
import SectionTitle from './SectionTitle'

const Body = () => {
  return (
    <section>
        {/* <Unlock /> */}
        {/* <Achievements /> */}
        {/* <Calender /> */}
        <Customers />
        {/* <SectionTitle /> */}
        <CommunityUpdates />
        
    </section>
  )
}

export default Body