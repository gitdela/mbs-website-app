import { Heading } from '@/components/ui/header';
import { refundData } from './refund';
import Container from '@/components/Container';

const RefundPolicy = () => {
  return (
    <Container>
      <div className='w-full pt-24'>
        <div className='w-full hidden md:block py-6'>
          <Heading
            title='Refund Policy'
            src='/assets/refund.svg'
            alt='refund policy'
            imageWidth={100}
            imageHeight={100}
          />
        </div>
        <div className='w-full block md:hidden'>
          <Heading
            title='Refund Policy'
            src='/assets/refund.svg'
            alt='refund policy'
            imageWidth={50}
            imageHeight={50}
          />
        </div>
        <div className=''>
          {refundData.map((item, index) => (
            <div className='grid text-white' key={index}>
              <h1 className='text-lg md:text-2xl md:mb-4 text-white'>
                {item?.header}
              </h1>
              <div className='mb-8 text-sm'>
                <span className='text-sm'>{item?.desc}</span>
                <span className='text-sm'>{item?.desc2}</span>
                <ul className='md:pl-8'>
                  {item.list?.map((list, index) => (
                    <li key={index} className='pt-3'>
                      {list}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default RefundPolicy;
