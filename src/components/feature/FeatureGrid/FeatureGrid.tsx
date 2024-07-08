import {
  CreditCardIcon,
  HistoryIcon,
  LineChartIcon,
  LockIcon,
  StarIcon,
  WalletIcon,
} from 'lucide-react';
import Link from 'next/link';
import React from 'react';
// import { Fade } from 'react-reveal';
import Image from 'next/image';

const FeatureGrid = () => {
  const data = [
    {
      title: 'Timely Support Response',
      desc: 'Our support team is available all the time to assist you with all your requests and questions',
      Icon: '/assets/timely.svg',
      link: '/contact',
    },
    {
      title: 'Reputation Based System',
      desc: 'Our rating system enables you to identify trusted traders to trade with.',
      Icon: '/assets/reputation.svg',
      link: 'https://app.mybitstore.com/auth',
    },
    {
      title: 'Competitive Low Fees',
      desc: 'Start trading on Mybitstore and enjoy lower fees on all your trades',
      Icon: '/assets/competitive.svg',
      link: '/feesandrates',
    },
    {
      title: 'Secured Escrow Wallet',
      desc: 'You can trade securely via P2P thanks to our reliable escrow service. If necessary, we offer excellent mediators to quickly resolve conflicts.',
      Icon: '/assets/secure.svg',
      link: '/terms',
    },
    {
      title: 'Simple and Instant withdrawals',
      desc: 'Enjoy easy and instant withdrawals from Mybitstore wallet to other external wallets.',
      Icon: '/assets/simple.png',
      link: 'https://app.mybitstore.com/auth',
    },
    {
      title: 'Get Free Wallet',
      desc: 'Get a free bitcoin wallet with Mybitstore and enjoy your cryptocurrency experience.',
      Icon: '/assets/wallet.svg',
      link: 'https://app.mybitstore.com/auth/register',
    },
  ];
  return (
    <div className='pb-12 md:py-12 md:pb-20'>
      <div className='w-full px-4 text-center sm:px-6 lg:px-8'>
        <h3 className='py-14 text-center text-white font-bold text-lg tracking-tight md:text-4xl'>
          Why you should choose Mybitstore for cryptocurrency trading
        </h3>
        <div className='grid grid-cols-featureGridXS md:grid-cols-featureGridMD gap-8'>
          {data.map(({ Icon, title, desc, link }, index) => (
            <div className='py-6 px-2 bg-night-50 rounded' key={index}>
              <div className='flex flex-col items-start px-4'>
                <div className='flex items-center juscetify-start gap-2'>
                  <Image
                    src={Icon}
                    alt='logo'
                    height={20}
                    width={20}
                    className='bg-[#53BA9B] rounded-full p-0.5 text-white w-8 h-8'
                  />
                  <h3 className='py-4 mb-0 text-base md:text-lg text-white text-left font-medium'>
                    {title}
                  </h3>
                </div>
                <p className='text-sm md:text-base text-start text-muted-foreground mb-0'>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureGrid;
