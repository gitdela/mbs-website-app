import Head from 'next/head';
import Support from './Support';

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact us</title>
        <meta
          name='description'
          content='Your feedback is valuable to MyBitstore. If you have problems with our platform, want to suggest a feature or report abuse.'
        />
      </Head>
      <Support />
    </>
  );
};

export default contact;
