import { fetchCoins } from '@/app/(home)/actions';
import P2PBody from './p2p-body';
import P2PHeader from './p2p-header';

const P2PAds = async () => {
  const data: any = await fetchCoins();
  return (
    <div className='py-10 pt-12 md:pt-24'>
      <P2PHeader />
      <P2PBody data={data} />
    </div>
  );
};

export default P2PAds;
