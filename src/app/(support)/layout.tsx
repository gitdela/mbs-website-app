// import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
// import './globals.css';
// import Footer from '@/components/feature/Footer/footer';
// import ReactQueryProvider from '@/lib/providers';
import Footer from '@/components/feature/Footer/footer';
import OtherNavbar from '@/components/feature/Navbars/othernavbar';
import Script from 'next/script';

// const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Mybitstore',
//   description: 'A new way to buy and sell cryptocurrencies in Ghana',
//   icons: {
//     icon: '/favicon-dark.png',
//   },
// };

// axios.defaults.baseURL = 'https://mybitstores.com/champandkings/';

// func openWidget() {
//   FreshworksWidget('open');
// }tion

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Script src='//fw-cdn.com/11700795/4340156.js' />
      <body className={`bg-night-100`}>
        <OtherNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
