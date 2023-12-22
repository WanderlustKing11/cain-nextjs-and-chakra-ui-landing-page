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
      <Box m={12} pt={'200px'}>
        <Image
          src='/logo2.png'
          alt='Cain & Sons company logo'
          w={{ base: '90%', sm: '60%' }}
          maxW='400px'
          h={'auto'}
          pt={{ base: '100px', sm: '80px', md: '20px' }}
          mx={{ base: 'auto', md: 0 }}
        />
        <Text
          my={{ base: 10, sm: 0 }}
          px={{ base: 'auto', sm: '10%', md: '10%' }}
          ml={{ base: '20px', sm: 0 }}
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
          mx={{ base: 'auto', sm: '15%' }}
        >
          <Link href='/'>
            <Text
              _hover={{
                color: 'gray.200',
                transition: 'color 0.3s ease-in-out',
              }}
              _active={{
                color: 'gray.900',
              }}
            >
              home
            </Text>
          </Link>
          <Link href='/about'>
            <Text
              _hover={{
                color: 'gray.200',
                transition: 'color 0.3s ease-in-out',
              }}
              _active={{
                color: 'gray.900',
              }}
            >
              about
            </Text>
          </Link>
          <Link href='/services'>
            <Text
              _hover={{
                color: 'gray.200',
                transition: 'color 0.3s ease-in-out',
              }}
              _active={{
                color: 'gray.900',
              }}
            >
              services
            </Text>
          </Link>
          <Link href='/contact'>
            <Text
              _hover={{
                color: 'gray.200',
                transition: 'color 0.3s ease-in-out',
              }}
              _active={{
                color: 'gray.900',
              }}
            >
              contact
            </Text>
          </Link>
          <Link href='/privacy'>
            <Text
              _hover={{
                color: 'gray.200',
                transition: 'color 0.3s ease-in-out',
              }}
              _active={{
                color: 'gray.900',
              }}
            >
              privacy
            </Text>
          </Link>
          <Link href='/terms'>
            <Text
              _hover={{
                color: 'gray.200',
                transition: 'color 0.3s ease-in-out',
              }}
              _active={{
                color: 'gray.900',
              }}
            >
              terms
            </Text>
          </Link>
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
            px={{ base: '20%', sm: '30%', md: 0 }}
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
                  bgColor: 'gray.900',
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
            <Box ml={{ md: '20px', lg: '10%' }}></Box>
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
                  bgColor: 'gray.900',
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
        <Text p={{ base: 5 }}>
          © 2023 Cain & Sons Fire Equipment, Inc. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
}
