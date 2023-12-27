import { LucideIcon } from 'lucide-react';
import React from 'react';

interface CommunityCardProps {
  item: {
    id: number;
    icon: LucideIcon;
    title: string;
    description: string;
  };
}

const CommunityCard = ({ item }: CommunityCardProps) => {
  const { title, description, icon } = item;
  const iconElement: React.ReactElement = React.createElement(icon, {
    size: 48,
    className: 'text-green-500',
  });

  return (
    <div className='h-[260px] w-[299px] flex flex-col items-center mt-8'>
      <div className='h-[80px] w-[80px] flex items-center justify-center bg-[#F0F4F8] rounded-full'>
        {iconElement}
      </div>
      <h1 className='font-bold text-gray-800 text-center text-lg md:text-xl lg:text-2xl xl:text-3xl mt-4 mb-2'>
        {title}
      </h1>
      <p className='font-normal text-gray-500 text-center text-sm md:text-base lg:text-lg'>
        {description}
      </p>
    </div>
  );
};

export default CommunityCard;
