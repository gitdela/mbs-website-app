import Image from 'next/image';
import registerearn from '../../../../public/assets/registerearn.png';
import shareearn from '../../../../public/assets/shareearn.png';
import dividend from '../../../../public/assets/divideearn.png';

const HowItWorks = () => {
  return (
    <div>
      <div className='bg-[#212741] flex flex-col max-w-4xl mx-auto py-10 pt-6'>
        <h1 className='text-white font-bold text-2xl md:text-4xl text-center py-6 md:py-8'>
          HOW DOES IT WORK?
        </h1>
        <div className='flex flex-col'>
          <div className='flex gap-8 border-b border-[#6F7794]/20 py-4 md:py-16 px-4'>
            <div className='flex md:justify-center items-center'>
              <Image
                src={registerearn}
                alt='megahone'
                className='w-32 md:w-24'
              />
            </div>
            <div className=''>
              <h1 className='text-left text-md md:text-2xl lg:text-3xl font-bold text-white'>
                Invite and Register
              </h1>
              <p className='text-sm md:text-base text-muted-foreground'>
                Invite your friends and contacts to join Mybitstore by sharing
                your unique referral code. Each registration through your code
                brings you closer to potential rewards.
              </p>
            </div>
          </div>
          <div className='flex flex-row-reverse gap-8 border-b border-[#6F7794]/20 py-4 md:py-16 px-4'>
            <div className='flex md:justify-center items-center'>
              <Image src={shareearn} alt='hold' className='w-32 md:w-24' />
            </div>
            <div className=''>
              <h1 className='text-left text-md md:text-2xl lg:text-3xl font-bold text-white'>
                Encourage Active Trading
              </h1>
              <p className='text-sm md:text-base text-muted-foreground'>
                Ensure your referrals are actively trading on Mybitstore. Their
                engagement in buying, selling, or trading is crucial for
                qualification in the referral program.
              </p>
            </div>
          </div>
          <div className='flex gap-8 py-4 md:py-16 px-4'>
            <div className='flex md:justify-center items-center'>
              <Image src={dividend} alt='hold' className='w-32 md:w-24' />
            </div>
            <div className=''>
              <h1 className='text-left text-md md:text-2xl lg:text-3xl font-bold text-white'>
                Earn Commissions
              </h1>
              <p className='text-sm md:text-base text-muted-foreground'>
                Reap the benefits of your referrals trading activities. Earn
                commissions based on the volume and frequency of their trades,
                turning their engagement into your earnings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
