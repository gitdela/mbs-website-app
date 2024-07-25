import React from 'react';
import Container from '@/components/Container';
import { Phone } from 'lucide-react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const MobileSupport = () => {
  return (
    <Container>
      <main className='flex flex-col gap-6 text-white pb-20'>
        <h1 className='text-center text-white py-6'>Support Center</h1>
        <div className='flex flex-col gap-4'>
          <div>
            <span className='mb-2'>Hello</span>
            <h3 className='text-lg'>We are here to help</h3>
          </div>
          <div className='grid grid-cols-6 gap-x-3 justify-center items-start  border border-gray-50/10 bg-night-50 px-4 py-6 rounded-md'>
            <div className='col-span-1 border border-gray-600 rounded-full flex justify-center items-center p-2'>
              <Phone className='size-4' />
            </div>
            {/* <div className='col-span-5 flex flex-col gap-1'>
              <h4>Join video call appointement</h4>
              <p className='text-sm text-muted-foreground'>
                If you've scheduled a call with customer service, join here to
                verify your identity
              </p>
            </div> */}
          </div>
          <Accordion type='single' collapsible className='w-full'>
            <AccordionItem value='item-1'>
              <AccordionTrigger className='hover:no-underline'>
                Is it accessible?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2'>
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3'>
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className='flex flex-col gap-3 mt-4'>
            <h2 className='text-lg'>Need more help?</h2>
            <div className='flex flex-col gap-0.5 bg-night-50 px-4 py-6 rounded-md border border-gray-50/10'>
              <p className=''>Chat with us FreshChat</p>
              <p className='text-xs text-muted-foreground'>
                We&apos;re here 24/7, ask us anything.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Container>
  );
};

export default MobileSupport;
