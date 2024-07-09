import emptyadsjson from '../../../public/assets/emptyads.json';
import { Player } from '@lottiefiles/react-lottie-player';
import { Button } from './button';
import Link from 'next/link';
import { CirclePlus, CirclePlusIcon, Plus } from 'lucide-react';

const EmptyAds = () => {
  return (
    <div className='max-w-screen-xl mx-auto flex flex-col gap-8 items-center justify-center '>
      {/* <Lottie style={{ height: 300, width: 300 }} animationData={EmptyAds} /> */}
      <Player
        loop
        src={emptyadsjson}
        autoplay
        speed={0.5}
        style={{ height: 300, width: 300 }}
      />

      <div className='text-white text-sm md:text-base flex flex-col gap-4'>
        <p>No ads available yet for this search</p>
        <Button
          asChild
          variant={'default'}
          className='bg-blue-500 flex justify-center items-center mx-auto rounded hover:bg-blue-500'
        >
          <Link href='https://app.mybitstore.com/auth'>
            <CirclePlusIcon className='w-4 h-4 me-2' />
            Create an ad
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default EmptyAds;
