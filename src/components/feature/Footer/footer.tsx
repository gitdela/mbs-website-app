import Link from 'next/link';
import Image from 'next/image';
import mybitstorelogo from '../../../../public/assets/mbs-logo-white.png';
import downloadontheappstore from '../../../../public/assets/downloadontheappstore.png';
import getitongoogleplay from '../../../../public/assets/getitongoogleplay.png';
import instagram from '../../../../public/assets/instagram-new.png';
import x from '../../../../public/assets/x.svg';
import facebook from '../../../../public/assets/facebook-new.png';
import youtube from '../../../../public/assets/youtube-new.png';
import Container from '@/components/Container';

const Footer = () => {
  return (
    <footer className='bg-night-50' aria-labelledby='footer-heading'>
      <Container>
        <div className='w-full max-container padding-x-container padding-y-container'>
          <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
            <div className='space-y-8 xl:col-span-1 '>
              <Image
                priority
                src={mybitstorelogo}
                alt='logo'
                height={40}
                width={170}
                className='flex justify-center items-center w-36 md:w-36'
              />

              <div className='flex items-center md:justify-start space-x-6'>
                <Link
                  href='https://facebook.com/mybitstore'
                  target='_blank'
                  rel='noreferrer'
                  className='text-gray-400 hover:text-gray-100'
                >
                  <span className='sr-only'>Facebook</span>
                  <Image
                    height={18}
                    width={18}
                    src={facebook}
                    alt='mybitstore-facebook'
                  />
                </Link>

                <Link
                  href='https://instagram.com/mybitstore_app/'
                  target='_blank'
                  rel='noreferrer'
                  className='text-gray-400 hover:text-gray-100'
                >
                  <span className='sr-only'>Instagram</span>
                  <Image
                    height={18}
                    width={18}
                    src={instagram}
                    alt='mybitstore-instagram'
                  />
                </Link>

                <Link
                  href='https://twitter.com/mybitstore'
                  target='_blank'
                  rel='noreferrer'
                  className='text-white hover:text-gray-100'
                >
                  <span className='sr-only'>Twitter</span>
                  <Image
                    height={18}
                    width={18}
                    src={x}
                    alt='mybitstore-twitter'
                  />
                </Link>
                <Link
                  href='https://youtube.com/channel/UCF2J6gWekpTk4jh63RbPVlw'
                  target='_blank'
                  rel='noreferrer'
                  className='text-white hover:text-gray-100'
                >
                  <span className='sr-only'>Twitter</span>
                  <Image
                    height={18}
                    width={18}
                    src={youtube}
                    alt='mybitstore-youtube'
                  />
                </Link>
              </div>
              <div className='mx-auto my-3 flex space-x-3 max-w-7xl'>
                <Link
                  target='_blank'
                  rel='noreferrer'
                  passHref
                  href='https://play.google.com/store/apps/details?id=app.mybitstore.com'
                >
                  <Image
                    width={140}
                    height={40}
                    src={getitongoogleplay}
                    alt='android'
                    priority
                    className='w-24 md:w-36'
                  />
                </Link>
                <Link
                  target='_blank'
                  rel='noreferrer'
                  passHref
                  href='https://apps.apple.com/us/app/mybitstore-buy-sell-bitcoin/id1579519877'
                >
                  <Image
                    width={140}
                    height={40}
                    src={downloadontheappstore}
                    alt='ios'
                    priority
                    className='w-24 md:w-36'
                  />
                </Link>
              </div>
            </div>
            <div className='mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 xl:mt-0 xl:col-span-2'>
              <div className='mt-12 md:mt-0'>
                <h3 className='text-sm font-bold mb-6 text-white tracking-wider uppercase'>
                  PRODUCT
                </h3>
                <ul className='mt-4 space-y-4'>
                  <li>
                    <Link
                      className='text-sm font-light text-white hover:text-gray-500'
                      href='https://app.mybitstore.com/auth'
                    >
                      Buy & Sell Bitcoin
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='text-sm text-white font-light hover:text-gray-500'
                      href='https://app.mybitstore.com/auth'
                    >
                      Buy & Sell USDT
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='text-sm text-white font-light hover:text-gray-500'
                      href='/bulktrade'
                    >
                      OTC Trade
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='text-sm text-white font-light hover:text-gray-500  '
                      href='/referandearn'
                    >
                      Become A Referer
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='mt-12 md:mt-0'>
                <h3 className='text-sm font-bold mb-6 text-white tracking-wider uppercase'>
                  HELP
                </h3>
                <ul className='mt-4 space-y-4'>
                  <li>
                    <Link
                      className='text-sm text-white font-light hover:text-gray-500'
                      href='/support'
                    >
                      Support
                    </Link>
                  </li>

                  <li>
                    <Link
                      className='text-sm text-white font-light hover:text-gray-500'
                      href='/faq'
                    >
                      FAQ
                    </Link>
                  </li>

                  <li>
                    <Link
                      href='https://blog.mybitstore.com'
                      target='_blank'
                      rel='noreferrer'
                      className='text-sm text-white font-light hover:text-gray-500'
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='text-sm text-white font-light hover:text-gray-500'
                      href='/feesandrates'
                    >
                      Fees & Rates
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='mt-12 md:mt-0'>
                <h3 className='text-sm font-bold mb-6 text-white tracking-wider uppercase'>
                  COMPANY
                </h3>
                <ul className='mt-4 space-y-4'>
                  <li>
                    <Link
                      className='text-sm text-white font-light hover:text-gray-500'
                      href='/aboutus'
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='text-sm text-white font-light hover:text-gray-500'
                      href='/privacy'
                    >
                      Privacy
                    </Link>
                  </li>

                  <li>
                    <Link
                      className='text-sm text-white font-light hover:text-gray-500'
                      href='/userterms'
                    >
                      User Terms
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      className='text-sm text-white font-light hover:text-gray-500'
                      href='/rewardterms'
                    >
                      Reward Terms
                    </Link>
                  </li> */}
                </ul>
              </div>
              <div className='mt-12 md:mt-0'>
                <h3 className='text-sm font-bold mb-6 text-white tracking-wider uppercase'>
                  LEGAL
                </h3>
                <ul className='mt-4 space-y-4'>
                  <li>
                    <Link
                      className='text-sm text-white font-light hover:text-gray-500'
                      href='/riskpolicy'
                    >
                      Risk Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='text-sm text-white font-light hover:text-gray-500'
                      href='/aml'
                    >
                      KYC & AML Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='text-sm text-white font-light hover:text-gray-500'
                      href='/refundpolicy'
                    >
                      Refund Policy
                    </Link>
                  </li>
                </ul>
              </div>
              {/* </div> */}
            </div>
          </div>
          <div className='mt-12 border-t border-gray-500 py-8'>
            <p className='text-sm text-gray-400 text-center'>
              &copy; {new Date().getFullYear()} Mybitstore Technologies Limited.
              All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
