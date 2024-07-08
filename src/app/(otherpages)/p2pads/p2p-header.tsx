import Image from 'next/image';
import p2pheaderwebp from '../../../../public/assets/p2pheader.webp';
import Container from '@/components/Container';

const P2PHeader = () => {
  return (
    <section className='py-8'>
      <Container>
        <div className='bg-night-50 flex justify-between py-2 px-6 items-center md:rounded'>
          <div>
            <h1 className='text-md md:text-2xl text-white mb-0'>
              Explore our P2P Ads{' '}
            </h1>
            <span className='text-gray-500 text-sm md:text-base'>
              Using Various Payment Methods
            </span>
          </div>
          <Image
            src={p2pheaderwebp}
            width={100}
            height={100}
            alt='buy bitcoin'
          />
        </div>
      </Container>
    </section>
  );
};

export default P2PHeader;
