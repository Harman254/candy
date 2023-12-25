import { communityInfo } from '@/lib/index.com';
import React from 'react';
import CommunityCard from './CommunityCard';

const Community = () => {
  return (
    <section className='h-auto md:h-[416px] flex flex-col gap-3 mt-10 md:mt-20'>

      <div className='h-[120px] md:h-auto flex flex-col space-y-5 items-center justify-center text-center md:text-left'>
        <h1 className='text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight'>
          Manage your entire community  in a single system
        </h1>
        <p className='text-sm leading-7 md:text-base mt-2 md:mt-0'>
          Who is Nexcent suitable for?
        </p>
      </div>

      <div className='h-auto md:h-[280px] flex flex-wrap gap-5 justify-center md:justify-between'>
        {communityInfo.map((item) => (
          <CommunityCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Community;
