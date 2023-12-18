import {
  Box,
  Container,
  Flex,
  Button,
  Heading,
} from '@chakra-ui/react';

export default function Blog() {
  return (
    <Container>
      <Flex 
        flexDir='column' 
        justifyContent='center' 
        textAlign='center'
        p={{ base: 8, md: 0 }}
      >
        <Heading m={4}>We&apos;re Here For You</Heading>
        <Heading m={4} fontSize={'3rem'}>Blog</Heading>
        <Heading m={4}>Coming Soon</Heading>
        <Button 
          m={4} 
          color={'gray.100'} 
          bgColor={'red.600'}
          _active={{
            bg: 'red.800',
            transform: 'scale(0.98)',
          }}
        >Learn More</Button>
      </Flex>
    </Container>
  );
}
