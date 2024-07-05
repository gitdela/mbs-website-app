'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';

const RateSection = () => {
  //   const { t } = useTranslation();
  const fetchCoins = async () => {
    const res = fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cbitcoin-cash%2Cethereum%2Clitecoin%2Ctether%2Cusd-coin%2Ctrue-usd%2Ctron%2Cdash&order=market_cap_desc&per_page=100&page=1&sparkline=true&locale=en'
    );
    const data = (await res).json();

    return data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ['coins'],
    queryFn: fetchCoins,
    refetchOnWindowFocus: true,
  });

  if (isLoading || error) return null;

  return (
    <div className='py-24'>
      <div className='w-full container lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-0'>
        <p className='mt-2 text-center text-2xl font-extrabold text-white tracking-tight'>
          Todays Cryptocurrency Prices By Market Cap
        </p>

        <div className='w-full'>
          <table className='text-black w-full md:w-[80%] mx-auto mb-6'>
            <caption className='caption-top px-4 py-4 mt-5 mx-auto text-center text-sm text-muted-foreground'>
              This page displays the latest prices, 24-hour trading volume,
              price changes, and market capitalizations for all cryptocurrencies
              on Mybitstore.{' '}
              <span className='hidden md:inline-block'>
                Users can quickly access key information about these digital
                assets and access the trade page from here.
              </span>
            </caption>

            <tr>
              <th
                scope='col'
                className='px-2 md:px-6 py-4 text-left text-sm text-muted-foreground whitespace-nowrap text-white'
              >
                Name
              </th>
              <th
                scope='col'
                className='md:px-6 py-4 text-right text-sm text-muted-foreground whitespace-nowrap text-white'
              >
                Price (USD)
              </th>
              <th
                scope='col'
                className='md:px-6 py-4 text-right text-sm text-muted-foreground whitespace-nowrap text-white'
              >
                Price Change
              </th>
              <th
                scope='col'
                className='md:px-6 py-4 text-right text-sm hidden md:table-cell text-muted-foreground whitespace-nowrap text-white'
              >
                Change
              </th>
              <th
                scope='col'
                className='md:px-6 py-4 text-right text-sm text-muted-foreground hidden md:table-cell whitespace-nowrap text-white'
              >
                Action
              </th>
            </tr>

            {data?.map((value: any, index: any) => (
              <tbody key={index} className='cursor-pointer'>
                <tr className=' '>
                  <td className='px-2 md:px-6 py-4 whitespace-nowrap text-sm text-white flex justify-start'>
                    <div className='font-medium flex items-center gap-1 md:gap-2'>
                      <Image
                        priority
                        src={value.image}
                        alt='crypto'
                        height={32}
                        width={32}
                        className='w-8 h-8'
                      />

                      {/* <div className='px-2 whitespace-pre-wrap'> */}
                      <div className='flex flex-col items-start'>
                        <span className='text-[#6e7794] capitalize'>
                          {value?.name}
                        </span>
                        <span className='uppercase font-light text-white'>
                          {value?.symbol}
                        </span>
                      </div>
                      {/* </div> */}
                    </div>
                  </td>
                  <td className='px-2 md:px-6 py-4 whitespace-nowrap text-sm text-right text-white justify-between'>
                    $
                    {Number(value.current_price).toLocaleString(undefined, {
                      maximumFractionDigits: 2,
                    })}
                  </td>
                  <td className='px-2 md:px-6 py-4 whitespace-nowrap hidden md:table-cell text-sm lg:text-right text-white justify-between'>
                    {value.price_change_24h > 0 ? (
                      <div className='text-green-500 font-semibold'>
                        ${Number(value.price_change_24h).toFixed(3)}
                      </div>
                    ) : (
                      <div className='text-red-500 font-semibold'>
                        ${Number(value.price_change_24h).toFixed(3)}
                      </div>
                    )}
                  </td>
                  <td className='px-2 pl-8 md:pl-0 md:px-6 py-4 whitespace-nowrap text-sm lg:text-right text-white flex justify-end'>
                    {value.price_change_percentage_24h > 0 ? (
                      <div className='bg-[#2caf88] md:bg-transparent w-full py-3 text-xs rounded text-center md:text-right text-white md:text-green-500 font-semibold'>
                        {value.price_change_percentage_24h.toFixed(2)}%
                      </div>
                    ) : (
                      <div className='bg-red-500 md:bg-transparent w-full py-3 rounded text-xs text-center md:text-right text-white md:text-green-500 font-semibold'>
                        {value.price_change_percentage_24h.toFixed(2)}%
                      </div>
                    )}
                  </td>
                  <td className='px-2 md:px-6 py-4 items-center md:justify-end hidden md:table-cell whitespace-nowrap text-sm lg:text-right text-white justify-between'>
                    <div className='flex justify-end items-center w-full'>
                      <Link
                        className='bg-[#2684FC] flex justify-center md:justify-end disabled:bg-gray-400 text-white hover:text-white font-bold py-2 px-6 rounded'
                        href='https://app.mybitstore.com/auth'
                      >
                        Trade
                      </Link>
                    </div>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default RateSection;
