import {    
    Box,
    VStack,
    Container,    
    Heading,
    Text,
  } from '@chakra-ui/react';

export default function Privacy() {
  return (
    <div>
      <VStack>
        <Container my={20} mx={5}>
          <Text color={'cyan.400'}>Current as of Dec 20, 2023</Text>
          <Heading as='h1' color={'gray.600'} my={2}>
            Privacy Policy
          </Heading>
        </Container>
        <Container my={10} mx={5} color={'gray.700'}>
          <Text>
          Your privacy is important to us. We respect your privacy regarding any information we may collect from you across our website.
          </Text>          
        </Container>
        <Container my={10} mx={5} color={'gray.700'}>
          <Heading as='h2' color={'gray.600'} my={2}>General rules</Heading>
          <Text m={4}>Cain & Sons does not share personal information of any kind with anyone. We will not sell or rent your name or personal information to any third party.</Text>
          <Text m={4}>We do not sell, rent or provide outside access to our mailing list or any data we store. Any data that a user stores via our website is wholly owned by that user or business.</Text>
          <Text m={4}>At any time a user or business is free to take their data and leave, or to simply delete their data from our website.</Text>
          <Text m={4}>Cain & Sons only collects such personal information that is necessary for you to access and use our services. This personal information includes, but is not limited to, first and last name, email address.</Text>
          <Text m={4}>Cain & Sons may release personal information if Cain & Sons is required to by law, search warrant, subpoena, court order or fraud investigation. We may also use personal information in a manner that does not identify you specifically nor allow you to be contacted but does identify certain criteria about our Site&apos;s users in general (such as we may inform third parties about the number of registered users, number of unique visitors, and the pages most frequently browsed).</Text>
        </Container>
        <Container my={10} mx={5} color={'gray.700'}>
          <Heading as='h2' color={'gray.600'} my={4}>Changes about privacy</Heading>
          <Text m={4}>If we change our terms of use we will post those changes on this page. Registered users will be sent an email that outlines changes made to the terms of use.</Text>
        </Container>
      </VStack>
    </div>
  )
}