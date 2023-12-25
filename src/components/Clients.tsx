import { SvGicons } from '@/icons/icons';
import React from 'react';

const Clients = () => {
  return (
    <section className="container mx-auto px-4 py-10 md:py-16 flex flex-col items-center">
  <h1 className="text-4xl font-extrabold tracking-tight mb-8">
    Our Clients
  </h1>
  <p className="text-center text-gray-500 mb-8 max-w-md mx-auto">
    We have been working with some Fortune 500+ clients
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {SvGicons.map((icon) => (
      <div key={icon.id} className="w-16 h-16">
        {icon.svg}
      </div>
    ))}
  </div>
</section>
  );
};

export default Clients;
