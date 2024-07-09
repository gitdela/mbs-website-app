'use client';

import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import qrImage from '../../../../public/assets/app-qr-code.jpg';
import downloadontheappstore from '../../../../public/assets/downloadontheappstore.png';
import getitongoogleplay from '../../../../public/assets/getitongoogleplay.png';

// import convert from '../../../../../public/assets/convert-crs.svg';
// import peers from '../../../../public/assets/trade-crs.svg';
// import buycrypto from '../../../../public/assets/offers-crs.svg';
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from '@/components/ui/carousel';
import TrackingTextUI from '@/components/ui/trackingtextui';
import CountUpUI from '@/components/ui/countupui';
import heroGrid from '../../../../public/assets/xx.png';

const Hero = () => {
  return (
    <section className='w-full lg:px-24'>
      {/* <div className='bg-world bg-no-repeat bg-top w-full'> */}

      <div className='w-full grid lg:grid-cols-2 gap-12 md:gap-24 pt-24 md:pt-32 pb-12'>
        <div className='flex flex-col space-y-8 justify-center lg:items-start items-center'>
          <TrackingTextUI />
          <div className='w-full grid justify-center lg:justify-start gap-6 md:gap-8'>
            <div className='w-full flex flex-col text-white gap-6 max-md:items-center justify-center'>
              <Button className='hidden md:block h-auto px-0' variant='link'>
                <Link href={'/'} className='flex justify-start items-center'>
                  <Image
                    className='rounded'
                    src={qrImage}
                    alt='qr code'
                    width={120}
                    height={120}
                    priority
                  />
                </Link>
              </Button>
              <div className='hidden md:flex flex-col items-center md:items-start'>
                <p>Scan to download the app</p>
                <p className='font-bold text-xl'>iOS and Android</p>
              </div>
              <div className='flex md:hidden flex-col items-center md:items-start'>
                <p className='font-semibold text-xl mb-1'>
                  Download the new app
                </p>
                <p className='text-sm'>on iOS and Android</p>
              </div>
            </div>
            <div className='flex flex-row-reverse gap-4 lg:justify-start justify-center items-center'>
              <Link
                href={
                  'https://play.google.com/store/apps/details?id=app.mybitstore.com'
                }
                target={'_blank'}
                className='flex justify-center items-center'
              >
                <Image
                  src={getitongoogleplay}
                  alt='playstore'
                  height={120}
                  width={100}
                />
              </Link>
              <Link
                href={
                  'https://apps.apple.com/us/app/mybitstore-buy-sell-bitcoin/id1579519877'
                }
                target={'_blank'}
                className='flex justify-center items-center'
              >
                <Image
                  src={downloadontheappstore}
                  alt='appstore'
                  height={120}
                  width={100}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className='flex px-6 md:px-0 justify-center md:justify-end items-center'>
          <Image
            src={heroGrid}
            alt='gif'
            className='w-full h-full rounded-md flex justify-end items-center'
          />
        </div>
        {/* <Carousel
                opts={{
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 2000,
                  }),
                ]}
                className='flex justify-end items-center'
              >
                <CarouselContent>
                  <CarouselItem className='flex justify-center items-center'>
                    <Image
                      src={buycrypto}
                      alt='Side Banner'
                      priority
                      width={200}
                      height={200}
                    />
                  </CarouselItem>
                  <CarouselItem className='flex justify-center items-center'>
                    <Image
                      src={convert}
                      alt='Side Banner'
                      priority
                      width={200}
                      height={200}
                    />
                  </CarouselItem>
                  <CarouselItem className='flex justify-center items-center'>
                    <Image
                      src={peers}
                      alt='Side Banner'
                      priority
                      width={200}
                      height={200}
                    />
                  </CarouselItem>
                </CarouselContent>
              </Carousel> */}
      </div>
      <CountUpUI />

      {/* </div> */}
    </section>
  );
};

export default Hero;
