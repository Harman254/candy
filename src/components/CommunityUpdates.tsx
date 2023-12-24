import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CommunityUpdates = () => {
  return (
    <section className='h-[609px] mt-[50px] pt-5 pb-10 flex flex-col'>
      <div className='mx-10 h-[124px] flex flex-col items-center justify-center mb-5'>
        <h1 className='scroll-m-20 text-3xl text-center font-extrabold tracking-tight lg:text-4xl'>Caring is the New Marketing</h1>
        <p className='leading-7 [&:not(:first-child)]:mt-6 px-[100px]'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who&apos;s joining the community, read about how our community are increasing their membership income and lot&apos;s more.​</p>
      </div>

      <div className='h-[400px] w-full flex'>
        <UpdateCard />
        <UpdateCard />
        <UpdateCard />

      </div>
    </section>
  )
}

export default CommunityUpdates


const UpdateCard = () => {
  return  (
    <div
  className="border h-[378px] p-3 w-[368px] text-card-foreground flex flex-col  max-w-sm bg-white rounded-xl shadow-md overflow-hidden md:max-w-md m-4"
  data-v0-t="card"
>
  <div className='h-[200px] bg-slate-100 rounded-t-md'></div>
  <div className='h-[178px] flex flex-col items-center justify-center'>
    <p className='text-center font-semibold mt-6'>Creating Streamlined Safeguarding Processes with OneRen</p>
   <Link href="/#" > <p className='font-semibold flex text-primary text-center mt-6'>Readmore <ArrowRight /> </p></Link>
  </div>
 
</div>
  )
} 