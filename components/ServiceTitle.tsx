'use client';

import { Container, Box, Heading } from '@chakra-ui/react';

export default function ServiceTitle() {
  return (

      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        w='100%'
        height='100%'
        // position='relative'
        // backgroundPosition={{ base: '60% 0', sm: '60% 0%', md: '60% 0%', lg: '50% 0%' }} 
        backgroundPosition='center'
        backgroundRepeat='no-repeat'
        // backgroundSize={{base: '200%', md: '100%', lg: '50%'}}
        backgroundSize='cover'
        backgroundImage={'url(/ps-04.jpg)'}
        borderRadius='10px'
      >
        <Heading
          fontSize={{ base: '2.5rem', }}
        >
          Services
        </Heading>
      </Box>

  );
}
