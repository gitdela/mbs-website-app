import React from 'react';
import CountUp from 'react-countup';

const CountUpUI = () => {
  return (
    <div className='w-full padding-x-container md:mt-24 mx-auto text-white grid gap-x-10 grid-cols-3 items-center md:items-end justify-around'>
      <div className='flex justify-center items-center'>
        <p className='text-lg font-semibold md:text-4xl mb-0'>
          <CountUp end={100} />
          K+
        </p>
      </div>
      <div className='flex justify-center items-center'>
        <p className='text-lg font-semibold md:text-4xl mb-0'>
          <CountUp end={5} />
        </p>
      </div>
      <div className='flex justify-center items-center'>
        <p className='text-lg font-semibold md:text-4xl mb-0'>
          <CountUp end={20} prefix='$' />
          M+
        </p>
      </div>
      <div className='flex justify-center items-center'>
        <p className='text-xs sm:text-sm font-semibold text-center md:text-sm text-muted-foreground'>
          Users
        </p>
      </div>
      <div className='flex justify-center items-center'>
        <p className='text-xs sm:text-sm font-semibold text-center md:text-sm text-muted-foreground'>
          Countries Supported
        </p>
      </div>
      <div className='flex justify-center items-center'>
        <p className='text-xs sm:text-sm font-semibold text-center md:text-sm text-muted-foreground'>
          Trading value per month
        </p>
      </div>
    </div>
  );
};

export default CountUpUI;
