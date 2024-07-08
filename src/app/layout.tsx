import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/feature/Footer/footer';
import ReactQueryProvider from '@/lib/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mybitstore',
  description: 'A new way to buy and sell cryptocurrencies in Ghana',
  icons: {
    icon: '/favicon-dark.png',
  },
};

// axios.defaults.baseURL = 'https://mybitstores.com/champandkings/';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-night-100`}>
        <ReactQueryProvider>
          {children}
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
