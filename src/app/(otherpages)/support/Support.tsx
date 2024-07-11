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
import { CreditCard, Lock, MailQuestion, PersonStanding } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import mail from '../../../../public/assets/mail-contact.svg';
import times from '../../../../public/assets/times-alarm-support.svg';
import calls from '../../../../public/assets/incoming-calls-support.svg';
import Container from '@/components/Container';

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
      <div className='py-10 pt-24'>
        <div className='text-white'>
          {/* <div className='hidden flex-col-reverse lg:flex-row gap-16 items-center justify-center'>
            <div className='flex flex-col'>
              <div>
                <h2 className='text-4xl md:text-center text-white sm:text-4xl'>
                  {t?.contact.header}
                </h2>
                <p className='md:text-center'>{t?.contact.desc}</p>
              </div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className='space-y-6'
                >
                  <div className='w-full flex gap-4'>
                    <FormField
                      control={form.control}
                      name='fname'
                      render={({ field }) => (
                        <FormItem className='w-full'>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder='First Name'
                              className='bg-[#212741] border-none focus-visible:ring-1 focus-visible:ring-offset-0 py-7'
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='lname'
                      render={({ field }) => (
                        <FormItem className='w-full'>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder='Last Name'
                              className='bg-[#212741] border-none focus-visible:ring-1 focus-visible:ring-offset-0 py-7'
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className='w-full flex gap-4'>
                    <FormField
                      control={form.control}
                      name='username'
                      render={({ field }) => (
                        <FormItem className='w-full'>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder='Username'
                              className='bg-[#212741] border-none focus-visible:ring-1 focus-visible:ring-offset-0 py-7'
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='phone'
                      render={({ field }) => (
                        <FormItem className='w-full'>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder='Phone Number'
                              className='bg-[#212741] border-none focus-visible:ring-1 focus-visible:ring-offset-0 py-7'
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder='Email'
                            className='bg-[#212741] border-none focus-visible:ring-1 focus-visible:ring-offset-0 py-7'
                          />
                        </FormControl>
                        <FormMessage className='text-muted-foreground' />
                      </FormItem>
                    )}
                  />
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    size='invisible'
                    sitekey={
                      process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string
                    }
                  />
                  <FormField
                    control={form.control}
                    name='message'
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder='How can we help?'
                            className='min-h-[150px] resize-none bg-[#212741] border-none focus-visible:ring-1 focus-visible:ring-offset-0'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    title='Send'
                    variant={'primary'}
                    loading={loader}
                    tw_width='w-full'
                    className='py-8'
                  />
                </form>
              </Form>
            </div>
          </div> */}
          <section>
            <h1 className='text-left text-3xl text-white font-semibold sm:text-4xl mb-8'>
              How can we help?
            </h1>
            <div className='grid grid-cols-2 md:grid-cols-4 justify-center items-center gap-4'>
              <Link
                href='https://app.mybitstore.com/auth'
                className='bg-[#212741] flex flex-col items-center justify-center gap-4 py-4 rounded-md'
              >
                <Lock className='text-white w-8 h-8' />
                <h3 className='md:text-xl text-white'>Reset Password</h3>
              </Link>
              <Link
                href='/https://app.mybitstore.com/auth'
                className='bg-[#212741] flex flex-col items-center justify-center gap-4 py-4 rounded-md'
              >
                <CreditCard className='text-white w-8 h-8' />
                <h3 className='md:text-xl text-white'>Account Verification</h3>
              </Link>
              <Link
                href='/https://app.mybitstore.com/auth'
                className='bg-[#212741] flex flex-col items-center justify-center gap-4 py-4 rounded-md'
              >
                <PersonStanding className='text-white w-8 h-8' />
                <h3 className='md:text-xl text-white'>Talk to an Agent</h3>
              </Link>
              <Link
                href='/faq'
                className='bg-[#212741] flex flex-col items-center justify-center gap-4 py-4 rounded-md'
              >
                <MailQuestion className='text-white w-8 h-8' />
                <h3 className='md:text-xl text-white'>FAQs</h3>
              </Link>
            </div>
          </section>
          <div className='bg-night-50 rounded-lg'>
            <div className='w-full flex flex-col md:flex-row gap-8 text-white mt-16 px-6 py-8 pb-16'>
              <div className='w-full'>
                <h2 className='text-white text-2xl sm:text-3xl'>
                  Sales Support
                </h2>
                <div className='mt-3'>
                  <p className=''>
                    Stay in touch with our sales and marketing team to discuss
                    all related activities and get instant response. Reach us on
                    the email and phone contact provided.
                  </p>
                </div>
                <div className='space-y-6'>
                  <div className='flex gap-1'>
                    <Image
                      src={calls}
                      alt='phone'
                      height={25}
                      width={25}
                      className='flex justify-center items-start'
                    />
                    <span className='ml-3 mt-3'>
                      <p className='my-0'> + (233) 24 978 4105</p>
                      <p className='my-0'> + (233) 54 692 3048</p>
                    </span>
                  </div>
                  <div className='flex gap-4'>
                    <Image
                      src={mail}
                      alt='phone'
                      height={25}
                      width={25}
                      className='flex justify-center items-start'
                    />
                    <p className='my-0'>marketing@mybitstore.com</p>
                  </div>
                </div>
              </div>
              <div className='w-full'>
                <h2 className='text-2xl text-white sm:text-3xl'>
                  Technical Support
                </h2>
                <div className='mt-3'>
                  <p>
                    Stay in touch with our technical team to report all issues
                    relating to our website, mobile apps and general issues and
                    get instant response. Reach us on the email and phone
                    contact provided.
                  </p>
                </div>
                <div>
                  <div className='space-y-6 mt-3'>
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
                    <div className='flex gap-4'>
                      <Image
                        src={mail}
                        alt='phone'
                        height={25}
                        width={25}
                        className='flex justify-center items-start'
                      />
                      <p className='my-0'>support@mybitstore.com</p>
                    </div>
                    <div className='flex gap-4'>
                      <Image
                        src={times}
                        alt='phone'
                        height={25}
                        width={25}
                        className='flex justify-center items-start'
                      />
                      <p className='mb-0'>Monday - Friday, 8:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Support;
