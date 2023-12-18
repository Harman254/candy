import Image from 'next/image'
import React from 'react'
import { Button } from '../../ @/components/ui/button'

const Hero = () => {
  return (
    <section className='h-[590px] flex items-center gap-5 px-20 py-10'>
      <div className='w-[657px] h-[276px] flex flex-col items-start'>

        <h1 className='text-[64px] leading-none font-semibold'>Lessons and insights <span className='text-primary'>from 8 years.</span></h1>
        <p className=' leading-none m-4 text-gray-500'>Where to grow your business as a photographer: site or social media?</p>
        <Button className='px-3 text-white py-2 rounded-md hover:bg-primary/50 transition-all ease-in-out'>Register</Button>
      </div>
      <Image src="/code.png" width={391} height={407} alt='code' />

      <div>
        <span className='h-[3px] rounded-full bg-black'></span>
      </div>


    </section>
  )
}

export default Hero