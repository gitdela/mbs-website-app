import { Volume2 } from 'lucide-react';
import React from 'react';
import Marquee from 'react-fast-marquee';

const Marque = ({ announcements }: any) => {
  const editedAnnouncements = announcements.map((item: string) => {
    return item + '.\u00A0\u00A0';
  });

  return (
    <div className='w-full px-4 py-3 md:py-0 mt-10 md:mt-20 h-[40px] md:h-[50px] flex justify-center items-center gap-1 md:gap-5 bg-gradient-to-r from-transparent via-[#2D5992] to-[#2684FC] text-white'>
      {/* <div className='w-full px-4 py-3 md:py-0 mt-10 md:mt-20 h-[40px] md:h-[50px] flex justify-center items-center gap-1 md:gap-5 bg-transparent text-white'> */}
      <Volume2 size={20} />
      <Marquee speed={20} pauseOnHover={true} style={{ width: '100%' }}>
        {editedAnnouncements.map((item: string, index: number) => (
          <p key={index} className='mb-0 text-xs md:text-lg'>
            {item}
          </p>
        ))}
      </Marquee>
    </div>
  );
};

export default Marque;
