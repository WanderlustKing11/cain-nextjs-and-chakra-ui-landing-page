'use client';

import {
  VStack,
  Container,
  Box,
  BoxProps,
  Button,
  Heading,
  Text,
} from '@chakra-ui/react';

interface PrimaryFeatureProps extends BoxProps {
  // Your existing props here, if any
}

export default function PrimaryFeature() {
  return(
    <VStack spacing={4} align='stretch' mt='15%'>
        <Container centerContent>
          <Heading textAlign='center'>
            Received a violation notice?
          </Heading>
        </Container>
        <Container px={20} py={8} centerContent>
          <Text 
            textAlign={'center'} 
            fontSize={'1.3rem'}
          >
            Read our comprehensive guide so that you don&apos;t have to stress anymore.
          </Text>
        </Container>
        <Container centerContent>
          <Button 
            w={'100%'}
            size={'lg'}
            color={'gray.100'}
            bg={'red.600'}
            _hover={{ 
                bg: 'red.700', 
                transform: "translate(0%, -1px)",
            }}
            _active={{ 
                bg: 'gray.800',
                transform: "translate(0%, 3px)", 
            }}
          >
            Read Here
          </Button>
        </Container>
      </VStack>
  )
};