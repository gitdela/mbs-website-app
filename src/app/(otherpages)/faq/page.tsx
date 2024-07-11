import Head from 'next/head';
import FAQs from './faq';

const faq = () => {
  return (
    <>
      <Head>
        <title>Mybitstore | FAQ</title>
        <meta
          name='description'
          content='You can buy BITCOIN or USDT from Mybitstore using our detailed guide.'
        />
      </Head>
      <FAQs />
    </>
  );
};

export default faq;
