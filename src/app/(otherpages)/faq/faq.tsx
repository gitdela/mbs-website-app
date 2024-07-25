'use client';

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../../components/ui/accordion';
import { useQuery } from '@tanstack/react-query';

import { PortableText } from 'next-sanity';
import { client } from '../../../../sanity';
import { Heading } from '@/components/ui/header';
import { myPortableTextComponents } from '@/lib/utils';
import Container from '@/components/Container';
// import { myPortableTextComponents } from '@/lib/utils';
const FAQs = () => {
  const getFaqs = () => {
    const query = `
        *[_type == "faq"]{
            title,
              body
          }
        `;

    return client.fetch(query);
  };

  const { data: faqsData } = useQuery({
    queryFn: getFaqs,
    queryKey: ['get_faq'],
  });

  console.log('data', faqsData);

  // const WalletData = faqsData.filter((item: any) => item.title === 'Wallet');
  // const P2PData = faqsData.filter((item: any) => item.title === 'P2P');

  // console.log('first WalletData', WalletData);
  // console.log(P2PData, 'first P2PData');

  //   const getFaqsWallet = () => {
  //     const query = `
  //        *[_type == "faq_type" && title == "Wallet"][0]{
  //     "faqs": *[_type=="faq" && references(^._id )][0...5]{
  //     title,
  //     body
  // }
  //   } `;

  //     return client.fetch(query);
  //   };

  //   const { data: WalletfaqsData } = useQuery({
  //     queryFn: getFaqsWallet,
  //     queryKey: ['get_faq_wallet'],
  //   });

  // const getFaqsP2P = () => {
  //   const query = `
  //        *[_type == "faq_type" && title == "P2P"][0]{
  //     "faqs": *[_type=="faq" && references(^._id )]{
  //     title,
  //     body
  // }
  //   }
  //         `;

  //   return client.fetch(query);
  // };

  // const { data: P2PfaqsData } = useQuery({
  //   queryFn: getFaqsP2P,
  //   queryKey: ['get_faq_p2p'],
  // });

  // console.log('sanity p2p faqs', getFaqsP2P);
  //   console.log('sanity wallet faqs', getFaqsWallet);

  return (
    <div className='bg-night-100 py-20'>
      <Container>
        <div className='py-10 w-full px-4 md:container lg:max-w-5xl xl:max-w-6xl mx-auto'>
          <div className='hidden md:block'>
            <Heading
              title='Frequently Asked Questions'
              alt='faq'
              src='/assets/faq.svg'
            />
          </div>
          <div className='block md:hidden'>
            <Heading
              title='Frequently Asked Questions'
              alt='faq'
              src='/assets/faq.svg'
              imageHeight={50}
              imageWidth={50}
            />
          </div>
          <div className='flex flex-col gap-12 items-center justify-center py-10'>
            <Accordion
              type='single'
              collapsible
              className='w-full text-white space-y-2'
            >
              {faqsData?.map((faq: any, key: number) => (
                <AccordionItem
                  value={`item-${key}`}
                  key={key}
                  className='border-2 border-[#212741] px-2 md:px-4 rounded-md'
                >
                  <AccordionTrigger className='text-white text-md text-start md:text-xl capitalize hover:no-underline'>
                    {faq?.title}
                  </AccordionTrigger>
                  <AccordionContent className='!text-white text-start'>
                    {/* {Array.isArray(faq?.body) ? (
                    <ul>
                      {faq.body.map((item: any, index: number) => (
                        <li key={index}>{item.text}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{faq.body}</p>
                  )}
                  {faq.list && (
                    <ul>
                      {faq.list.map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  )} */}
                    <PortableText
                      value={faq?.body}
                      components={myPortableTextComponents}
                    />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            {/* <Image
              src='/assets/faq-new.svg'
              alt='FAQs'
              width={50}
              height={50}
              className='rounded-full w-full md:w-1/2'
            /> */}
          </div>
          {/* <div className='flex flex-col gap-12 items-center justify-center py-10'>
            <h2 className='text-2xl my-2 text-white'>P2P</h2>
            <Accordion
              type='single'
              collapsible
              className='w-full text-white space-y-2'
            >
              {P2PfaqsData?.faqs.map((faq: any, key: number) => (
                <AccordionItem
                  value={`item-${key}`}
                  key={key}
                  className='border-2 border-[#212741] px-2 md:px-4 rounded-md'
                >
                  <AccordionTrigger className='text-white text-md font-bold text-start md:text-xl capitalize hover:no-underline'>
                    {faq?.title}
                  </AccordionTrigger>
                  <AccordionContent className='!text-white text-start'>
                    {/* {Array.isArray(faq?.body) ? (
                    <ul>
                      {faq.body.map((item: any, index: number) => (
                        <li key={index}>{item.text}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{faq.body}</p>
                  )}
                  {faq.list && (
                    <ul>
                      {faq.list.map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  )} */}
          {/* <PortableText
                      value={faq?.body}
                      components={myPortableTextComponents}
                    />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            {/* <Image
              src='/assets/faq-new.svg'
              alt='FAQs'
              width={50}
              height={50}
              className='rounded-full w-full md:w-1/2'
            /> */}
        </div>
      </Container>
    </div>
  );
};

export default FAQs;
