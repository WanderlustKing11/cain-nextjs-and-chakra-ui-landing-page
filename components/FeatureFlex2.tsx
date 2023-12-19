import { Flex, Box } from '@chakra-ui/react';
import EmailForm from './EmailForm';
import Blog from '@/components/Blog';

export default function FeatureFlex2() {

  return (
    <Box>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify='space-between'
        align='stretch'
        w='100%'
        h='500px'
      >
        <Box flex='1' minH={{ base: '400px', md: '400px' }}>
          <EmailForm />
        </Box>
        <Box
          flex='1'
          minH={{ base: '400px', md: '400px' }}
        >
          <Blog />
        </Box>
      </Flex>
    </Box>
  );
}
