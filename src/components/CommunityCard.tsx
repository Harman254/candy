import { LucideIcon } from 'lucide-react';
import React from 'react'


interface CommunityCardProps {
     item: {
        id: number;
        icon: LucideIcon;
        title: string;
        description: string;
    }
}

const CommunityCard = ({item}: CommunityCardProps) => {
    const {title, description, icon} = item
    const iconElement: React.ReactElement = React.createElement(icon, {size: 48, className: 'text-green-500'})
  return (
    <div  className='h-[260px] w-[299px] flex flex-col items-center m-5'>
        <div className='h-[80px] w-[80px] flex items-center justify-center bg-[#F0F4F8] rounded-full'>
            {iconElement}
        </div>
        <h1 className='font-bold text-gray-800 text-center text-2xl'>{title}</h1>
        <p className='font-normal text-gray-500 text-center'>{description}</p>

    </div>
  )
}

export default CommunityCard