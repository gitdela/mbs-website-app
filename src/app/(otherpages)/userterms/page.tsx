import Head from 'next/head';
import Terms from './Terms';

const terms = () => {
  return (
    <>
      <Head>
        <title>Terms & condition</title>
        <meta
          name='description'
          content='This agreement forms the legal document that covers all the activities that a user undertakes on Mybitstore.com or any affiliated Mybitstore platform'
        />
      </Head>
      <Terms />
    </>
  );
};

export default terms;
