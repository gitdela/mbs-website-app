import loaderImage from '../../../public/assets/cryptoloader.json';
import { Player } from '@lottiefiles/react-lottie-player';

const Loader = () => {
  return (
    <div className='max-w-screen-xl mx-auto flex items-center justify-center '>
      {/* <Lottie style={{ height: 300, width: 300 }} animationData={Loader} /> */}
      <Player
        loop
        src={loaderImage}
        autoplay
        speed={4}
        style={{ height: 300, width: 300 }}
      />
    </div>
  );
};

export default Loader;
