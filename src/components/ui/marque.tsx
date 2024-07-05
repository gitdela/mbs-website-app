import { Volume2 } from 'lucide-react';
import React from 'react';
import Marquee from 'react-fast-marquee';

const Marque = () => {
  return (
    <div className='w-full px-4 py-3 md:py-0 mt-20 md:h-[50px] flex justify-center items-center gap-1 md:gap-5 bg-gradient-to-r from-transparent via-[#2D5992] to-[#2684FC] text-white'>
      <Volume2 size={20} />
      <Marquee pauseOnHover={true} style={{ width: '100%' }}>
        <p className='mb-0 text-xs md:text-lg'>
          Mybitstore puts you in charge of Rates on $1000+ Trades. Get Ready to
          Dominate the Market.
        </p>
      </Marquee>
    </div>
  );
};

export default Marque;
