import { Flex, Box, Container, Text } from '@chakra-ui/react';

export default function Location() {
  return (
    <Flex 
      bgColor={'gray.800'} 
      justifyContent={'center'} 
      mx={{ md: '3%' }}
      mt={{ base: '300px', md: '0px' }}
      // h={'20rem'}
      borderRadius={{ base: 0, md: '10px' }}
    >
      <Container 
        display={'flex'}
        justifyContent={'center'} 
        alignContent={'center'}
        flexDir={'column'}
        m={10}
        h={'100%'}
      >
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12072.876126161924!2d-74.83355260615653!3d40.845114670700504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3767c812df63b%3A0xaf5480eb82bd93df!2sCain%20%26%20Sons%20Fire%20Equipment!5e0!3m2!1sen!2sus!4v1664723030431!5m2!1sen!2sus'
          allowFullScreen={true}
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          width={'100%'}
          height={'275px'}
        ></iframe>
        <Text 
          mt={3} 
          color={'gray.100'}
          fontSize={'1.2rem'}
        >
          **For any customers that wish to visit us at our office location, please use the rear-side entrance
        </Text>
      </Container>
    </Flex>
  );
}
