import Link from 'next/link';
import {
  Box,
  VStack,
  Container,
  Flex,
  SimpleGrid,
  Heading,
  Text,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { FiPhone } from "react-icons/fi";
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { IoLocationOutline } from "react-icons/io5";
import { BiBluetooth } from 'react-icons/bi';


export default function Contact() {
  interface ContactItem {
    id: number;
    icon: any;
    iconColor: string;
    iconSize: number;
    href?: string;
    text: string | any;
    textM: number;
    textML: number;
    // children?: Array<ContactItem>;
    // href?: string;
  }
  
  const iconTheme = 'blue.300';

  const CONTACT_ITEMS: Array<ContactItem> = [
    {
      id: 1,
      icon: FiPhone, // phone icon
      iconColor: iconTheme,
      iconSize: 6,
      href: 'tel:973-227-2277',
      text: '+973-227-2277',
      textM: 4,
      textML: 5,
    },
    {
      id: 2,
      icon: MdOutlineAlternateEmail, // email icon
      iconColor: iconTheme,
      iconSize: 7,
      href: 'mailto:rcain@cainandsons.com',
      text: 'rcain@cainandsons.com',
      textM: 0,
      textML: 4,
    },
    {
      id: 3,
      icon: IoLocationOutline, // location icon
      iconColor: iconTheme,
      iconSize: 7,
      href: 'tel:973-227-2277',
      text: <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
              <Text>150 Mountain Ave, Unit C,</Text>
              <Text>Hackettstown, NJ 07840</Text>
            </SimpleGrid>,
      textM: 4,
      textML: 3,
    },
  ];

  return (
    <Box>
      <Box
        bgImage={'/ps-05.jpg'}
        bgSize={'cover'}
        bgRepeat={'no-repeat'}
        zIndex={-10}
      >
        <Box bgColor={'gray.800'} opacity={0.8} zIndex={-5}>
          <VStack zIndex={10}>
            <Container m={20} h={'200px'}>
              <Heading as='h1' fontSize='6xl' color={'gray.100'}>
                Contact Us
              </Heading>
            </Container>
          </VStack>
        </Box>
      </Box>
      <Flex>
        <SimpleGrid columns={{ base: 1, md: 3 }} m={{ base: 'auto', md: 0 }} w={'100%'}>
          <Box order={{ base: 3, md: 1 }}>
            <Box position='relative' w='100%' h='100%'>
            <Box
              position='absolute'
              top={0}
              left={0}
              right={0}
              bottom={0}
              bg={'gray.900'}
              opacity={0.8}
              zIndex={10}
              pointerEvents='none'
            ></Box>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12072.876126161924!2d-74.83355260615653!3d40.845114670700504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3767c812df63b%3A0xaf5480eb82bd93df!2sCain%20%26%20Sons%20Fire%20Equipment!5e0!3m2!1sen!2sus!4v1664723030431!5m2!1sen!2sus'
              allowFullScreen={true}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              width={'100%'}
              height={'100%'}
              style={{ position: 'relative', zIndex: 0, pointerEvents: 'auto' }}
            ></iframe>
            </Box>
          </Box>
          <Box order={{ base: 1, md: 2 }} bgColor={'gray.200'}>
            <VStack p={8} pt={20} align={'left'}>
              <Heading 
                as='h3' 
                color={'gray.600'}
                fontSize={'2rem'}
              >Meet us</Heading>
              {CONTACT_ITEMS.map((contItem) => (
              <HStack key={contItem.id}>                
                <Icon as={contItem.icon} color={contItem.iconColor} boxSize={contItem.iconSize} />
                <Link href={contItem.href ?? '#'}>
                  <Text 
                    m={contItem.textM} 
                    ml={contItem.textML}
                    _hover={{
                      color: 'blue.500',
                      transition: 'color 0.3s ease-in-out'
                    }}
                    transition={'color 0.3s ease-in-out'}
                  >
                    {contItem.text}
                  </Text>
                </Link>
              </HStack>
              ))}
            </VStack>            
          </Box>
          <Box order={{ base: 2, md: 3 }} bgColor={'gray.600'}>
            <VStack 
              p={8} 
              pt={20} 
              align={'left'}
              color={'gray.100'}
            >
            <Heading 
              as='h3'              
              fontSize={'2rem'}
              color={'gray.400'}
            >Hours of Operation</Heading>
            <Text><strong>Office Walk-ins are Wednesdays only</strong></Text>
            <Text> 12:00 pm - 3:00 pm</Text>
            <Text mt={3}>Call us Monday - Friday</Text>
            <Text>9:00 am - 5:00 pm</Text>
            </VStack>
          </Box>
        </SimpleGrid>
      </Flex>
    </Box>
  );
}
