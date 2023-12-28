import { getUnsplashRandomPhotos } from '@/lib/fetchPhotos';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { type UnsplashPhoto } from '../../types';
import { AspectRatio } from '../../ @/components/ui/aspect-ratio';

const CommunityUpdates = async () => {
  const randomPhotos: UnsplashPhoto[] = await getUnsplashRandomPhotos(3);
  return (
    <section className="mt-10 py-5 pb-10 px-4 space-y-4 md:px-10 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {randomPhotos.map((photo) => (
          <UpdateCard key={photo.id} data={photo} />
        ))}
      </div>
    </section>
  );
};



type UpdateCardProps = {
  data: UnsplashPhoto;
};




const UpdateCard = ({ data }: UpdateCardProps) => {
  return (
    <div className='border h-[378px] p-3 w-full md:w-[368px] text-card-foreground flex flex-col max-w-sm  rounded-xl shadow-md overflow-hidden md:max-w-md m-4'>
      <div className='md:max-w-full overflow-auto'>
        <Image src={data.urls.regular} alt="Image" width={400} height={300} loading='lazy' className="rounded-md overflow-y-hidden object-cover" />
      </div>
      <div className=' flex flex-col mb-6 items-center justify-center'>
        <p className='text-center font-semibold text-muted mt-6'>
          {data.alt_description}
        </p>
        <Link className='font-semibold flex text-primary text-center mt-6' href='/#'>
          Read more <ArrowRight />
        </Link>
      </div>
    </div>
  );
};


export default CommunityUpdates;
