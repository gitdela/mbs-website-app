import Link from 'next/link';
import Image from 'next/image';
import { fetchCoins } from '@/app/(home)/actions';

interface Props {
  rates: any;
}

export function RateSection({ rates }: Props) {
  return (
    <div className='pt-12 max-w-6xl mx-auto'>
      <div className='w-full'>
        <p className='mt-2 text-center text-lg md:text-2xl mb-4 font-semibold text-white'>
          Todays Cryptocurrency Prices By Market Cap
        </p>

        <div className='w-full'>
          <table className='w-full md:w-[80%] mx-auto mb-6'>
            <caption className='caption-top py-4 mx-auto text-center text-sm mb-2 text-muted-foreground'>
              This page displays the latest prices, 24-hour trading volume,
              price changes, and market capitalizations for all cryptocurrencies
              on Mybitstore.
            </caption>

            <thead className='bg-night-50 font-semibold'>
              <tr className=''>
                <th
                  scope='col'
                  className='px-4 md:px-6 text-left py-5 whitespace-nowrap text-white text-xs md:text-sm'
                >
                  Name
                </th>
                <th
                  scope='col'
                  className='px-2 md:px-6 text-right whitespace-nowrap text-white text-xs md:text-sm'
                >
                  Price (USD)
                </th>
                <th
                  scope='col'
                  className='px-2 md:px-6 text-right hidden md:table-cell whitespace-nowrap text-white text-xs md:text-sm'
                >
                  Last Price
                </th>
                <th
                  scope='col'
                  className='px-4 md:px-6 text-right md:table-cell text-white text-xs md:text-sm'
                >
                  <span className='hidden md:block'>24h % Change</span>
                  <span className='md:hidden'>24h % Chg</span>
                </th>
                {/* <th
                  scope='col'
                  className='md:px-6 text-right hidden md:table-cell whitespace-nowrap text-white font-normal text-xs md:text-sm'
                >
                  Action
                </th> */}
              </tr>
            </thead>

            <tbody className='md:divide-y divide-[#2D5992]/20 border-[#2D5992] py-8'>
              {rates.length > 0 &&
                rates.map((value: any, index: any) => (
                  <tr key={index} className='cursor-pointer'>
                    <td className='px-2 md:px-6 py-5 whitespace-nowrap text-sm text-white flex w-fit items-center gap-1 md:gap-2'>
                      <Image
                        priority
                        src={value.image}
                        alt='crypto'
                        height={32}
                        width={32}
                        className='w-6 h-6 md:w-8 md:h-8'
                      />
                      <div className='flex flex-col items-start'>
                        <span className='text-xs md:text-base font-semibold capitalize'>
                          {value.label}
                        </span>
                        <span className='uppercase text-xs md:text-base font-medium text-muted-foreground'>
                          {value.ticker}
                        </span>
                      </div>
                    </td>
                    <td className='px-2 md:px-6 py-4 whitespace-nowrap text-xs md:text-base text-right text-white'>
                      <div className='flex flex-col justify-center'>
                        <span className='text-sm font-medium'>
                          $
                          {Number(value.current_price).toLocaleString(
                            undefined,
                            {
                              minimumFractionDigits: 2,
                            }
                          )}
                        </span>
                        <span className='text-xs font-medium text-muted-foreground md:hidden'>
                          $
                          {Number(value.last_price).toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                          })}
                        </span>
                      </div>
                    </td>
                    <td className='px-2 md:px-6 py-4 hidden md:table-cell whitespace-nowrap text-sm text-right text-white'>
                      $
                      {Number(value.last_price).toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                      })}
                    </td>
                    <td className='px-2 ps-8 md:px-6 whitespace-nowrap text-right text-white'>
                      {Number(value.price_change_percentage_24h) > 0 ? (
                        <div className='bg-[#2caf88] max-md:w-20 w-20 py-2.5 md:px-4 text-xs ms-auto rounded text-center font-semibold'>
                          +
                          {Number(
                            value.price_change_percentage_24h
                          ).toLocaleString(undefined, {
                            maximumFractionDigits: 2,
                          })}
                          %
                        </div>
                      ) : (
                        <div className='bg-red-500 max-md:w-20 w-20 py-2.5 md:px-4 rounded text-xs ms-auto text-center font-semibold'>
                          {Number(
                            value.price_change_percentage_24h
                          ).toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                          %
                        </div>
                      )}
                    </td>
                    {/* <td className='px-2 md:px-6 py-4 items-center md:justify-end hidden md:table-cell whitespace-nowrap text-sm text-right text-white'>
                      <div className='flex justify-end items-center w-full'>
                        <Link
                          className='bg-[#2684FC] flex justify-center md:justify-end disabled:bg-gray-400 text-white hover:text-white font-bold py-2 px-6 rounded-sm'
                          href='https://app.mybitstore.com/auth'
                        >
                          Trade
                        </Link>
                      </div>
                    </td> */}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
