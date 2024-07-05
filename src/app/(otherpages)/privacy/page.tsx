import Head from 'next/head';
import Privacy from './privacy';

const privacy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
        <meta
          name='description'
          content="This Privacy Policy describes Mybitsores's procedures for the collection, use and disclosure of your information when you use our service."
        />
      </Head>
      <Privacy />
    </>
  );
};

export default privacy;
