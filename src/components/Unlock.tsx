import Image from 'next/image';
import React from 'react';
import { Button } from '../../ @/components/ui/button';

const Unlock = () => {
  return (
    <div className='flex flex-col  justify-center items-center gap-6  md:flex-row container mx-auto '>
      <div className='md:max-w-full'>
        <Image src="/pic_4.jpg" alt="Image" width={400} height={300} loading='lazy' className="rounded-md object-cover" />
      </div>
      <div className=' w-full flex flex-col md:items-start items-center leading-none justify-center space-y-4 '>
        <h1 className='text-step-4 mt-4 font-bold tracking-tight'>
          The unseen of spending three years at Pixelgrade
        </h1>
        <p className='text-step-0 text-gray-500'>
          Embarking on a journey with Pixelgrade isn&apos;t just a commitment; it&apos;s an immersion into a culture of innovation, growth, and unwavering dedication. Over the past three years, our team at Pixelgrade has been crafting not just solutions but experiences that redefine the digital landscape.
        </p>
        <Button className='bg-primary px-5 rounded-none py-3 mt-5 text-white'>Learn More</Button>
      </div>
    </div>
  );
};

export default Unlock;
