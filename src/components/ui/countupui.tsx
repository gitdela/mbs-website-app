import React from 'react';
import CountUp from 'react-countup';

const CountUpUI = () => {
  return (
    <div className='w-full flexBetween xl:max-container padding-x-container mt-24 mx-auto text-white grid grid-cols-1 gap-8 items-center md:items-end justify-around md:grid-cols-3'>
      <div className='flex flex-col items-center'>
        <p className='text-2xl font-semibold md:text-4xl mb-0'>
          <CountUp end={100} />
          K+
        </p>
        <span className='text-xs font-semibold text-center md:text-sm text-muted-foreground'>
          Clients
        </span>
      </div>
      <div className='flex flex-col items-center'>
        <p className='text-2xl font-semibold md:text-4xl mb-0'>
          <CountUp end={5} />
        </p>
        <span className='text-xs font-semibold text-center md:text-sm text-muted-foreground'>
          Countries Supported
        </span>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <p className='text-2xl font-semibold md:text-4xl mb-0'>
          <CountUp end={20} prefix='$' />
          M+
        </p>
        <span className='text-xs font-semibold text-center md:text-sm text-muted-foreground'>
          Trading value per month
        </span>
      </div>
    </div>
  );
};

export default CountUpUI;
