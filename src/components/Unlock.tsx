import Image from 'next/image'
import React from 'react'
import { Button } from '../../ @/components/ui/button'

const Unlock = () => {
  return (
    <div className='h-[433px] mt-20 mb-20 flex space-x-10   px-20'>
      <div className='h-[433px] w-[442px]'>
        <Image src='/code.png' alt='Unlock' width={442} height={433} />

      </div>
      <div className='h-[268px] w-[661px] flex flex-col items-start justify-center space-y-4'>
        <h1 className='scroll-m-20 text-3xl text-center font-extrabold tracking-tight lg:text-4xl'>The unseen of spending three years at Pixelgrade</h1>
        <p className='leading-7 [&:not(:first-child)]:mt-6"'>Embarking on a journey with Pixelgrade isn&apos;t just a commitment; it&apos;s an immersion into a culture of innovation, growth, and unwavering dedication. Over the past three years, our team at Pixelgrade has been crafting not just solutions but experiences that redefine the digital landscape.</p>
      <Button className='bg-primary px-4 rounded-none py-2 mt-5 text-white'>Learn More</Button>
      </div>
    </div>
  )
}

export default Unlock