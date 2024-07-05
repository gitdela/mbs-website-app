import { Heading } from '@/components/ui/header';
import { riskData } from './risk';

const NoticeOfRisk = () => {
  return (
    <section className='py-24'>
      <div className='w-full px-4 md:container lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto text-white'>
        <Heading
          title='Notice of Risk'
          src='/assets/risk.png'
          alt='notice-of-risk'
          imageWidth={50}
          imageHeight={50}
        />
        <div className='grid gap-4'>
          {riskData.map((item, index) => (
            <div className='grid' key={index}>
              <h1 className='font-medium  text-lg md:text-2xl my-2 text-white'>
                {item?.header}
              </h1>
              <span className='my-3 text-sm'>{item?.desc}</span>
              <ul className='grid pl-8'>
                {item.list?.map((list, index) => (
                  <li key={index} className='my-3 list-disc'>
                    {list}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NoticeOfRisk;
