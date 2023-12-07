import {
    
    VStack,
    Container,
    
    Heading,
    Text,
  } from '@chakra-ui/react';

export default function Blog() {
  return (
    <div>
      <VStack>
        <Container m={20}>
          <Heading>
            Blog Page
          </Heading>
        </Container>
        <Container m={20}>
          <Text>
            This page is still under construction.
          </Text>
          <Text>
            More content, coming soon!
          </Text>
        </Container>
      </VStack>
    </div>
  )
}