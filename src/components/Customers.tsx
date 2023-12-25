import { SvGicons } from '@/icons/icons';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Customers = () => {
  return (
    <section className='py-10 px-4 md:px-10 lg:px-20 xl:px-32 flex flex-col md:flex-row items-center gap-10'>
      <div className='w-full md:w-[320px] h-[320px] mb-6 md:mb-0'>
        <Image src="/pic_5.jpg" width={320} height={320} alt='' />
      </div>
      <div className='w-full md:w-[748px] flex flex-col justify-center'>
        <div className='h-[244px] justify-center flex flex-col'>
          <p className='leading-7 mt-6 md:mt-0 text-center md:text-left'>
            At Nexcent, we take pride in our commitment to excellence and are honored to have had the opportunity to collaborate with some of the world&#39;s leading Fortune 500 companies. Our partnerships with these industry giants reflect the trust they place in our services and the value we bring to the table.
          </p>
          <h2 className='font-semibold text-xl text-primary mt-4 md:mt-6 text-center md:text-left'>
            Tim Fold
          </h2>
          <p className='font-semibold mt-2 md:mt-4 text-center md:text-left'>
            British Dragon Boat Racing Association
          </p>
        </div>
        <div className='flex flex-col md:flex-row gap-6 mt-6'>
          <div className='h-[48px] w-full md:w-[493px] justify-between overflow-hidden flex'>
            {SvGicons.map((icon) => (
              <div className='w-[48px]' key={icon.id}>
                {icon.svg}
              </div>
            ))}
          </div>
          <div className='flex justify-center items-center mt-4 md:mt-0'>
            <Link className='flex items-center text-primary hover:text-amber-700' href='#'>
                <p className='leading-none font-semibold'>meet all customers</p>
                <ArrowRight className='ml-2' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
