import { LucideIcon } from 'lucide-react';
import React from 'react';

interface AchieveCardProps {
  item: {
    id: number;
    icon: LucideIcon;
    title: string;
    value: number;
  };
}

const AchieveCard = ({ item }: AchieveCardProps) => {
  const { icon, title, value } = item;
  const IconElement = React.createElement(icon, { size: 40, className: 'text-green-500' });

  return (
    <div className='w-full md:w-[255px] flex h-[60px] md:h-[80px] space-x-3'>
      <div className='h-[40px] w-[40px]'>
        {IconElement}
      </div>
      <div className='flex flex-col'>
        <h3 className='font-bold text-lg md:text-2xl text-gray-800'>{value}</h3>
        <p className='text-sm md:text-normal text-gray-500'>{title}</p>
      </div>
    </div>
  );
};

export default AchieveCard;
