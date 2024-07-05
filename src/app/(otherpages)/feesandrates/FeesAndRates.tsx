import React from 'react';
import { Heading } from '@/components/ui/header';
import Container from '@/components/Container';

const FeesAndRates = () => {
  // const { t } = useTranslation();

  return (
    <Container>
      <div className='py-8 pt-24'>
        <div className='w-full text-white'>
          <Heading
            title='FEES AND RATES'
            src='/assets/bulk-trade.png'
            alt='fees and rates'
          ></Heading>
          <div className='sm:rounded-none'>
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
            <table className='bg-[#212741] text-black w-[60%] mx-auto mb-6'>
              <caption className='caption-top px-6 py-4 mt-5 mx-auto text-center text-sm text-muted-foreground'>
                This table outlines the various fees associated with different
                cryptocurrency transactions. It provides a clear overview of the
                costs involved in buying, selling, and withdrawing
                cryptocurrencies, ensuring transparency for our users.
              </caption>

              <tr className='bg-[#212741] py-4 hidden md:table-row'>
                <th
                  scope='col'
                  className='px-6 py-4 text-left text-sm text-muted-foreground whitespace-nowrap'
                >
                  Coin/Token
                </th>
                {/* <th
                scope='col'
                className='px-6 py-4 text-left text-sm text-muted-foreground whitespace-nowrap'
                >
                Full Name
                </th> */}
                <th
                  scope='col'
                  className='px-6 py-4 text-left text-sm text-muted-foreground whitespace-nowrap capitalize'
                >
                  Transaction Type
                </th>
                <th
                  scope='col'
                  className='px-6 py-4 text-left text-sm text-muted-foreground whitespace-nowrap capitalize'
                >
                  Fees
                </th>
              </tr>
              <tbody>
                <tr className='border-b border-[#212741] hover:bg-[#6e7794]'>
                  <td className='px-6 py-4 capitalize whitespace-nowrap text-sm text-white font-medium hidden md:table-cell'>
                    Cryptos
                  </td>
                  <td
                    data-cell='Transaction Type'
                    className='text-left capitalize px-6 py-4 whitespace-nowrap text-sm text-white before:content-[attr(data-cell)] md:before:content-none flex justify-between md:table-cell'
                  >
                    Buying
                  </td>
                  <td
                    data-cell='Fees'
                    className='text-left capitalize px-6 py-4 whitespace-nowrap text-sm text-white before:content-[attr(data-cell)] md:before:content-none flex justify-between md:table-cell'
                  >
                    2%
                  </td>
                </tr>
                <tr className='border-b border-[#212741] hover:bg-[#6e7794]'>
                  <td className='px-6 py-4 capitalize whitespace-nowrap text-sm text-white font-medium hidden md:table-cell'></td>
                  <td
                    data-cell='Transaction Type'
                    className='text-left capitalize px-6 py-4 whitespace-nowrap text-sm text-white before:content-[attr(data-cell)] md:before:content-none flex justify-between md:table-cell'
                  >
                    Selling
                  </td>
                  <td
                    data-cell='Fees'
                    className='text-left capitalize px-6 py-4 whitespace-nowrap text-sm text-white before:content-[attr(data-cell)] md:before:content-none flex justify-between md:table-cell'
                  >
                    2%
                  </td>
                </tr>
                <tr className='border-b border-[#212741] hover:bg-[#6e7794]'>
                  <td className='px-6 py-4 capitalize whitespace-nowrap text-sm text-white font-medium hidden md:table-cell'></td>
                  <td
                    data-cell='Transaction Type'
                    className='text-left capitalize px-6 py-4 whitespace-nowrap text-sm text-white before:content-[attr(data-cell)] md:before:content-none flex justify-between md:table-cell'
                  >
                    Withdrawal (Internal) - BTC
                  </td>
                  <td
                    data-cell='Fees'
                    className='text-left capitalize px-6 py-4 whitespace-nowrap text-sm text-white before:content-[attr(data-cell)] md:before:content-none flex justify-between md:table-cell'
                  >
                    $2.00
                  </td>
                </tr>
                <tr className='border-b border-[#212741] hover:bg-[#6e7794]'>
                  <td className='px-6 py-4 capitalize whitespace-nowrap text-sm text-white font-medium hidden md:table-cell'></td>
                  <td
                    data-cell='Transaction Type'
                    className='text-left capitalize px-6 py-4 whitespace-nowrap text-sm text-white before:content-[attr(data-cell)] md:before:content-none flex justify-between md:table-cell'
                  >
                    Withdrawal (External)
                  </td>
                  <td
                    data-cell='Fees'
                    className='text-left capitalize px-6 py-4 whitespace-nowrap text-sm text-white before:content-[attr(data-cell)] md:before:content-none flex justify-between md:table-cell'
                  >
                    Network Fees + $5.00
                  </td>
                </tr>
                <tr className='border-b border-[#212741] hover:bg-[#6e7794]'>
                  <td className='px-6 py-4 capitalize whitespace-nowrap text-sm text-white font-medium hidden md:table-cell'></td>
                  <td
                    data-cell='Transaction Type'
                    className='text-left capitalize px-6 py-4 whitespace-nowrap text-sm text-white before:content-[attr(data-cell)] md:before:content-none flex justify-between md:table-cell'
                  >
                    Convert
                  </td>
                  <td
                    data-cell='Fees'
                    className='text-left capitalize px-6 py-4 whitespace-nowrap text-sm text-white before:content-[attr(data-cell)] md:before:content-none flex justify-between md:table-cell'
                  >
                    5%
                  </td>
                </tr>
                <tr className='border-b border-[#212741] hover:bg-[#6e7794] first:bg-gray-100'>
                  <td className='px-6 py-4 capitalize whitespace-nowrap text-sm text-white font-medium hidden md:table-cell'></td>
                  <td
                    data-cell='Transaction Type'
                    className='text-left capitalize px-6 py-4 whitespace-nowrap text-sm text-white before:content-[attr(data-cell)] md:before:content-none flex justify-between md:table-cell'
                  >
                    Withdrawal (External) - USDT
                  </td>
                  <td
                    data-cell='Fees'
                    className='text-left capitalize px-6 py-4 whitespace-nowrap text-sm text-white before:content-[attr(data-cell)] md:before:content-none flex justify-between md:table-cell'
                  >
                    Network Fees + $2.00
                  </td>
                </tr>
              </tbody>
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
              <td className='px-6 py-4 whitespace-nowrap text-sm font-medium flex gap-2 items-center'>
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
