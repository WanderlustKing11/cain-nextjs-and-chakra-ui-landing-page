import {    
    Box,
    VStack,
    Container,    
    Heading,
    Text,
  } from '@chakra-ui/react';

export default function Terms() {
  return (
    <div>
      <VStack>
        <Container mt={16} mb={4} mx={5}>
          <Text color={'cyan.400'}>Current as of Dec 20, 2023</Text>
          <Heading as='h1' fontSize={'2.5rem'} color={'gray.600'} my={2}>
            Terms of Service
          </Heading>
          <Text mt={10}>
          By accessing our website, you are agreeing to be bound by these terms of service, and agree that you are responsible for compliance with any applicable local laws.
          </Text> 
        </Container>
        <Container my={2} mx={5} color={'gray.700'}>
          <Heading as='h2' fontSize={'2.2rem'} color={'gray.600'} my={2}>General Terms</Heading>
          <Text m={4}>By accessing, entering your email, or requesting services from Cain & Sons, you confirm that you are in agreement with and bound by the terms and conditions contained in the Terms Of Use outlined below. These terms apply to the entire website and any email or other type of communication between you and Cain & Sons.</Text>
          <Text m={4}>Under no circumstances shall Cain & Sons be liable for any direct, indirect, special, incidental or consequential damages, including, but not limited to, loss of data or profit, arising out of the use, or the inability to use, the services listed on this site.</Text>          
        </Container>
        <Container my={2} mx={5} color={'gray.700'}>
          <Heading as='h2' fontSize={'2.2rem'} color={'gray.600'} my={4}>Changes about terms</Heading>
          <Text m={4}>If we change our terms of use we will post those changes on this page. Existing customers will be sent an email that outlines changes made to the terms of use.</Text>
        </Container>
      </VStack>
    </div>
  )
}