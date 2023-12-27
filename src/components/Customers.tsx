import { SvGicons } from '@/icons/icons';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Customers = () => {
  return (
    <section className='flex flex-col md:flex-row'>
      <div className='block md:hidden'>
        <Image src="/pic_5.jpg" alt="Image" width={433} height={433} className="rounded-md object-cover" />
      </div>
      <div className='flex flex-col justify-center'>
        <div className='h-[100vh] justify-center  items-center flex flex-col'>


          <div><p className='text-step-0 mt-4'>
            At Nexcent, we take pride in our commitment to excellence and are honored to have had the opportunity to collaborate with some of the world&#39;s leading Fortune 500 companies. Our partnerships with these industry giants reflect the trust they place in our services and the value we bring to the table.
          </p>
            <h2 className='font-semibold text-primary text-step-1'>
              Tim Fold
            </h2>
            <p className='text-step-1'>
              British Dragon Boat Racing Association
            </p>
          </div>
          <div className='flex flex-col items-center justify-center pt-8  gap-6 mt-6'>
            <div className='grid grid-cols-2  gap-5 md:grid-cols-3 lg:grid-cols-4 '>
              {SvGicons.map((icon) => (
                <div className='w-[48px]' key={icon.id}>
                  {icon.svg}
                </div>
              ))}
            </div>
          </div>
          <div className='flex  justify-center items-center mt-4 md:mt-0'>
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
