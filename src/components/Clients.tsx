import { SvGicons } from '@/icons/icons'
import React from 'react'

const Clients = () => {
  return (
    <section className='h-[190px] flex flex-col '>
      <h1 className='text-3xl text-center font-bold'>Our Clients</h1>
      <p className='text-center text-gray-500'>We have been working with some Fortune 500+ clients</p>
      <div className='h-[98px] flex justify-between'>
      {SvGicons.map((icon) => (
      <div key={icon.id}>
        {icon.svg}
      </div>
    ))}


      </div>

    </section>
  )
}

export default Clients