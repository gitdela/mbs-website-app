// import React from 'react';
// import { useTranslation } from '../../hooks/useTranslation';
// import Image from 'next/image';
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from '../ui/accordion';
// import { Heading } from '../custom-components/header';
// import { useQuery } from '@tanstack/react-query';
// import { client } from '@/sanity';
// import { PortableText } from 'next-sanity';
// import { myPortableTextComponents } from '../../lib/utils';
// const FAQs = () => {
//   const getFaqs = () => {
//     const query = `
//         *[_type == "faq"][0...5]{
//             title,
//               body
//           }
//         `;

//     return client.fetch(query);
//   };

//   const { data: faqsData } = useQuery({
//     queryFn: getFaqs,
//     queryKey: ['get_faq'],
//   });

//   console.log('sanity faqs', faqsData);

//   const { t } = useTranslation();

//   return (
//     <div className='bg-[#1D1D31]'>
//       <div className='py-10 w-full px-4 md:container lg:max-w-5xl xl:max-w-6xl mx-auto'>
//         <div className='hidden md:block'>
//           <Heading title={t?.faq.title} alt='faq' src='/assets/faq.svg' />
//         </div>
//         <div className='block md:hidden'>
//           <Heading
//             title={t?.faq.title}
//             alt='faq'
//             src='/assets/faq.svg'
//             imageHeight={50}
//             imageWidth={50}
//           />
//         </div>
//         <div className='flex flex-col gap-12 items-center justify-center lg:flex-row py-10'>
//           <Accordion
//             type='single'
//             collapsible
//             className='w-full text-white space-y-2'
//           >
//             {faqsData?.map((faq: any, key: number) => (
//               <AccordionItem
//                 value={`item-${key}`}
//                 key={key}
//                 className='border-2 border-[#212741] px-2 md:px-4 rounded-md'
//               >
//                 <AccordionTrigger className='text-white text-md font-bold text-start md:text-xl capitalize'>
//                   {faq?.title}
//                 </AccordionTrigger>
//                 <AccordionContent>
//                   {/* {Array.isArray(faq?.body) ? (
//                     <ul>
//                       {faq.body.map((item: any, index: number) => (
//                         <li key={index}>{item.text}</li>
//                       ))}
//                     </ul>
//                   ) : (
//                     <p>{faq.body}</p>
//                   )}
//                   {faq.list && (
//                     <ul>
//                       {faq.list.map((item: string, index: number) => (
//                         <li key={index}>{item}</li>
//                       ))}
//                     </ul>
//                   )} */}
//                   <PortableText
//                     value={faq?.body}
//                     components={myPortableTextComponents}
//                   />
//                 </AccordionContent>
//               </AccordionItem>
//             ))}
//           </Accordion>
//           <Image
//             src='/assets/faq-new.svg'
//             alt='FAQs'
//             width={50}
//             height={50}
//             className='rounded-full w-full md:w-1/2'
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQs;
