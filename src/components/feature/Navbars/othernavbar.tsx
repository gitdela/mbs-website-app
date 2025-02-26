'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import mbslogo from '../../../../public/assets/mbs-logo-white.png';
import mbslogosmall from '../../../../public/assets/mbs-logo-small.svg';
import { Coins, HeartHandshake, Rss, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Container from '@/components/Container';

const OtherNavbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <nav
      className='fixed w-full top-0 left-0 z-30 bg-night-100'
      aria-label='Global'
    >
      <Container>
        <div className='max-w-[1440px] mx-auto px-0 sm:px-4 md:px-8 lg:px-0'>
          <div className='w-full flexBetween font-medium whitespace-nowrap flex-nowrap py-4'>
            {/*first div: desktop logo and nav */}

            <div className='flex items-center justify-between w-full md:w-auto'>
              <Link passHref className='shrink-0' href='/'>
                <Image
                  src={mbslogo}
                  alt='logo'
                  height={150}
                  width={150}
                  className='w-32 md:w-36'
                />
              </Link>
              <div className='hidden text-sm space-x-5 lg:flex md:ml-10'>
                <Link
                  className='text-white hover:text-blue-500 duration-0'
                  href='/p2pads'
                >
                  P2P Ads
                </Link>

                <Link
                  className='text-white hover:text-blue-500 duration-0'
                  href='/bulktrade'
                >
                  OTC/Bulk Trade
                </Link>
                <Link
                  className='text-white hover:text-blue-500 duration-0'
                  href='/referandearn'
                >
                  Refer & Earn
                </Link>
                <Link
                  className='text-white hover:text-blue-500 duration-0'
                  href='https://blog.mybitstore.com'
                >
                  Blog
                </Link>
              </div>
            </div>
            <div className='flex justify-end items-center sm:space-x-4'>
              {/* buttons */}
              <div className='hidden sm:flex flex-nowrap justify-center items-center gap-3'>
                <Button
                  asChild
                  variant={'ghost'}
                  className='bg-[#262d4e] hover:bg-[#1c2344]'
                >
                  <Link
                    href='https://app.mybitstore.com/auth'
                    className='text-white hover:text-gray-300 transition-colors duration-150'
                  >
                    Log In
                  </Link>
                </Button>
                <Button
                  asChild
                  className='bg-[#2684FC] w-fit hover:bg-[#1d6efb] transition-colors duration-150'
                >
                  <Link
                    href='https://app.mybitstore.com/auth/register'
                    className='hover:text-white'
                  >
                    Get Started
                  </Link>
                </Button>
              </div>
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                id='menu-btn'
                className={`block mt-2 hamburger lg:hidden focus:outline-none z-50 ${
                  showMobileMenu ? 'open' : ''
                }`}
              >
                <span className='hamburger-top'></span>
                <span className='hamburger-middle'></span>
                <span className='hamburger-bottom'></span>
              </button>
            </div>
          </div>
        </div>
      </Container>
      {/* mobile nav */}

      {showMobileMenu && (
        <div className='fixed left-0 top-0 px-4 py-6 h-screen w-full lg:hidden md:container mx-auto bg-night-100 z-20'>
          <div className='flex items-center justify-between mb-4'>
            <Image
              priority
              src={mbslogosmall}
              alt='logo'
              height={30}
              width={30}
            />
          </div>

          <div className='flex gap-2 my-8'>
            <Button
              asChild
              variant={'secondary'}
              className='bg-[#f1f5f9] w-full py-3'
            >
              <Link
                href='https://app.mybitstore.com/auth'
                className='hover:text-blue-500 transition-colors duration-150'
              >
                Log In
              </Link>
            </Button>
            <Button
              asChild
              className='w-full bg-[#2684FC] hover:bg-[#1d6efb] transition-colors duration-150 py-3'
            >
              <Link href='https://app.mybitstore.com/auth/register'>
                Get Started
              </Link>
            </Button>
          </div>

          <div className='flex flex-col space-y-8'>
            <Link
              className='flex gap-3 py-3 rounded-md text-base leading-6 text-white font-semibold'
              href='/p2pads'
              onClick={() => setShowMobileMenu(false)}
            >
              <Search size={24} className='font-bold' />
              P2P Ads
            </Link>

            <Link
              className='flex gap-3 py-2 rounded-md text-base leading-6 text-white font-semibold'
              href='/bulktrade'
              onClick={() => setShowMobileMenu(false)}
            >
              <Coins size={24} />
              OTC/Bulk Trade
            </Link>
            <Link
              className='flex gap-3 py-2 rounded-md text-base leading-6 text-white font-semibold'
              href='/referandearn'
              onClick={() => setShowMobileMenu(false)}
            >
              <HeartHandshake size={24} />
              Refer & Earn
            </Link>
            <Link
              href='https://blog.mybitstore.com'
              className='flex gap-3 py-2 rounded-md text-base leading-6 text-white font-semibold'
              onClick={() => setShowMobileMenu(false)}
            >
              <Rss size={24} />
              Blog
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default OtherNavbar;
