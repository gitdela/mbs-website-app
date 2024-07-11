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
import api, { formatNumber, removeUndefinedAndNull } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Container from '@/components/Container';
import Loader from '@/components/ui/loader';
import EmptyAds from '@/components/ui/emptyads';

const P2PBody = ({ data }: any) => {
  const router = useRouter();

  const [type, setType] = useState('sell');
  const [selectedCoin, setSelectedCoin] = useState('');

  const getP2pAds = async () => {
    const res = await api.post(
      'https://bitcoinzoomtraining.com/p2p/all_ads/',
      selectedCoin
        ? {
            type: 'fetch',
            filters: removeUndefinedAndNull({
              offer_type: type,
              coin__id: Number(selectedCoin) ?? undefined,
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

  const { data: p2pData, isLoading: p2pLoading } = useQuery({
    queryKey: ['p2p_ads', type, selectedCoin],
    queryFn: getP2pAds,
  });

  useEffect(() => {
    router.push(`/p2pads/?type=${type}/?coin=${selectedCoin}`, {
      scroll: false,
    });
  }, [type, selectedCoin]);

  return (
    <section className='w-full'>
      <Container>
        <div className='md:py-12 md:px-0 rounded'>
          <div>
            <div className='flex justify-start items-center gap-2 md:gap-6 mb-6'>
              <Tabs
                defaultValue={type}
                onValueChange={(value) => setType(value)}
                className='w-auto rounded text-white'
              >
                <TabsList className='flex flex-wrap justify-start md:gap-16 p-0'>
                  <div className='flex border border-[#6F7794] px-1 py-1 rounded-[8px]'>
                    <TabsTrigger
                      className='data-[state=active]:bg-blue-400 rounded-[5px] max-sm:text-xs'
                      value='sell'
                    >
                      Buy
                    </TabsTrigger>
                    <TabsTrigger
                      className='data-[state=active]:bg-red-400 rounded-[5px] max-sm:text-xs'
                      value='buy'
                    >
                      Sell
                    </TabsTrigger>
                  </div>
                </TabsList>
              </Tabs>

              <div className='flex flex-wrap'>
                <div className=''>
                  <Select
                    onValueChange={(value) =>
                      value === 'all'
                        ? setSelectedCoin('')
                        : setSelectedCoin(value)
                    }
                  >
                    <SelectTrigger className='w-[180px] bg-night-100 border-[#6F7794] text-white rounded-[8px] capitalize max-sm:text-xs focus:ring-0 focus:ring-offset-0'>
                      <SelectValue placeholder='All Cryptocurrencies' />
                    </SelectTrigger>
                    <SelectContent className='bg-night-100'>
                      <SelectItem
                        value='all'
                        className='text-white max-sm:text-xs border-b border-[#6F7794]/20 rounded-none py-3'
                      >
                        All Cryptocurrencies
                      </SelectItem>
                      {data.info.rates.map((rate: any) => (
                        <SelectItem
                          key={rate.id}
                          value={rate.id}
                          className='text-white capitalize max-sm:text-xs'
                        >
                          <span className='flex gap-2 justify-between items-center'>
                            <Image
                              src={rate.image}
                              alt={rate.label}
                              width={20}
                              height={20}
                            />
                            {rate.label}
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {/* <form className='bg-[#1d1d31] rounded px-3 flex justify-center items-center'> */}
              {/* <Select>
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
            </Select> */}
              {/* </form> */}
              {/* <Select>
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
            </Select> */}
              {/* 
            <Button
              variant={'outline'}
              className='bg-[#212741] border-[#6F7794] text-white shadow-none flex justify-center items-center gap-2 md:ml-12 rounded-[8px]'
            >
              <p className='mb-0'>Reset</p>
              <RotateCcw
                size={15}
                className='flex items-center justify-center'
              />
            </Button> */}
            </div>
            <div className='hidden lg:block mb-2 md:px-6'>
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
          <div className='bg-night-50 w-full flex flex-col pb-4 px-3 md:px-6 rounded-md divide-y divide-gray-700'>
            {p2pLoading && <Loader />}
            {p2pData?.info.length === 0 && <EmptyAds />}
            {p2pData?.info.map((offer: any, index: number) => (
              <div
                key={index}
                className='flex flex-col lg:grid lg:grid-cols-6 w-full lg:justify-between gap-2 py-4 md:py-6'
              >
                <div className='flex flex-col gap-1'>
                  <div className='flex justify-start items-center gap-2'>
                    {/* <div className='relative'> */}
                    <div className='flex justify-center items-center bg-blue-500 rounded-full h-7 w-7'>
                      <p className='mb-0 text-white text-xs md:text-md font-bold'>
                        {offer.trader__username.slice(0, 1).toUpperCase()}
                      </p>
                    </div>
                    {/* {offer.online_status.online && (
                      <div className='absolute bottom-0 right-0 h-1.5 w-1.5 md:h-2 md:w-2 bg-green-500 rounded-full border border-white'></div>
                    )}
                    {!offer.online_status.online && (
                      <div className='absolute bottom-0 right-0 h-1.5 w-1.5 md:h-2 md:w-2 bg-gray-500 rounded-full border border-white'></div>
                    )} */}
                    {/* </div> */}
                    <div className='flex flex-col items-start text-white text-base md:text-lg'>
                      <p className='mb-0 text-sm md:text-base'>
                        {offer.trader__username}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className='mb-0 text-xs text-gray-500'>
                      {offer.transactions}&nbsp;Transactions | {offer.completed}
                    </p>
                  </div>
                </div>
                <div className='lg:flex justify-start items-center hidden'>
                  <div className='text-white text-md'>
                    <span>{formatNumber(offer.unit_price)}</span>&nbsp;&nbsp;
                    <span>{offer.currency}</span>
                  </div>
                </div>
                <div className='flex justify-between col-span-2 items-center mt-2'>
                  <div className='flex flex-col gap-1 justify-center items-start text-white'>
                    <div className='flex justify-start items-center lg:hidden'>
                      <div className='text-white text-sm flex gap-2'>
                        <span className='tracking-normal text-xs mt-2'>
                          {offer.currency}
                        </span>
                        <span className='tracking-normal max-md:text-lg text-xl font-semibold'>
                          {formatNumber(offer.unit_price)}
                        </span>
                      </div>
                    </div>
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
                        Limits:&nbsp;&nbsp;
                        <span className='text-white'>
                          {formatNumber(offer.min_order_price)}&nbsp;&nbsp;
                          -&nbsp;&nbsp;
                          {formatNumber(offer.max_order_price)}
                          &nbsp;&nbsp;
                          {offer.currency}
                        </span>
                      </span>
                    </span>
                  </div>
                  {type === 'buy' ? (
                    <div className='flex lg:hidden justify-center items-center'>
                      <Button
                        asChild
                        className='bg-red-400 hover:bg-red-400 flex gap-1 hover:text-white font-semibold px-3 md:px-4 py-0.5 md:py-1'
                      >
                        <Link
                          href={`https://app.mybitstore.com/auth`}
                          className='text-xs md:text-base'
                        >
                          Sell
                          <Image
                            src={offer.coin__image}
                            alt={offer.coin__image}
                            width={20}
                            height={20}
                          />
                        </Link>
                      </Button>
                    </div>
                  ) : (
                    <div className='flex lg:hidden justify-center items-center'>
                      <Button
                        asChild
                        className='bg-[#436cd8] hover:bg-[#436cd8] flex gap-1 hover:text-white font-semibold px-3 md:px-4 py-0.5 md:py-1'
                      >
                        <Link
                          href={`https://app.mybitstore.com/auth`}
                          className='text-xs md:text-base'
                        >
                          Buy
                          <Image
                            src={offer.coin__image}
                            alt={offer.coin__image}
                            width={20}
                            height={20}
                          />
                        </Link>
                      </Button>
                    </div>
                  )}
                </div>
                <div className='flex lg:flex-col lg:gap-1 justify-between lg:justify-center text-white'>
                  <div className='flex justify-center flex-col items-start gap-1 md:gap-2 max-md:pt-3'>
                    <p className='text-gray-500 text-sm mb-0 hidden'>
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
                        <span className='text-xs md:text-sm whitespace-nowrap'>
                          {method.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                {type === 'buy' ? (
                  <div className='hidden lg:flex justify-center items-center'>
                    <Button
                      asChild
                      className='bg-red-400 flex gap-1 hover:bg-red-400 hover:text-white font-semibold px-4 py-1'
                    >
                      <Link href={`https://app.mybitstore.com/auth`}>
                        Sell
                        <Image
                          src={offer.coin__image}
                          alt={offer.coin__image}
                          width={20}
                          height={20}
                        />
                      </Link>
                    </Button>
                  </div>
                ) : (
                  <div className='hidden lg:flex justify-center  items-center'>
                    <Button
                      asChild
                      className='bg-[#436cd8] hover:bg-[#436cd8] flex gap-1 hover:text-white font-semibold px-4 py-1'
                    >
                      <Link href={`https://app.mybitstore.com/auth`}>
                        Buy
                        <Image
                          src={offer.coin__image}
                          alt={offer.coin__image}
                          width={20}
                          height={20}
                        />
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default P2PBody;
