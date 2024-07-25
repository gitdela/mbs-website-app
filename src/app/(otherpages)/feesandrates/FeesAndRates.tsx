import React from 'react';
import { Heading } from '@/components/ui/header';
import Container from '@/components/Container';

const FeesAndRates = () => {
  // const { t } = useTranslation();

  return (
    <Container>
      <div className='py-8 pt-20 md:pt-24'>
        <div className='w-full text-white'>
          <div className='hidden md:block'>
            <Heading
              title='FEES AND RATES'
              src='/assets/bulk-trade.png'
              alt='fees and rates'
            ></Heading>
          </div>
          <div className='block md:hidden'>
            <Heading
              title='FEES AND RATES'
              src='/assets/bulk-trade.png'
              alt='fees and rates'
              imageWidth={50}
              imageHeight={50}
            ></Heading>
          </div>
          <div className='sm:rounded-none w-full'>
            {/* <div className='hidden md:block pb-10'>
            <Heading
            title={t?.feesAndRates.header}
            src='/assets/bulk-trade.png'
            alt='fees and rates'
            />
            </div>
            <div className='block md:hidden'>
            <Heading
            title={t?.feesAndRates.header}
            src='/assets/bulk-trade.png'
            alt='fees and rates'
            imageWidth={50}
            imageHeight={50}
            />
            </div> */}
            <table className='text-black w-[100%] md:w-[60%] mx-auto mb-6'>
              <caption className='caption-top py-4 mt-5 text-center text-xs md:text-sm text-muted-foreground'>
                This table outlines the various fees associated with different
                cryptocurrency transactions. It provides a clear overview of the
                costs involved in buying, selling, and withdrawing
                cryptocurrencies, ensuring transparency for our users.
              </caption>
              <thead className='bg-night-50 text-white'>
                <tr className=''>
                  <th
                    scope='col'
                    className='px-2 py-4 text-left text-xs md:text-sm text-muted-foreground'
                  >
                    Coin/Token
                  </th>
                  {/* <th
                scope='col'
                className='px-6 py-4 text-left text-xs md:text-sm text-muted-foreground'
                >
                Full Name
                </th> */}
                  <th
                    scope='col'
                    className='px-2 py-4 text-left text-xs md:text-sm text-muted-foreground capitalize'
                  >
                    Transaction Type
                  </th>
                  <th
                    scope='col'
                    className='px-2 py-4 text-right text-xs md:text-sm text-muted-foreground capitalize'
                  >
                    Fees
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-[#212741]'>
                  <td className='px-6 py-4 capitalize text-xs md:text-sm text-white'>
                    Cryptos (B2C)
                  </td>
                  <td
                    data-cell='Transaction Type'
                    className='text-left capitalize px-2 py-4 text-xs md:text-sm text-white justify-between'
                  >
                    Buying
                  </td>

                  <td
                    data-cell='Fees'
                    className='capitalize px-2 py-4 text-right text-xs md:text-sm text-white justify-between'
                  >
                    processor fees (if any) + 2%
                  </td>
                </tr>
                <tr className='border-b border-[#212741]'>
                  <td className='px-2 py-4 capitalize text-xs md:text-sm text-white font-medium'></td>
                  <td
                    data-cell='Transaction Type'
                    className='text-left capitalize px-2 py-4 text-xs md:text-sm text-white justify-between'
                  >
                    Selling
                  </td>
                  <td
                    data-cell='Fees'
                    className='text-right capitalize px-2 py-4 text-xs md:text-sm text-white justify-between'
                  >
                    processor fees (if any) + 2%
                  </td>
                </tr>
                <tr className='border-b border-[#212741]'>
                  <td className='px-2 py-4 capitalize text-xs md:text-sm text-white font-medium'></td>
                  <td
                    data-cell='Transaction Type'
                    className='text-left capitalize px-2 py-4 text-xs md:text-sm text-white justify-between'
                  >
                    Withdrawal (Internal) - BTC
                  </td>
                  <td
                    data-cell='Fees'
                    className='text-right capitalize px-2 py-4 text-xs md:text-sm text-white justify-between'
                  >
                    $2.00
                  </td>
                </tr>
                <tr className='border-b border-[#212741]'>
                  <td className='px-2 py-4 capitalize text-xs md:text-sm text-white font-medium'></td>
                  <td
                    data-cell='Transaction Type'
                    className='text-left capitalize px-2 py-4 text-xs md:text-sm text-white justify-between'
                  >
                    Withdrawal (External) - BTC
                  </td>
                  <td
                    data-cell='Fees'
                    className='text-right capitalize px-2 py-4 text-xs md:text-sm text-white justify-between'
                  >
                    Network Fees + $5.00
                  </td>
                </tr>
                <tr className='border-b border-[#212741]'>
                  <td className='px-2 py-4 capitalize text-xs md:text-sm text-white font-medium'></td>
                  <td
                    data-cell='Transaction Type'
                    className='text-left capitalize px-2 py-4 text-xs md:text-sm text-white justify-between'
                  >
                    Convert
                  </td>
                  <td
                    data-cell='Fees'
                    className='text-right capitalize px-2 py-4 text-xs md:text-sm text-white justify-between'
                  >
                    5%
                  </td>
                </tr>
                <tr className='border-b border-[#212741] first:bg-gray-100'>
                  <td className='px-2 py-4 capitalize text-xs md:text-sm text-white font-medium'></td>
                  <td
                    data-cell='Transaction Type'
                    className='text-left capitalize px-2 py-4 text-xs md:text-sm text-white justify-between'
                  >
                    Withdrawal (External) - USDT
                  </td>
                  <td
                    data-cell='Fees'
                    className='text-right capitalize px-2 py-4 text-xs md:text-sm text-white justify-between'
                  >
                    Network Fees + $2.00
                  </td>
                </tr>
                <tr className='border-b border-[#212741] first:bg-gray-100'>
                  <td className='px-2 py-4 capitalize text-xs md:text-sm text-white font-medium'></td>
                  <td
                    data-cell='Transaction Type'
                    className='text-left capitalize px-2 py-4 text-xs md:text-sm text-white justify-between'
                  >
                    Withdrawal (Internal) - USDT
                  </td>
                  <td
                    data-cell='Fees'
                    className='text-right capitalize px-2 py-4 text-xs md:text-sm text-white justify-between'
                  >
                    $2.00
                  </td>
                </tr>
              </tbody>
              <tr className='border-b border-[#212741] first:bg-gray-100'>
                <td className='px-2 py-4 capitalize text-xs md:text-sm text-white font-medium'>
                  Bitcoin (P2P)
                </td>
                <td
                  data-cell='Transaction Type'
                  className='text-left capitalize px-2 py-4 text-xs md:text-sm text-white justify-between'
                >
                  Buying (Maker/Taker)
                </td>
                <td
                  data-cell='Fees'
                  className='text-right capitalize px-2 py-4 text-xs md:text-sm text-white justify-between'
                >
                  3%
                </td>
              </tr>
              <tr className='border-b border-[#212741] first:bg-gray-100'>
                <td className='px-2 py-4 capitalize text-xs md:text-sm text-white font-medium'></td>
                <td
                  data-cell='Transaction Type'
                  className='text-left capitalize px-2 py-4 text-xs md:text-sm text-white justify-between'
                >
                  Selling (Maker/Taker)
                </td>
                <td
                  data-cell='Fees'
                  className='text-right capitalize px-2 py-4 text-xs md:text-sm text-white justify-between'
                >
                  3%
                </td>
              </tr>
              <tr className='border-b border-[#212741] first:bg-gray-100'>
                <td className='px-2 py-4 capitalize text-xs md:text-sm text-white font-medium'>
                  USDT (P2P)
                </td>
                <td
                  data-cell='Transaction Type'
                  className='text-left capitalize px-2 py-4 text-xs md:text-sm text-white justify-between'
                >
                  Buying (Taker)
                </td>
                <td
                  data-cell='Fees'
                  className='text-right capitalize px-2 py-4 text-xs md:text-sm text-white justify-between'
                >
                  3%
                </td>
              </tr>
              <tr className='border-b border-[#212741] first:bg-gray-100'>
                <td className='px-2 py-4 capitalize text-xs md:text-sm text-white font-medium'></td>
                <td
                  data-cell='Transaction Type'
                  className='text-left capitalize px-2 py-4 text-xs md:text-sm text-white justify-between'
                >
                  Buying (Maker)
                </td>
                <td
                  data-cell='Fees'
                  className='text-right capitalize px-2 py-4 text-xs md:text-sm text-white justify-between'
                >
                  Network Fee + 3%
                </td>
              </tr>
              <tr className='border-b border-[#212741] first:bg-gray-100'>
                <td className='px-2 py-4 capitalize text-xs md:text-sm text-white font-medium'></td>
                <td
                  data-cell='Transaction Type'
                  className='text-left capitalize px-2 py-4 text-xs md:text-sm text-white justify-between'
                >
                  Selling (Maker)
                </td>
                <td
                  data-cell='Fees'
                  className='text-right capitalize px-2 py-4 text-xs md:text-sm text-white justify-between'
                >
                  Network Fee + 3%
                </td>
              </tr>
              <tr className='border-b border-[#212741] first:bg-gray-100'>
                <td className='px-2 py-4 capitalize text-xs md:text-sm text-white font-medium'></td>
                <td
                  data-cell='Transaction Type'
                  className='text-left capitalize px-2 py-4 text-xs md:text-sm text-white justify-between'
                >
                  Selling (Taker)
                </td>
                <td
                  data-cell='Fees'
                  className='text-right capitalize px-2 py-4 text-xs md:text-sm text-white justify-between'
                >
                  3%
                </td>
              </tr>
            </table>
            {/* <table className='min-w-full divide-y border mb-6 divide-gray-200'>
            <thead className='bg-[#1D1D31]'>
            <tr>
            <th
            scope='col'
            className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider'
            >
            ITEM
            </th>
            <th
            scope='col'
            className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider'
            >
            TRANSACTION TYPE
            </th>
            <th
            scope='col'
            className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider'
            >
            FEES
            </th>
            </tr>
            </thead>
            <tbody className='bg-[#1D1D31] divide-y divide-gray-200'>
            {t?.feesAndRates.info.map((data: any, index: number) => (
              <tr key={index}>
              <td className='px-6 py-4 text-sm font-medium flex gap-2 items-center'>
              {data?.name}
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-sm'>
              {data?.type}
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-sm'>
              {data?.fee}
              </td>
              </tr>
              ))}
              </tbody>
              </table> */}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FeesAndRates;
