import { useState } from 'react';
import {
  Box,
  Flex,
  useColorModeValue,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Heading,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function EmailForm() {
  const [input, setInput] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  const isError = isSubmitted && !/^\S+@\S+\.\S+$/.test(input);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <Box bg={'red.700'} p={{ base: '10%' }}>
      <Flex flexDirection={'column'}>
        <Heading color={'gray.100'}>Need Help?</Heading>
        <FormControl isInvalid={isError}>
          <FormLabel color={'gray.100'}>
            Enter your email address, and we&apos;ll send you information
            regarding our services
          </FormLabel>
          <Input
            type='email'
            placeholder='email@example.com'
            onChange={handleInputChange}
            variant='filled'
          />          
          {isError && (
            <FormErrorMessage color={'gray.100'}>
              Not a valid email address
            </FormErrorMessage>
          )}
        </FormControl>
        <Button
          type='submit'
          color={'gray.100'}
          bgColor={'gray.900'}
          onClick={handleSubmit}
          mt={4}
          _active={{
            bg: 'gray.300',
            transform: 'scale(0.98)',
          }}
        >
          Submit
        </Button>
      </Flex>
    </Box>
  );
}
