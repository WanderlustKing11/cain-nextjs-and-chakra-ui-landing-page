'use client';

import { Container, Box, Heading } from '@chakra-ui/react';

export default function ServiceTitle() {
  return (
    // <Container m={0} p={0} w={'100%'}>
      <Box
        w={'100%'}
        height={'6xl'}
        // position='relative'
        backgroundPosition={{ base: '60% 0', sm: '60% 0%', md: '60% 0%', lg: '50% 0%' }} 
        backgroundRepeat='no-repeat'
        backgroundSize={{base: '200%', md: '100%', lg: '50%'}}
        backgroundImage={'url(/ps-04.jpg)'}
      >
        <Heading
          fontSize={{ md: '3rem'}}
        >
          Services
        </Heading>
      </Box>
    // </Container>
  );
}
