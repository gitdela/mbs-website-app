import { Heading } from '@/components/ui/header';
import Affiliate from './referandearn';
import polyhakaibg from '../../../../public/assets/poly-refer.svg';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Gift } from 'lucide-react';
import Container from '@/components/Container';

const ReferAndEarn = () => {
  return (
    <section className='pt-24'>
      <Container>
        <Heading
          title='Refer and Earn'
          description='Share Mybitstore to friends and family and earn commissions on their trades.'
          src=''
          alt='refer and earn'
        />
        <Affiliate />
      </Container>
      <div className='relative'>
        <Image
          src={polyhakaibg}
          alt='poly background'
          className='w-full md:h-[300px] object-cover'
        />
        <div className='absolute flex flex-col gap-3 md:gap-8 items-center justify-center inset-0 left-1/2 transform -translate-x-1/2'>
          <h1 className='text-white text-center font-bold text-base md:text-2xl'>
            LOGIN TO CHECK YOUR EARNINGS
          </h1>
          <Button
            variant={'default'}
            className='text-white w-36 md:w-48 py-4 md:py-7 font-semibold  bg-[#2584fc] hover:bg-[#2584fc] hover:text-white'
          >
            <Link
              className='text-white hover:text-white flex gap-2 items-center justify-center'
              href={'https://app.mybitstore.com/auth'}
            >
              <span>LOG IN</span>
              <Gift size={15} />
            </Link>
          </Button>
          {/* <p className='text-muted-foreground'>Terms and Conditions Apply</p> */}
        </div>
      </div>
    </section>
  );
};

export default ReferAndEarn;
