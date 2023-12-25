import Image from 'next/image';
import React from 'react';
import { Button } from '../../ @/components/ui/button';
import { AspectRatio } from '../../ @/components/ui/aspect-ratio';

const Unlock = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row h-auto md:h-[433px] mt-10 md:mt-20 mb-10 md:mb-20 px-5 md:px-20'>
      <div className='h-[268px] md:h-[433px] w-full md:w-[442px]'>
      <AspectRatio ratio={4 / 3}>
    <Image src="/pic_4.jpg" alt="Image" width={402} height={402} className="rounded-md object-cover" />
  </AspectRatio>
      </div>
      <div className='h-auto md:h-[268px] w-full md:w-[661px] flex flex-col items-center md:items-start justify-center space-y-4 md:pl-10'>
        <h1 className='text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-center md:text-left'>
          The unseen of spending three years at Pixelgrade
        </h1>
        <p className='text-sm md:text-base leading-7 mt-2 md:mt-6 text-center md:text-left'>
          Embarking on a journey with Pixelgrade isn&apos;t just a commitment; it&apos;s an immersion into a culture of innovation, growth, and unwavering dedication. Over the past three years, our team at Pixelgrade has been crafting not just solutions but experiences that redefine the digital landscape.
        </p>
        <Button className='bg-primary px-4 rounded-none py-2 mt-5 text-white'>Learn More</Button>
      </div>
    </div>
  );
};

export default Unlock;
