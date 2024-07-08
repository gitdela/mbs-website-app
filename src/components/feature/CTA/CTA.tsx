'use client';

import React from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const CTA = ({ banners }: any) => {
  return (
    <div className='text-white py-10'>
      <div className='hidden w-full md:grid grid-cols-3 items-center py-8 pt-6 gap-4'>
        {banners.map((item: string, index: number) => (
          <div key={index} className='rounded-md'>
            <Image
              src={item}
              alt={`mybitstore-flyer-${index}`}
              width={600}
              height={200}
              className='rounded-md'
            />
          </div>
        ))}
      </div>
      <div className='w-full flex justify-center items-center md:hidden'>
        <Carousel
          opts={{
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className='w-full max-w-xs'
        >
          <CarouselContent>
            {banners.map((banner: string, index: number) => (
              <CarouselItem key={index}>
                <Image
                  src={banner}
                  alt={`mybitstore-flyer-${index}`}
                  width={600}
                  height={200}
                  priority
                  className='rounded-md'
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious /> */}
          {/* <CarouselNext /> */}
        </Carousel>
      </div>
    </div>
  );
};

export default CTA;
