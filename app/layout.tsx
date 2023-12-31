'use client'
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // initial project was setup using this html
    // in the code. Explore options...
    // <html lang='en'>
    //   <head />
    //   <body>
    <>
      <ChakraProvider>
        <Navbar />

        {children}

        <Footer />
      </ChakraProvider>
    </>
    //   </body>
    // </html>
  );
}
