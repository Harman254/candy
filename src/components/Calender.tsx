import Image from 'next/image';
import React from 'react';
import { Button } from '../../ @/components/ui/button';
import { AspectRatio } from '../../ @/components/ui/aspect-ratio';

const Calender = () => {
  return (
    <section className='flex flex-col  justify-center items-center gap-8  md:flex-row container mx-auto '>
      <div className='md:max-w-full '>
        <Image src="/pic_3.jpg" alt="Image" width={433} height={433} className="rounded-md object-cover" />
      </div>
      <div className='w-full mt-4 md:w-[661px] flex flex-col items-start space-y-7'>
        <h1 className='text-step-3 font-extrabold tracking-tight text-center '>
          A Gratitude for Collaborators
        </h1>
        <p className='text-step-0 '>
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
