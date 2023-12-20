import Link from 'next/link';
import {
  Box,
  Container,
  Flex,
  SimpleGrid,
  Image,
  Icon,
  Button,
} from '@chakra-ui/react';
import { FaFacebook } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

export default function Orgs() {
  return (
    <Box
      w='100%'
      h='auto'
      //   display='flex'
      //   justifyContent='center'
      //   alignContent='center'
    >
      <Container
        display='flex'
        justifyContent='center'
        alignContent='center'
        flexDir='column'
        my={{ base: '10%', md: '5%' }}
      >
        <Link href='https://mountolivechambernj.com/'>
          <Image
            src='/mo-logo.png'
            alt='Mount Olive Chamber of Commerce'
            w='80%'
            maxW={{ base: '300px', md: '400px' }}
            h='auto'
            m='0 auto'
          />
        </Link>
        <Flex mt='10%' justifyContent={'center'}>
          <SimpleGrid spacing={{ base: 20, md: 40 }} columns={{ base: 2 }}>
            <Link href='https://www.facebook.com/cainandsonsfire/?fref=ts'>
              <Button
                w='2.9rem'
                h='2.9rem'
                borderRadius='50%'
                bgColor='whiteAlpha.100'
                _hover={{
                  bgColor: 'blue.700',
                  '.icon': {
                    color: 'gray.100',
                    transition: 'color 0.3s ease-in-out',
                  },
                }}
                _active={{
                  // '.icon': {
                  //   color: 'red.800',
                  // }
                  bgColor: 'cyan.600',
                  transition: 'none',
                }}
                transition='background-color 0.3s ease-in-out'
              >
                <Icon
                  as={FaFacebook}
                  className='icon'
                  color='blue.700'
                  boxSize='10'
                />
              </Button>
            </Link>
            <Link href='https://www.instagram.com/cainandsonsfireequipment/'>
              <Button
                w='2.9rem'
                h='2.9rem'
                borderRadius='15px'
                bgColor='whiteAlpha.100'
                _hover={{
                  bgColor: 'blue.700',
                  '.icon': {
                    color: 'gray.100',
                    transition: 'color 0.3s ease-in-out',
                  },
                }}
                _active={{
                  // '.icon': {
                  //   color: 'red.800',
                  // }
                  bgColor: 'purple.500',
                  transition: 'none',
                }}
                transition='background-color 0.3s ease-in-out'
              >
                <Icon
                  as={AiFillInstagram}
                  className='icon'
                  color='blue.700'
                  boxSize='12'
                />
              </Button>
            </Link>
          </SimpleGrid>
        </Flex>
      </Container>
    </Box>
  );
}
