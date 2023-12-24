import { communityInfo } from '@/lib/index.com'
import React from 'react'
import CommunityCard from './CommunityCard'

const Community = () => {




  return (
    <section className='h-[416px] flex flex-col gap-3 mt-20'>

      <div className='h-[120px] flex flex-col space-y-5 items-center justify-center'>
        <h1 className='scroll-m-20 text-4xl text-center font-extrabold tracking-tight lg:text-5xl'>Manage your entire community <br /> in a single  system</h1>
        <p className='leading-7 [&:not(:first-child)]:mt-6"'>who is Nexcent suitable for?.</p>
      </div>
      <div className='h-[280px] flex gap-5 justify-between'>
        {communityInfo.map((item) => (
          <CommunityCard key={item.id} item={item} />
        ))}

      </div>
    </section>
  )
}

export default Community