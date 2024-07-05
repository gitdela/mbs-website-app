import Footer from '@/components/feature/Footer/footer';
import OtherNavbar from '@/components/feature/Navbars/othernavbar';
import Container from '@/components/Container';
import ReactQueryProvider from '@/lib/providers';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryProvider>
      <div className={` bg-night-100`}>
        <OtherNavbar />
        {children}
      </div>
    </ReactQueryProvider>
  );
}
