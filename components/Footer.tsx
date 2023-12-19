import Link from 'next/link';
import {
  Box,
  Container,
  Flex,
  VStack,
  SimpleGrid,
  Image,
  Icon,
  Button,
  Text,
  Divider,
} from '@chakra-ui/react';
import { FaFacebook } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

export default function Footer() {
  return (
    <Box bgGradient={'linear(to-b, #fff 0%, #000 25%)'} color={'gray.500'}>
      <Box m={12}>
        <Image
          src='/logo2.png'
          alt='Cain & Sons company logo'
          w={{ base: '90%', sm: '60%' }}
          maxW='400px'
          h={'auto'}
          pt={{ base: '55%', sm: '35%', md: '18%' }}
          mx={{ base: 'auto', md: 0 }}
        />
        <Text
          my={{ base: 10, sm: 0 }}
          px={{ base: '6%', sm: '10%', md: '10%' }}
          fontSize={{ base: '1.4rem', sm: '1.65rem', md: '1.8rem' }}
        >
          Offering the best fire extinguisher servicing.
        </Text>
      </Box>
      <Flex>
        <SimpleGrid
          columns={{ base: 2, sm: 3, md: 6 }}
          spacing={{ base: 10, md: 7 }}
          fontSize={{ base: '1.4rem', md: '1rem' }}
          color={'gray.600'}
          mb={{ base: 10, sm: 16 }}
          mx={'15%'}
        >
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/service'>Service</Link>
          <Link href='/contact'>Contact</Link>
          <Link href='/privacy'>Privacy</Link>
          <Link href='/terms'>Terms</Link>
        </SimpleGrid>
      </Flex>
      <Divider m={'auto'} w='85%' />
      <Box mt='10'>
        <Flex 
          flexDir={{ base: 'column', md: 'row' }} 
          justifyContent='space-between'
          py={{ base: '10%', md: '4%' }}
          px={{ base: '10%', md: '10%' }}
        >
          <VStack spacing={5}>
            <SimpleGrid columns={{ base: 1, md: 2 }}>
            <Text>150 Mountain Ave, Unit C,</Text>
            <Text>Hackettstown, NJ 07840</Text>
            </SimpleGrid>
            <SimpleGrid columns={{ base: 1, md: 2 }}>
            <Text>Phone: (973) 227-2277 </Text>
            <Text>| NJ DFS #: P00160</Text>
            </SimpleGrid>
            <Text>
              Email:{' '}
              <a href='mailto:rcain@cainrcain@cainandsons.com'>
                rcain@cainandsons.com
              </a>
            </Text>
          </VStack>
          <Container 
            display='flex' 
            justifyContent={{ base: 'space-around', md: 'flex-end' }} 
            alignContent='center'
            mt={{ base: 10 }}
            mb={{ base: 0 }}            
          >
            <Link href='https://www.facebook.com/cainandsonsfire/?fref=ts'>
              <Button
                w='2.9rem'
                h='2.9rem'
                borderRadius='50%'
                bgColor='gray.700'
                _hover={{
                  bgColor: 'gray.300',
                }}
                _active={{
                  color: 'gray.600',
                  transition: 'none',
                }}
              >
                <Icon
                  as={FaFacebook}
                  className='icon'
                  color='blackAlpha.900'
                  boxSize='10'
                />
              </Button>
            </Link>
            <Box ml={{ md: '20px', lg: '10%'}}></Box>
            <Link href='https://www.instagram.com/cainandsonsfireequipment/'>
              <Button
                w='2.9rem'
                h='2.9rem'
                borderRadius='15px'
                bgColor='gray.700'
                _hover={{
                  bgColor: 'gray.300',
                }}
                _active={{
                  color: 'blackAlpha.900',
                  transition: 'none',
                }}
              >
                <Icon
                  as={AiFillInstagram}
                  className='icon'
                  color='blackAlpha.900'
                  boxSize='12'
                />
              </Button>
            </Link>
          </Container>
        </Flex>
      </Box>
      <Container>
        <Text p={{ base: 5 }}>© 2023 Cain & Sons Fire Equipment, Inc. All rights reserved.</Text>
      </Container>
    </Box>
  );
}
