import React from 'react';
import referandearn from '../../../../public/assets/image.png';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { Heading } from '../../../components/ui/header';
// import HowItWorks from './HowItWorks';
// import { Button } from '../ui/button';
import polyhakaibg from '../../../../public/assets/poly-refer.svg';
import { Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HowItWorks from './howitworks';

const Affiliate = () => {
  return (
    <div className='text-white pt-10'>
      <div className='w-full px-4'>
        <Head>
          <title>Mybitstore | Refer & Earn Program</title>
          <meta
            name='description'
            content='Sign up for the MyBitstore affiliate program today. Your earnings are limitless. Easily convert commissions to cash.'
          />
        </Head>

        <div className='grid md:grid-cols-2 justify-center gap-8 items-start md:py-12 pb-12'>
          <div className='flex max-w-lg flex-col items-start gap-10'>
            <div className='flex flex-col'>
              <span className='text-2xl md:text-left md:text-3xl font-medium mb-3'>
                Start Earning With Mybitstore Referals
              </span>
              <p className='text-base md:text-left text-white sm:text-sm md:text-base'>
                Share Mybitstore to friends and family and earn commissions on
                their trades.
              </p>
            </div>
            <Button
              variant={'default'}
              className='bg-[#2584fc] w-full mx-auto rounded-sm hover:bg-[#2584fc] md:py-8 md:px-8'
            >
              <Link
                className='md:ms-0 text-white md:text-lg font-semibold'
                href='https://app.mybitstore.com/auth'
              >
                Get Referral Code
              </Link>
            </Button>
          </div>
          <div className='flex items-center justify-center'>
            <Image
              src={referandearn}
              width={250}
              height={250}
              alt='affiliate'
            />
          </div>
        </div>
      </div>
      <div className='bg-[#212741] w-full my-14 rounded-md'>
        <HowItWorks />
      </div>
    </div>
  );
};

export default Affiliate;
