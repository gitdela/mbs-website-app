import Image from 'next/image';
import p2pheaderwebp from '../../../../public/assets/p2pheader.webp';

const P2PHeader = () => {
  return (
    <section className='py-8'>
      <div className='bg-[#212741] w-full md:container lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto flex justify-between py-2 px-6 items-center md:rounded'>
        <div>
          <h1 className='text-xl md:text-2xl text-white mb-0'>
            Explore our P2P Ads{' '}
          </h1>
          <span className='text-gray-500'>Using Various Payment Methods</span>
        </div>
        <Image src={p2pheaderwebp} width={100} height={100} alt='buy bitcoin' />
      </div>
    </section>
  );
};

export default P2PHeader;
