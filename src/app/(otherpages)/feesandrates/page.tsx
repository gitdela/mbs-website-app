import Head from 'next/head';
import FeesAndRates from './FeesAndRates';
// import FeesAndRates from '../components/FeesAndRates/FeesAndRates';

const feesandrates = () => {
  return (
    <>
      <Head>
        <title>Fees and Rates</title>
        <meta
          name='description'
          content='MyBitstore offers a new, electronic way to buy and sell bitcoin and USDT in Ghana with mobile money'
        />
      </Head>
      <FeesAndRates />
    </>
  );
};

export default feesandrates;
