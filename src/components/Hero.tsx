import Image from 'next/image'
import React from 'react'
import { Button } from '../../ @/components/ui/button'

const Hero = () => {
  return (
    <section className='h-[590px] flex items-center gap-5 px-20 py-10'>
      <div className='w-[657px] h-[276px] flex flex-col items-start'>

        <h1 className='text-[64px] leading-none bg-gradient-to-l from-green-600 via-slate-500 to-black bg-clip-text text-transparent font-extrabold'>Crafting Digital Brilliance</h1>
        <p className='leading-7 [&:not(:first-child)]:mt-6'>Where to grow your business as a photographer: site or social media?</p>
        <button className='bg-primary text-white px-10 py-3 hover:bg-primary/75 rounded-full mt-10'>Join Now</button>
      </div>
      <Image src="/code.png" width={391} height={407} alt='code' />

      <div>
        <span className='h-[3px] rounded-full bg-black'></span>
      </div>


    </section>
  )
}

export default Hero