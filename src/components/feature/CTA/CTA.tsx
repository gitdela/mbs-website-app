import React from 'react';
import Image from 'next/image';

import ussdflyerone from '../../../../public/assets/ussd-flyer-one.webp';
import ussdflyertwo from '../../../../public/assets/ussd-flyer-two.webp';

const CTA = () => {
  return (
    <div className='text-white'>
      <div className='w-full px-4 md:container lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto flex flex-col items-center py-8 pt-6 sm:px-0'>
        <div className='md:flex justify-center gap-2 md:gap-8 pt-14 pb-8 space-y-4 md:space-y-0'>
          <div>
            <Image
              src={ussdflyerone}
              alt='mybitstore-flyer'
              width={600}
              height={200}
            />
          </div>
          <div>
            <Image
              src={ussdflyertwo}
              alt='mybitstore-flyer'
              width={600}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
