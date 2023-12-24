import { SvGicons } from '@/icons/icons'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Customers = () => {
  return (
    <section className='h-[390px] flex gap-10 px-8 py-5'>
      <div className='w-[320px] h-[320px] '>
        <Image src="/code.png" width={320} height={320} alt='' />
      </div>
      <div className='h-[324px] w-[748px] flex flex-col justify-center'>
        <div className='h-[244px] justify-center flex flex-col'>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
          At Nexcent, we take pride in our commitment to excellence and are honored to have had the opportunity to collaborate with some of the world&apos;s leading Fortune 500 companies. Our partnerships with these industry giants reflect the trust they place in our services and the value we bring to the table.
          </p>
          <h2 className='font-semibold text-xl text-primary'>Tim Fold</h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6 font-semibold">British Dragon Boat Bacing Association</p>
        </div>
        <div className='flex gap-6'>
        <div className='h-[48px] w-[493px] justify-between overflow-hidden flex'>
          {SvGicons.map((icon) => (
            <div className='w-[48px]' key={icon.id}>{icon.svg}</div>
          )

          )}
          
        </div>
        <div className='flex justify-center items-center m-4'>
          <Link className='hover:text-amber-700 flex ' href="#"><p className='text-primary'>Meet all customers</p>
          <ArrowRight /></Link>
        </div>
        </div>


      </div>
    </section>
  )
}

export default Customers