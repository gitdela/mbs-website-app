import Image from 'next/image';
import amlheader from '../../../../public/assets/amlheader.svg';
const AMLHeader = () => {
  return (
    <section className='py-8'>
      <div className='bg-[#212741] container mx-auto flex justify-between py-2 px-6 items-center rounded'>
        <div>
          <h1 className='text-sm md:text-2xl text-white mb-0'>
            ANTI-MONEY LAUNDERING POLICY AND MANUAL
          </h1>
          <span className='text-muted-foreground'>
            Using Various Payment Methods
          </span>
        </div>
        <Image src={amlheader} width={100} height={100} alt='buy bitcoin' />
      </div>
    </section>
  );
};

export default AMLHeader;
