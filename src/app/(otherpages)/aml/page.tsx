import Container from '@/components/Container';
import { amlData } from './aml';
import AMLHeader from './amlheader';

const AMLPolicy = () => {
  return (
    <Container>
      <div className='w-full py-24 mx-auto text-white'>
        <AMLHeader />
        <div className='grid'>
          {amlData.map((item, index) => (
            <div key={index}>
              <h1 className='text-lg md:text-xl text-white'>{item?.title}</h1>
              <div>
                <span className='text-sm pt-10'>{item?.desc}</span>
                <ul className='space-y-1 pl-8'>
                  {item.discList?.map((list, index) => (
                    <li key={index} className='list-disc text-sm'>
                      {list}
                    </li>
                  ))}
                </ul>
                <ol className='py-3 grid pl-8'>
                  {item.romanList?.map((list, index) => (
                    <li
                      key={index}
                      className='text-sm my-3 list-[lower-roman] '
                    >
                      {list}
                    </li>
                  ))}
                </ol>
                <ol className='pl-8'>
                  {item.numberList?.map((list, index) => (
                    <li key={index} className='text-sm my-3 list-[lower-roman]'>
                      {list}
                    </li>
                  ))}
                </ol>
                <span className='pt-10 my-3 text-sm'>{item?.desc2}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default AMLPolicy;
