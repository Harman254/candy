import Image from 'next/image';
import React from 'react';
import { Button } from '../../ @/components/ui/button';

const Calender = () => {
  return (
    <section className='py-10 px-4 md:px-10 lg:px-20 xl:px-32 mt-20 flex flex-col-reverse md:flex-row items-center gap-6'>
      <div className='w-full md:w-[441px]'>
        <Image src="/pic_3.jpg" width={441} height={433} alt='' />
      </div>
      <div className='w-full md:w-[661px] flex flex-col items-start space-y-7'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-center md:text-left'>
          A Gratitude for Collaborators
        </h1>
        <p className='text-normal text-gray-500 text-center md:text-left'>
          To our valued clients, collaborators, and partners who have been a part of this incredible journey, we extend our heartfelt gratitude. Your trust and support have been the driving force behind our achievements, and we look forward to many more years of shared success. Join us in celebrating the unseen, the transformative, and the extraordinary as we continue to push the boundaries of what&lsquo;s possible at NextCent.
        </p>
        <Button className='bg-primary px-4 hover:bg-primary/70 ease-in-out duration-150 rounded-none py-2 mt-5 w-full md:w-[1/3] text-white'>
          Learn More
        </Button>
      </div>
    </section>
  );
};

export default Calender;
