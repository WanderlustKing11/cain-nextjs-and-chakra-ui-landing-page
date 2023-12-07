import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import RootLayout from '@/app/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </ChakraProvider>
  );
}

export default MyApp;
