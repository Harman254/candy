import { SvGicons } from '@/icons/icons'
import React from 'react'

const Clients = () => {
  return (
    <section className='h-[190px] flex flex-col '>
      <h1 className='scroll-m-20 text-3xl text-center font-extrabold tracking-tight lg:text-4xl'>Our Clients</h1>
      <p className='text-center text-gray-500 mt-5 mb-4 '>We have been working with some Fortune 500+ clients</p>
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