import { AchievementStats } from '@/lib/index.com'
import React from 'react'
import AchieveCard from './AchieveCard'

const Achievements = () => {
  return (
    <section className='h-[288px] py-10 px-15 flex bg-slate-300'>
      <div className='w-[540px] h-[120px] flex flex-col items-start justify-center pl-10'>
        <h2 className='font-bold text-3xl text-gray-800 '>Helping a local <span className='text-green-500'>business reinvent itself</span></h2>
      <p className='text-normal text-gray-500'>We reached here with our hard work and dedication</p>
      </div>
      <div className='w-[540px] h-[160px]  flex gap-4 flex-wrap'>
        {AchievementStats.map((item) => (
          <AchieveCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}

export default Achievements