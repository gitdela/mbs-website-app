import Head from 'next/head';
import React from 'react';
import About from './About';
// import About from '../components/About';

const about = () => {
  return (
    <>
      <Head>
        <title>About us</title>
        <meta
          name='description'
          content='Mybitstore is a peer-to-peer trading platform that offers easy and convenient way buying and selling of Bitcoin, USDT, and other cryptocurrencies.'
        />
      </Head>
      <About />
    </>
  );
};

export default about;
