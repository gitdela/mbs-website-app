import Image from 'next/image';
import React from 'react';
import { Star } from 'lucide-react';
import Marquee from 'react-fast-marquee';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import abgraph from '../../../../public/assets/aboutus-graph.svg';
import abmission from '../../../../public/assets/aboutus-mission1.svg';
import abvision from '../../../../public/assets/aboutus-mission1.svg';
import ablegal from '../../../../public/assets/legal.png';
import Container from '@/components/Container';

const About = () => {
  // const { t } = useTranslation();
  return (
    <section className='py-20 pt-24'>
      <Container>
        <div className='w-full grid gap-10'>
          <div className='flex flex-col lg:flex-row items-center lg:justify-start gap-20 py-6 rounded-lg px-4 text-white'>
            <div className='w-full lg:w-1/2 space-y-6'>
              <h1 className='text-white text-2xl md:text-4xl'>About</h1>
              <p className='text-white'>
                Mybitstore is a global cryptocurrency company. It offers
                Peer-to-peer (P2P), Business-to-Business (B2B),
                Business-To-Consumer and Over-the-Counter (OTC) cryptocurrency
                trading services.
              </p>
              <div className='flex flex-col md:flex-row items-center gap-3'>
                <Input
                  type='email'
                  placeholder='Email'
                  className='bg-night-50 border-none focus-visible:ring-offset-0 md:w-1/2'
                />
                <Button
                  className='bg-blue-500 rounded-md font-semibold w-full md:w-auto'
                  type='submit'
                >
                  Get Started
                </Button>
              </div>
            </div>
            <Image
              src={abgraph}
              alt='mission'
              height={400}
              width={400}
              priority
            />
          </div>
          <div className='flex flex-col md:flex-row px-4 md:px-0 gap-8 text-white md:pt-10'>
            <div className='bg-[#222641] flex-1 flex flex-col space-y-2 border-l-4 border-[#426cd8] p-4'>
              <Image
                src={abmission}
                alt='mission'
                height={30}
                width={30}
                priority
              />
              <h1 className='text-white mb-0 text-2xl my-3 md:my-0'>
                Our Mission
              </h1>
              <p className='text-white pt-2 md:pt-0'>
                Our mission is to work to provide a platform that gives freedom,
                convenience, easy availability of market and cryptocurrency
                payment solutions to both start-ups and established firms.
              </p>
            </div>
            <div className='bg-[#222641] flex-1 flex flex-col space-y-2 border-l-4 border-[#426cd8] p-4'>
              <Image
                src={abvision}
                alt='mission'
                height={30}
                width={30}
                priority
              />
              <h1 className='text-white mb-0 text-2xl my-3 md:my-0'>
                Our Vision
              </h1>
              <p className='text-white pt-2 md:pt-0'>
                Our vision is to provide a safe, secured and convenient platform
                that will enable peer-to-peer exchange of values.
              </p>
            </div>
          </div>
          <div className='pt-16 flex'>
            <div className='flex flex-col md:flex-row items-center gap-12 px-4'>
              <Image
                src={ablegal}
                alt='mission'
                height={280}
                width={280}
                priority
              />
              <p className='text-white flex items-center justify-center'>
                MYBITSTORE TECHNOLOGIES LTD is an infrastructure provider for
                cryptocurrency exchange. We operate the Mybitstore App, enabling
                users to exchange cryptocurrency, and providing them with
                reliable cryptocurrency trading services. As a financial
                services provider, it&apos;s essential for us to understand our
                clients. We value the trust and opportunity to serve our clients
                and take the responsibility of offering security and legal
                compliance seriously. To this end, we conduct Know Your Customer
                (KYC) and Anti-Money Laundering (AML) procedures under Ghanaian
                laws and international best practices
              </p>
            </div>
          </div>
        </div>
      </Container>
      <div className='py-6 flex flex-col justify-between gap-6'>
        <h2 className='text-center text-white text-4xl'>
          What our customers saying?
        </h2>
        <Marquee pauseOnHover={true} style={{ width: '100%' }}>
          <div className='bg-night-50 h-[150px] flex flex-col justify-center p-4 space-y-2 border border-[#6f7793] rounded-md mx-4 w-96'>
            <span className='text-white flex gap-2 items-center'>
              <Image
                src={'/assets/mbs-logo-small.svg'}
                alt='quote'
                height={20}
                width={20}
              />
              <p className='mb-0 text-xs'>Jesus Sowah</p>
              <span className='flex'>
                <Star size={15} className='text-yellow-500' />
                <Star size={15} className='text-yellow-500' />
                <Star size={15} className='text-yellow-500' />
                <Star size={15} className='text-yellow-500' />
                <Star size={15} className='text-yellow-500' />
              </span>
            </span>
            <p className='text-white text-xs'>
              Unlike others who have unfortunately had some negative
              experiences, I can tell you for a fact that this app is one of the
              best trading local platforms I know..About their customer care; my
              problems are always,and I mean always solved in a matter of
              seconds whenever I contact them.
            </p>
          </div>
          <div className='bg-[#222641] h-[150px] flex flex-col justify-center p-4 space-y-2 border border-[#6f7793] rounded-md mx-4 w-96'>
            <span className='text-white flex gap-2 items-center'>
              <Image
                src={'/assets/mbs-logo-small.svg'}
                alt='quote'
                height={20}
                width={20}
              />
              <p className='mb-0 text-xs'>yAsMin dugBa</p>
              <span className='flex'>
                <Star size={15} className='text-yellow-500' />
                <Star size={15} className='text-yellow-500' />
                <Star size={15} className='text-yellow-500' />
                <Star size={15} className='text-yellow-500' />
                <Star size={15} className='text-yellow-500' />
              </span>
            </span>
            <p className='text-white text-xs'>
              I signed up and made a bitcoin transaction in record time. It was
              so smooth and almost effortless. Without breaking a sweat I got my
              money into my mobile money wallet. Such convenience. I dont write
              reviews but I had to do this. Definitely hooked. Much appreciated.
              A very Solid Platform !
            </p>
          </div>
          <div className='bg-[#222641] h-[150px] flex flex-col justify-center p-4 space-y-2 border border-[#6f7793] rounded-md mx-4 w-96'>
            <span className='text-white flex gap-2 items-center'>
              <Image
                src={'/assets/mbs-logo-small.svg'}
                alt='quote'
                height={20}
                width={20}
              />
              <p className='mb-0 text-xs capitalize'>nana sarpong</p>
              <span className='flex'>
                <Star size={15} className='text-yellow-500' />
                <Star size={15} className='text-yellow-500' />
                <Star size={15} className='text-yellow-500' />
                <Star size={15} className='text-yellow-500' />
                <Star size={15} className='text-yellow-500' />
              </span>
            </span>
            <p className='text-white text-xs'>
              This App is very amazing I haven&apos;t met a bitcoin app which
              gives me a high good rate since I started trading or buying btc
              for myself I will trust paxful but the app got me happy 😊 their
              rate are good and I haven&apos;t seen this rates in my whole life
              for sure Thank You my Bitcoin Store And We&apos;re Very Grateful
              about you guys
            </p>
          </div>
          <div className='bg-[#222641] h-[150px] flex flex-col justify-center p-4 space-y-2 border border-[#6f7793] rounded-md mx-4 w-96'>
            <span className='text-white flex gap-2 items-center'>
              <Image
                src={'/assets/mbs-logo-small.svg'}
                alt='quote'
                height={20}
                width={20}
              />
              <p className='mb-0 text-xs'>Bodunde Oreofe</p>
              <span className='flex'>
                <Star size={15} className='text-yellow-500' />
                <Star size={15} className='text-yellow-500' />
                <Star size={15} className='text-yellow-500' />
                <Star size={15} className='text-yellow-500' />
                <Star size={15} className='text-yellow-500' />
              </span>
            </span>
            <p className='text-white text-xs'>
              Very fast and reliable app, delivering at ease.... do your best to
              make it more reliable... Nice job
            </p>
          </div>
        </Marquee>
        <Marquee pauseOnHover={true} direction='right' className='flex'>
          <div className='bg-[#222641] h-[150px] flex flex-col justify-center p-4 space-y-2 border border-[#6f7793] rounded-md mx-4 w-96'>
            <span className='text-white flex gap-2 items-center'>
              <Image
                src={'/assets/mbs-logo-small.svg'}
                alt='quote'
                height={20}
                width={20}
              />
              <p className='mb-0 text-xs'>Sal1234</p>
              <span className='flex'>
                <Star size={15} className='text-yellow-500' />
                <Star size={15} className='text-yellow-500' />
                <Star size={15} className='text-yellow-500' />
                <Star size={15} className='text-yellow-500' />
                <Star size={15} />
              </span>
            </span>
            <p className='text-white text-xs'>
              One of the best and simple cryto apps to buy and sell your tokens
              across the Globe ....but i would appreciate it if you could add
              USDT to the buy and sell section....
            </p>
          </div>
          <div className='bg-[#222641] h-[150px] flex flex-col justify-center p-4 space-y-2 border border-[#6f7793] rounded-md mx-4 w-96'>
            <span className='text-white flex gap-2 items-center'>
              <Image
                src={'/assets/mbs-logo-small.svg'}
                alt='quote'
                height={20}
                width={20}
              />
              <p className='mb-0 text-xs'>Issah Abdul Hadi</p>
              <span className='flex'>
                <Star size={15} className='text-yellow-500' />
                <Star size={15} className='text-yellow-500' />
                <Star size={15} className='text-yellow-500' />
                <Star size={15} className='text-yellow-500' />
                <Star size={15} />
              </span>
            </span>
            <p className='text-white text-xs'>
              Wow such an amazing app it&apos;s very easy and good to use. I
              recommend it to anyone who wants to buy and sell bitcoin. 💚💚💚
            </p>
          </div>
          <div className='bg-[#222641] h-[150px] flex flex-col justify-center p-4 space-y-2 border border-[#6f7793] rounded-md mx-4 w-96'>
            <span className='text-white flex gap-2 items-center'>
              <Image
                src={'/assets/mbs-logo-small.svg'}
                alt='quote'
                height={20}
                width={20}
              />
              <p className='mb-0 text-xs'>Issah Abdul Hadi</p>
              <span className='flex'>
                <Star size={15} className='text-yellow-500' />
                <Star size={15} className='text-yellow-500' />
                <Star size={15} className='text-yellow-500' />
                <Star size={15} className='text-yellow-500' />
                <Star size={15} className='text-yellow-500' />
              </span>
            </span>
            <p className='text-white text-xs'>
              One of the best apps for Bitcoin trading... Check it out guys.
              Very easy and fast to use... Not your regular app
            </p>
          </div>
          <div className='bg-[#222641] h-[150px] flex flex-col justify-center p-4 space-y-2 border border-[#6f7793] rounded-md mx-4 w-96'>
            <span className='text-white flex gap-2 items-center'>
              <Image
                src={'/assets/mbs-logo-small.svg'}
                alt='quote'
                height={20}
                width={20}
              />
              <p className='mb-0 text-xs capitalize'>emmanuel tormekpey</p>
              <span className='flex'>
                <Star size={15} className='text-yellow-500' />
                <Star size={15} className='text-yellow-500' />
                <Star size={15} className='text-yellow-500' />
                <Star size={15} className='text-yellow-500' />
                <Star size={15} className='text-yellow-500' />
              </span>
            </span>
            <p className='text-white text-xs'>
              Very fast and reliable service with a good user-friendly interface
              app
            </p>
          </div>
          <div className='bg-[#222641] h-[150px] flex flex-col justify-center p-4 space-y-2 border border-[#6f7793] rounded-md mx-4 w-96'>
            <span className='text-white flex gap-2 items-center'>
              <Image
                src={'/assets/mbs-logo-small.svg'}
                alt='quote'
                height={20}
                width={20}
              />
              <p className='mb-0 text-xs'>Daniel Nyarkoh</p>
              <span className='flex'>
                <Star size={15} className='text-yellow-500' />
                <Star size={15} className='text-yellow-500' />
                <Star size={15} className='text-yellow-500' />
                <Star size={15} className='text-yellow-500' />
                <Star size={15} className='text-yellow-500' />
              </span>
            </span>
            <p className='text-white text-xs'>
              MyBitstore is the best app when it comes to Crypto trading, I
              recommend it to you all, It also keeps your data safe.
            </p>
          </div>
          <div className='bg-[#222641] h-[150px] flex flex-col justify-center p-4 space-y-2 border border-[#6f7793] rounded-md mx-4 w-96'>
            <span className='text-white flex gap-2 items-center'>
              <Image
                src={'/assets/mbs-logo-small.svg'}
                alt='quote'
                height={20}
                width={20}
              />
              <p className='mb-0 text-xs'>Angela Owusu</p>
              <span className='flex'>
                <Star size={15} className='text-yellow-500' />
                <Star size={15} className='text-yellow-500' />
                <Star size={15} className='text-yellow-500' />
                <Star size={15} className='text-yellow-500' />
                <Star size={15} className='text-yellow-500' />
              </span>
            </span>
            <p className='text-white text-xs'>
              Mybitstore is a safe and reliable app you can trust.
            </p>
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default About;
