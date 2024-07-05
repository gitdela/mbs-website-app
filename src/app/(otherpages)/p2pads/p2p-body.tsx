'use client';

import React, { useEffect, useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RotateCcw } from 'lucide-react';

import api, { formatNumber, removeUndefinedAndNull } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

const P2PBody = () => {
  const router = useRouter();

  const [type, setType] = useState('sell');
  // const [selectedCoin, setSelectedCoin] = useState('');
  // const [selectedCurrency, setSelectedCurrency] = useState('');
  // const [Coin] = useUrlState('coin');
  // const [Type] = useUrlState('type');
  // const [Currency] = useUrlState('currency');
  const getP2pAds = async () => {
    const res = await api.post(
      'https://bitcoinzoomtraining.com/p2p/all_ads/',
      // selectedCoin || selectedCurrency
      false
        ? {
            type: 'fetch',
            filters: removeUndefinedAndNull({
              // offer_type: type,
              // coin__id: Number(selectedCoin) ?? undefined,
              // currency: Number(selectedCurrency) ?? undefined,
            }),
          }
        : {
            type: 'fetch',
            filters: removeUndefinedAndNull({
              offer_type: type,
            }),
          }
    );
    const data = res.data;
    return data;
  };

  const { data: p2pData } = useQuery({
    queryKey: ['p2p_ads', type],
    queryFn: getP2pAds,
  });

  useEffect(() => {
    router.push(`/p2pads/?type=${type}`, {
      scroll: false,
    });
  }, [type]);

  return (
    <section className='w-full'>
      <div className='w-full md:container lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto py-12 px-4 md:px-0 rounded'>
        <div className=''>
          <Tabs
            defaultValue={type}
            onValueChange={(value) => setType(value)}
            className='w-auto rounded text-white'
          >
            <TabsList className='mb-4 flex flex-wrap justify-start md:gap-16 p-0'>
              <div className='flex border border-[#6F7794] px-1 py-1 rounded-[8px]'>
                <TabsTrigger
                  className='data-[state=active]:bg-blue-400 rounded-[5px]'
                  value='sell'
                >
                  Buy
                </TabsTrigger>
                <TabsTrigger
                  className='data-[state=active]:bg-red-400 rounded-[5px]'
                  value='buy'
                >
                  Sell
                </TabsTrigger>
              </div>
            </TabsList>
          </Tabs>

          <div className='flex gap-4 pt-4 pb-8 flex-wrap'>
            <div className=''>
              <Select>
                <SelectTrigger className='w-[180px] border-[#6F7794] text-white rounded-[8px]'>
                  <SelectValue placeholder='Cryptocurrency' />
                </SelectTrigger>
                <SelectContent className='bg-[#1d1d31]'>
                  <SelectItem value='1' className='text-white'>
                    Bitcoin
                  </SelectItem>
                  <SelectItem value='3' className='text-white'>
                    LTC
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* <form className='bg-[#1d1d31] rounded px-3 flex justify-center items-center'> */}
            <Select>
              <SelectTrigger className='w-[130px] border-[#6F7794] text-white rounded-[8px]'>
                <SelectValue placeholder='GHS' />
              </SelectTrigger>
              <SelectContent className='w-auto bg-[#1d1d31]'>
                <SelectItem value='GHS' className='text-white'>
                  GHS
                </SelectItem>
                <SelectItem value='USD' className='text-white'>
                  USD
                </SelectItem>
                <SelectItem value='NGN' className='text-white'>
                  NGN
                </SelectItem>
                <SelectItem value='CAD' className='text-white'>
                  CAD
                </SelectItem>
              </SelectContent>
            </Select>
            {/* </form> */}
            <Select>
              <SelectTrigger className='w-[180px] border-[#6F7794] text-white rounded-[8px]'>
                <SelectValue placeholder=' All payment methods' />
              </SelectTrigger>
              <SelectContent className='bg-[#1d1d31]'>
                <SelectItem value='1' className='text-white'>
                  MTN Mobile Money
                </SelectItem>
                <SelectItem value='2' className='text-white'>
                  Paypal
                </SelectItem>
                <SelectItem value='4' className='text-white'>
                  Cashapp
                </SelectItem>
                <SelectItem value='5' className='text-white'>
                  UBA
                </SelectItem>
              </SelectContent>
            </Select>

            <Button
              variant={'outline'}
              className='bg-[#212741] border-[#6F7794] text-white shadow-none flex justify-center items-center gap-2 md:ml-12 rounded-[8px]'
            >
              <p className='mb-0'>Reset</p>
              <RotateCcw
                size={15}
                className='flex items-center justify-center'
              />
            </Button>
          </div>
          <div className='hidden lg:block mb-2'>
            <div className='grid grid-cols-6'>
              <div className='flex ml-2 justify-start items-center'>
                <h2 className='text-white'>Advertisers</h2>
              </div>
              <div className='flex ml-2 justify-start items-center'>
                <h2 className='text-white'>Rate</h2>
              </div>
              <div className='flex ml-2 justify-start items-center col-span-2'>
                <h2 className='text-white'>Quantity & Limits </h2>
              </div>
              <div className='flex ml-2 justify-start items-center'>
                <h2 className='text-white'>Payment Method</h2>
              </div>
              <div className='flex ml-2 justify-center items-center'>
                <h2 className='text-white'>Trade Action</h2>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col gap-2'>
          {p2pData?.info.map((offer: any, index: number) => (
            <div
              key={index}
              className='bg-[#212741] flex flex-col lg:grid lg:grid-cols-6 w-full lg:justify-between gap-2 px-4 py-4 md:py-6 rounded'
            >
              <div className='flex justify-between items-center'>
                <div className='flex justify-start items-center gap-2'>
                  <div className='relative'>
                    <div className='flex justify-center items-center bg-blue-500 rounded-full h-7 w-7'>
                      <p className='mb-0 text-white text-xs md:text-md font-bold'>
                        {offer.trader__username.slice(0, 1).toUpperCase()}
                      </p>
                    </div>
                    {offer.online_status.online && (
                      <div className='absolute bottom-0 right-0 h-1.5 w-1.5 md:h-2 md:w-2 bg-green-500 rounded-full border border-white'></div>
                    )}
                    {!offer.online_status.online && (
                      <div className='absolute bottom-0 right-0 h-1.5 w-1.5 md:h-2 md:w-2 bg-gray-500 rounded-full border border-white'></div>
                    )}
                  </div>
                  <div className='flex flex-col items-start text-white md:text-sm'>
                    <p className='mb-0'>{offer.trader__username}</p>
                    <p className='mb-0 text-xs text-gray-500'>
                      {offer.transactions}&nbsp;Transactions | {offer.completed}
                    </p>
                  </div>
                </div>
                <div className='flex justify-start items-center lg:hidden'>
                  <div className='text-white text-sm'>
                    <span>{formatNumber(offer.unit_price)}</span>&nbsp;&nbsp;
                    <span>{offer.currency}</span>
                  </div>
                </div>
              </div>
              <div className='lg:flex justify-start items-center hidden'>
                <div className='text-white text-md'>
                  <span>{formatNumber(offer.unit_price)}</span>&nbsp;&nbsp;
                  <span>{offer.currency}</span>
                </div>
              </div>
              <div className='flex justify-start col-span-2 items-center'>
                <div className='flex flex-col gap-1 justify-center items-start text-white'>
                  <span className='text-xs md:text-base text-gray-500'>
                    Quantity:&nbsp;&nbsp;
                    <span className='text-white'>
                      {formatNumber(offer.trading_amount)}
                    </span>
                    &nbsp;&nbsp;
                    <span className='text-white'>{offer.currency}</span>
                  </span>
                  <span className='text-xs md:text-base flex flex-col gap-1'>
                    <span className='text-gray-500'>
                      Limit:&nbsp;&nbsp;
                      <span className='text-white'>
                        {formatNumber(offer.min_order_price)}&nbsp;&nbsp;
                        {offer.currency} - {formatNumber(offer.max_order_price)}
                        &nbsp;&nbsp;
                        {offer.currency}
                      </span>
                    </span>
                    {/* <span className='text-gray-500'>
                      Max Limit:&nbsp;&nbsp;
                      <span className='text-white'></span>
                    </span> */}
                  </span>
                </div>
              </div>
              <div className='flex lg:flex-col lg:gap-1 justify-between lg:justify-center text-white'>
                <div className='flex justify-center lg:flex-col lg:items-start gap-1 md:gap-2 items-center'>
                  <p className='text-gray-500 text-sm mb-0 lg:hidden'>
                    Payment Method:&nbsp;&nbsp;
                  </p>
                  {offer.payment_method.map((method: any, index: number) => (
                    <div
                      key={index}
                      className='flex items-center gap-1 justify-center text-xs md:text-base lg:ml-2'
                    >
                      <Image
                        src={method.image}
                        alt='payment method'
                        height={18}
                        width={18}
                        className='rounded-full'
                      />
                      <span className='md:block text-xs md:text-sm whitespace-nowrap'>
                        {method.name}
                      </span>
                    </div>
                  ))}
                </div>
                {type === 'buy' ? (
                  <div className='flex lg:hidden justify-center items-center'>
                    <Button
                      asChild
                      className='bg-red-400 hover:bg-red-400 text-white hover:text-white font-semibold px-4 py-1'
                    >
                      <Link
                        className='text-white'
                        href={`https://app.mybitstore.com/auth`}
                      >
                        Sell
                      </Link>
                    </Button>
                  </div>
                ) : (
                  <div className='flex lg:hidden justify-center items-center'>
                    <Button
                      asChild
                      className='bg-[#436cd8] hover:bg-[#436cd8] text-white hover:text-white font-semibold px-4 py-1'
                    >
                      <Link
                        href={`https://app.mybitstore.com/auth`}
                        className='text-white'
                      >
                        Buy
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
              {type === 'buy' ? (
                <div className='hidden lg:flex justify-center items-center'>
                  <Button
                    asChild
                    className='bg-red-400 hover:bg-red-400 hover:text-white font-semibold px-4 py-1'
                  >
                    <Link
                      className='text-white'
                      href={`https://app.mybitstore.com/auth`}
                    >
                      Sell
                    </Link>
                  </Button>
                </div>
              ) : (
                <div className='hidden lg:flex justify-center  items-center'>
                  <Button
                    asChild
                    className='bg-[#436cd8] hover:bg-[#436cd8] hover:text-white font-semibold px-4 py-1'
                  >
                    <Link
                      className='text-white'
                      href={`https://app.mybitstore.com/auth`}
                    >
                      Buy
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default P2PBody;
