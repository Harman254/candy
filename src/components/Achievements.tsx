import { LucideIcon } from 'lucide-react';
import React from 'react';
import AchieveCard from './AchieveCard';
import { AchievementStats } from '@/lib/index.com';

const Achievements = () => {
  return (
    <section className='py-10 px-4 md:px-10 lg:px-20 xl:px-32 flex flex-col items-center bg-slate-200'>
      <div className='w-full md:w-[540px] lg:w-[640px] xl:w-[800px] mb-6 md:mb-8'>
        <h2 className='font-bold text-step-3 text-center'>
          Helping a local <span className='text-green-500'>business reinvent itself</span>
        </h2>
        <p className='text-sm md:text-normal text-gray-500 text-center mt-2 md:mt-4'>
          We reached here with our hard work and dedication
        </p>
      </div>
      <div className='w-full md:w-[540px] lg:w-[640px] xl:w-[800px] flex flex-wrap justify-center gap-4'>
        {AchievementStats.map((item) => (
          <AchieveCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Achievements;
