import Container from '@/components/Container';
import Hero from '@/components/feature/Hero/Hero';
import HomeNavbar from '@/components/feature/Navbars/homenavbar';
import Marque from '@/components/ui/marque';
import Image from 'next/image';
import heroworld from '../../../public/assets/world.svg';
import CTA from '@/components/feature/CTA/CTA';
import FeatureGrid from '@/components/feature/FeatureGrid/FeatureGrid';
import { RateSection } from '@/components/feature/RateSection/ratesection';
import { fetchCoins } from './actions';

export default async function Home() {
  const data: any = await fetchCoins();

  return (
    <main>
      <div className='relative'>
        <Image
          src={heroworld}
          alt='world'
          priority
          className='absolute bg-center left-1/2 transform -translate-x-1/2'
        />
        <div className='absolute bg-gradient-to-tr from-[#1D1D31] to-[#273462] inset-0 -z-10'></div>
        <Container>
          <HomeNavbar />
          <Hero />
        </Container>
        <Marque announcements={data.info.announcements} />
        <Container>
          <CTA banners={data.info.banners} />
        </Container>
      </div>
      <Container>
        <RateSection rates={data.info.rates} />
      </Container>
      <div className='bg-night-100'>
        <Container>
          <FeatureGrid />
        </Container>
      </div>
    </main>
  );
}
