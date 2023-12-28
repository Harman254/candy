import Image from 'next/image';
import React from 'react';
import { AspectRatio } from '../../ @/components/ui/aspect-ratio';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className='md:h-[590px] lg:h-[700px] xl:h-[800px] flex flex-col md:flex-row  items-center gap-5 px-6 md:px-20 py-10'>
      <div className='w-full md:w-[50%] flex flex-col items-start'>

        <h1 className='text-[32px] md:text-[48px] lg:text-[56px] leading-none bg-gradient-to-l from-green-600 via-slate-500 to-yellow-500 bg-clip-text text-transparent font-extrabold'>
          Crafting Digital Brilliance
        </h1>
        <p className='text-sm md:text-base lg:text-lg leading-7 mt-3 md:mt-6'>
          Where to grow your business as a photographer: site or social media?
        </p>
        <Link href="/login"> <button className='bg-primary text-white px-6 md:px-10 py-3 mt-6 md:mt-10 hover:bg-primary/75 rounded-full'>
          Join Now
        </button>
        </Link>
      </div>

      <AspectRatio ratio={16 / 9} className="bg-muted">
        <Image
          src="/pic.jpg"
          alt="Hero Image"
          fill
          className="rounded-md object-cover"
        />
      </AspectRatio>
    </section>
  );
};

export default Hero;
