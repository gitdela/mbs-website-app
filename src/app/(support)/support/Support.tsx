'use client';

// import { notification } from 'antd';
// import React, { Fragment, createRef, useState } from 'react';
import { Fragment } from 'react';
// import { useForm } from 'react-hook-form';
// import api from '../utils';
import _ from 'lodash';
// import { useTranslation } from '../../hooks/useTranslation';
// import InputComponent from '../Input/Input';
// import Button from '../Button/Button';
// import ReCAPTCHA from 'react-google-recaptcha';
// import Image from 'next/image';
// import { z } from 'zod';
// import { zodResolver } from '@hookform/resolvers/zod';
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '../ui/form';
// import { Input } from '../shad/input';
// import { Textarea } from '../ui/textarea';
import {
  CreditCard,
  Headset,
  HeadsetIcon,
  Lock,
  MailQuestion,
  MessageCircleQuestion,
  PersonStanding,
  PhoneCall,
  Send,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import mail from '../../../../public/assets/mail-contact.svg';
import times from '../../../../public/assets/times-alarm-support.svg';
import calls from '../../../../public/assets/incoming-calls-support.svg';
import Container from '@/components/Container';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const Support = () => {
  // const { t } = useTranslation();
  // const recaptchaRef = createRef<any>();
  // const [loader, setLoader] = useState(false);

  // const formSchema = z.object({
  //   username: z.string(),
  //   fname: z.string(),
  //   lname: z.string(),
  //   email: z.string().email({
  //     message: 'Please enter a valid email.',
  //   }),
  //   phone: z.string(),
  //   message: z.string(),
  // });

  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  // });

  // async function onSubmit(values: z.infer<typeof formSchema>) {
  //   setLoader(true);
  //   await recaptchaRef.current.execute().then((token: string) => {
  //     submitData({ token, ...values });
  //   });
  // }

  // const submitData = (data: any) => {
  //   api
  //     .post('/freeway/', {
  //       full_name: data.firstName + ' ' + data.lastName,
  //       type: 'send_message',
  //       sales: false,
  //       ..._.omit(data, ['firstName', 'lastName']),
  //     })
  //     .then((res) => {
  //       notification.success({
  //         message: 'Message received',
  //         description: res.data.info,
  //       });
  //     })
  //     .catch((err) => {
  //       notification.error({ message: 'Error', description: err.message });
  //     })
  //     .finally(() => {
  //       setLoader(false);
  //     });
  // };

  return (
    <Container>
      <div className='py-10 pt-24 min-h-[50vh]'>
        <div className='text-white'>
          <section>
            <h1 className='text-center text-3xl text-white font-semibold sm:text-4xl mb-12'>
              Support Center
            </h1>

            <h3 className='text-left text-lg text-white font-semibold sm:text-2xl mb-16'>
              How can we help?
            </h3>
            <div className='grid grid-cols-2 md:grid-cols-4 justify-center items-center gap-8'>
              <Dialog>
                <DialogTrigger asChild className='cursor-pointer'>
                  <div className='flex flex-col gap-4 justify-center items-center hover:bg-night-50 py-8 px-2 rounded'>
                    <PhoneCall className='w-8 h-8' />
                    <span>Call Customer Support</span>
                  </div>
                </DialogTrigger>
                <DialogContent className='sm:max-w-[70%] bg-night-100 border-gray-600'>
                  <DialogHeader>
                    <DialogTitle className='text-2xl font-semibold text-center text-white'>
                      Call Customer Support
                    </DialogTitle>
                    <DialogDescription className='text-center'>
                      Please reach out to the appropriate contact below, and we
                      will respond to your inquiry as soon as possible.
                    </DialogDescription>
                  </DialogHeader>
                  <div className='w-full flex flex-col md:grid md:grid-cols-3 gap-x-12 gap-y-8 text-white px-6 py-8 pb-16'>
                    <div className='w-full cols-span-1'>
                      <h2 className='text-2xl text-white font-semibold sm:text-xl'>
                        General Enquiry & Complaints
                      </h2>
                      <div className='mt-3'>
                        <p className='text-muted-foreground'>
                          Stay in touch with our customer service team to report
                          all general issues and get instant response. Reach us
                          on the email and phone contact provided.
                        </p>
                      </div>
                    </div>
                    <div className='w-full cols-span-1'>
                      <h2 className='text-2xl text-white font-semibold sm:text-xl'>
                        Technical Support
                      </h2>
                      <div className='mt-3'>
                        <p className='text-muted-foreground'>
                          Stay in touch with our technical team to report all
                          issues relating to our website and mobile apps.
                        </p>
                      </div>
                    </div>
                    <div className='w-full col-span-1'>
                      <h2 className='text-white text-2xl font-semibold sm:text-xl'>
                        Sales Support
                      </h2>
                      <div className='mt-3'>
                        <p className='text-muted-foreground'>
                          Stay in touch with our sales and marketing team to
                          discuss all related activities and get instant
                          response. Reach us on the email and phone contact
                          provided.
                        </p>
                      </div>
                    </div>

                    <div className='space-y-2'>
                      <div className='flex gap-1'>
                        <Image
                          src={calls}
                          alt='phone'
                          height={25}
                          width={25}
                          className='flex justify-center items-start'
                        />
                        <span className='ml-3'>
                          <p className='my-0'> + (233) 24 978 4105</p>
                        </span>
                      </div>

                      {/* <div className='flex gap-4'>
                      <Image
                        src={times}
                        alt='phone'
                        height={25}
                        width={25}
                        className='flex justify-center items-start'
                      />
                      <p className='mb-0'>Monday - Friday, 8:00 AM - 5:00 PM</p>
                    </div> */}
                    </div>

                    <div className='space-y-2'>
                      <div className='flex gap-1'>
                        <Image
                          src={calls}
                          alt='phone'
                          height={25}
                          width={25}
                          className='flex justify-center items-start'
                        />
                        <span className='ml-3'>
                          <p className='my-0'> + (233) 26 765 8481</p>
                        </span>
                      </div>
                      {/* <div className='flex gap-4'>
                        <Image
                          src={mail}
                          alt='phone'
                          height={25}
                          width={25}
                          className='flex justify-center items-start'
                        />
                        <p className='my-0'>admin@mybitstore.com</p>
                      </div> */}
                      {/* <div className='flex gap-4'>
                      <Image
                        src={times}
                        alt='phone'
                        height={25}
                        width={25}
                        className='flex justify-center items-start'
                      />
                      <p className='mb-0'>Monday - Friday, 8:00 AM - 5:00 PM</p>
                    </div> */}
                    </div>

                    <div className='space-y-2'>
                      <div className='flex gap-1'>
                        <Image
                          src={calls}
                          alt='phone'
                          height={25}
                          width={25}
                          className='flex justify-center items-start'
                        />
                        <span className='ml-3'>
                          <p className='my-0'> + (233) 24 978 4105</p>
                          <p className='my-0'> + (233) 54 692 3048</p>
                        </span>
                      </div>
                      {/* <div className='flex gap-4'>
                        <Image
                          src={mail}
                          alt='phone'
                          height={25}
                          width={25}
                          className='flex justify-center items-start'
                        />
                      </div> */}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger asChild className='cursor-pointer'>
                  <div className='flex flex-col gap-4 justify-center items-center hover:bg-night-50 py-8 px-2 rounded'>
                    <Send className='w-8 h-8' />
                    <span>Send a Message</span>
                  </div>
                </DialogTrigger>
                <DialogContent className='sm:max-w-[60%] bg-night-100 border-gray-600'>
                  <DialogHeader>
                    <DialogTitle className='text-2xl font-semibold text-center text-white'>
                      Send a Message
                    </DialogTitle>
                    <DialogDescription className='text-center'>
                      Please reach out to the appropriate contact below, and we
                      will respond to your inquiry as soon as possible.
                    </DialogDescription>
                  </DialogHeader>
                  <div className='w-full flex flex-col md:grid md:grid-cols-2 gap-x-12 gap-y-8 text-white px-6 py-8 pb-16'>
                    <div className='w-full cols-span-1'>
                      <h2 className='text-2xl text-white font-semibold sm:text-xl'>
                        General Enquiry & Complaints
                      </h2>
                      <div className='mt-3'>
                        <p className='text-muted-foreground'>
                          Stay in touch with our customer service team to report
                          all general issues and get instant response. Reach us
                          on the email and phone contact provided.
                        </p>
                      </div>
                    </div>
                    <div className='w-full cols-span-1'>
                      <h2 className='text-2xl text-white font-semibold sm:text-xl'>
                        Technical Support
                      </h2>
                      <div className='mt-3'>
                        <p className='text-muted-foreground'>
                          Stay in touch with our technical team to report all
                          issues relating to our website and mobile apps.
                        </p>
                      </div>
                    </div>
                    {/* <div className='w-full col-span-1'>
                      <h2 className='text-white text-2xl font-semibold sm:text-xl'>
                        Sales Support
                      </h2>
                      <div className='mt-3'>
                        <p className='text-muted-foreground'>
                          Stay in touch with our sales and marketing team to
                          discuss all related activities and get instant
                          response. Reach us on the email and phone contact
                          provided.
                        </p>
                      </div>
                    </div> */}

                    <div className='space-y-2'>
                      {/* <div className='flex gap-1'>
                        <Image
                          src={calls}
                          alt='phone'
                          height={25}
                          width={25}
                          className='flex justify-center items-start'
                        />
                        <span className='ml-3'>
                          <p className='my-0'> + (233) 24 978 4105</p>
                        </span>
                      </div> */}
                      <Link
                        href={'mailto:support@mybitstore.com'}
                        className='flex gap-4'
                      >
                        <Image
                          src={mail}
                          alt='phone'
                          height={25}
                          width={25}
                          className='flex justify-center items-start'
                        />
                        <p className='my-0'>support@mybitstore.com</p>
                      </Link>
                      {/* <div className='flex gap-4'>
                      <Image
                        src={times}
                        alt='phone'
                        height={25}
                        width={25}
                        className='flex justify-center items-start'
                      />
                      <p className='mb-0'>Monday - Friday, 8:00 AM - 5:00 PM</p>
                    </div> */}
                    </div>

                    <div className='space-y-2'>
                      {/* <div className='flex gap-1'>
                        <Image
                          src={calls}
                          alt='phone'
                          height={25}
                          width={25}
                          className='flex justify-center items-start'
                        />
                        <span className='ml-3'>
                          <p className='my-0'> + (233) 26 765 8481</p>
                        </span>
                      </div> */}
                      <Link
                        href={'mailto:admin@mybitstore.com'}
                        className='flex gap-4'
                      >
                        <Image
                          src={mail}
                          alt='phone'
                          height={25}
                          width={25}
                          className='flex justify-center items-start'
                        />
                        <p className='my-0'>admin@mybitstore.com</p>
                      </Link>
                      {/* <div className='flex gap-4'>
                        <Image
                          src={times}
                          alt='phone'
                          height={25}
                          width={25}
                          className='flex justify-center items-start'
                        />
                        <p className='mb-0'>
                          Monday - Friday, 8:00 AM - 5:00 PM
                        </p>
                      </div> */}
                    </div>

                    <div className='space-y-2'>
                      {/* <div className='flex gap-1'>
                        <Image
                          src={calls}
                          alt='phone'
                          height={25}
                          width={25}
                          className='flex justify-center items-start'
                        />
                        <span className='ml-3'>
                          <p className='my-0'> + (233) 24 978 4105</p>
                          <p className='my-0'> + (233) 54 692 3048</p>
                        </span>
                      </div> */}
                      {/* <div className='flex gap-4'>
                        <Image
                          src={mail}
                          alt='phone'
                          height={25}
                          width={25}
                          className='flex justify-center items-start'
                        />
                      </div> */}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <Link
                href={'/'}
                className='flex flex-col gap-4 justify-center items-center hover:bg-night-50 py-8 px-2 rounded'
              >
                <HeadsetIcon className='w-8 h-8' />
                <span>Live Chat Support</span>
              </Link>
              <Link
                href={'/faq'}
                className='flex flex-col gap-4 justify-center items-center hover:bg-night-50 py-8 px-2 rounded'
              >
                <MessageCircleQuestion className='w-8 h-8' />
                <span>FAQs</span>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </Container>
  );
};

export default Support;
