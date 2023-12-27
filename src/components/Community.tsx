import { communityInfo } from '@/lib/index.com';
import React from 'react';
import CommunityCard from './CommunityCard';

const Community = () => {
  return (
    <section className='h-auto min-h-screen flex flex-col gap-3 mt-10 md:mt-20'>

      <div className='h-[120px] md:h-auto mb-5 flex flex-col space-y-5 items-center justify-center text-center md:text-left'>
        <h1 className='text-step-4 text-space-m  font-extrabold tracking-tight'>
          Manage your entire community  in a single system
        </h1>
        <p className='text-step-0 leading-7 mb-4' >
          Who is Nexcent suitable for?
        </p>
      </div>

      <div className="flex flex-col flex-wrap justify-center items-center md:flex-row md:justify-between">
        {communityInfo.map((item) => (
          <CommunityCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Community;
