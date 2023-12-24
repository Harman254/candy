import Image from 'next/image'
import React from 'react'
import { Button } from '../../ @/components/ui/button'

const Calender = () => {
  return (
    <section className='h-[433px] py-10 px-20  mt-[100px] flex gap-6'>
      <div className='h-[433px] w-[441px]'>
        <Image src="/code.png" width={441} height={433} alt=''  />

      </div>
      <div className='w-[661px] h-[308px] flex flex-col items-start space-y-7'>
        <h1 className='scroll-m-20 text-2xl text-center font-extrabold tracking-tight lg:text-3xl'>A Gratitude for Collaborators</h1>
        <p className='leading-7 [&:not(:first-child)]:mt-6" '>To our valued clients, collaborators, and partners who have been a part of this incredible journey, we extend our heartfelt gratitude. Your trust and support have been the driving force behind our achievements, and we look forward to many more years of shared success.

Join us in celebrating the unseen, the transformative, and the extraordinary as we continue to push the boundaries of what&apos;s possible at NextCent.</p>

        <Button className='bg-primary px-4 hover:bg-primary/70 ease-in-out duration-150 rounded-none py-2 mt-5 w-1/3 text-white'>Learn More</Button>
      
      </div>

    </section>
  )
}

export default Calender