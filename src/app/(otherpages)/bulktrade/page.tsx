'use client';

import { notification } from 'antd';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import _ from 'lodash';

// import ReCAPTCHA from 'react-google-recaptcha';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import api from '@/lib/utils';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Button from '@/components/ui/buttonwloader';

const OtcBulk = () => {
  // const recaptchaRef = createRef<any>();
  const [loader, setLoader] = useState(false);

  const formSchema = z.object({
    fname: z.string(),
    lname: z.string(),
    email: z.string().email({
      message: 'Please enter a valid email.',
    }),
    phone: z.string(),
    message: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoader(true);
    let message = confirm('Are you sure you want to send this message?');
    if (message == true) {
      // await recaptchaRef.current?.execute().then((token: string) => {
      // submitData({ token, ...values });
      // });
      submitData({ ...values });
    } else {
      setLoader(false);
      return;
    }
  }

  const submitData = (data: any) => {
    api
      .post('/', {
        full_name: data.firstName + ' ' + data.lastName,
        type: 'send_message',
        sales: true,
        ..._.omit(data, ['firstName', 'lastName']),
      })
      .then((res) => {
        console.log(res);
        notification.success({
          message: 'Message received',
          description: 'We will get back to you soon. Thank you',
        });
      })
      .catch((err) => {
        notification.error({ message: 'Error', description: err.message });
      })
      .finally(() => {
        setLoader(false);
      });
  };

  return (
    <div className='text-white pt-24'>
      <div className='container lg:max-w-3xl mx-auto px-4 sm:px-0'>
        {/* <div className='hidden md:block'>
          <Heading
            title='OTC/Bulk Trade'
            src='/assets/bulk-trade.png'
            alt='Bulk Buy or Sell'
          />
        </div>
        <div className='block md:hidden'>
          <Heading
            title='OTC/Bulk Trade'
            src='/assets/bulk-trade.png'
            alt='Bulk Buy or Sell'
            imageHeight={80}
            imageWidth={80}
          />
        </div> */}
        <div className='flex w-full justify-center items-center gap-16 py-8'>
          {/* <Image
            src='/assets/contactus.svg'
            width={500}
            height={500}
            alt='contact us'
            className='w-full'
          /> */}
          <div className='flex flex-col gap-8'>
            <div className='text-center flex flex-col gap-4'>
              <h2 className='text-4xl text-white'>OTC / Bulk Trade</h2>
              <p className=''>
                Hi valuable customer, kindly fill the form below if you want to
                buy, sell, convert bulk bitcoin, USDT, Gift Cards and/or any
                other crypto currency. Our team will reach out to you in less
                than an hour of working hours after filling out the forms.
              </p>
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-6 w-full'
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
                {/* <ReCAPTCHA
                  ref={recaptchaRef}
                  size='invisible'
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
                /> */}
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
                  className='py-12'
                />
              </form>
            </Form>
          </div>
          {/* <form
            onSubmit={handleSubmit(onSubmit)}
            className='grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
          >
            <InputComponent
              label={t?.otc.form.fname}
              {...register('firstName', { required: true })}
            />

            <InputComponent
              label={t?.otc.form.lname}
              {...register('lastName', { required: true })}
            />

            <InputComponent
              label={t?.otc.form.email}
              {...register('email', { required: true })}
            />
            <InputComponent
              label={t?.otc.form.phone}
              {...register('phone', { required: true })}
            />

            <div className='sm:col-span-2'>
              <label htmlFor='message' className='block  text-sm text-gray-700'>
                {t?.contact?.form.message}
              </label>
              <div className='mt-1'>
                <textarea
                  {...register('message', { required: true })}
                  className='py-3 px-4 block     w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500  border-2 border-gray-300 rounded-md'
                ></textarea>
              </div>
            </div>
            <ReCAPTCHA
              ref={recaptchaRef}
              size='invisible'
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
            />
            <div className='sm:col-span-2'>
              <Button
                loading={loader}
                title='Send'
                variant={'primary'}
                tw_width='w-full'
              />
            </div>
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default OtcBulk;
