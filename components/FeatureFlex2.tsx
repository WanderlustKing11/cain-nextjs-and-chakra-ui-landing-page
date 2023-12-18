import { Flex, Box, useBreakpointValue } from '@chakra-ui/react';
import EmailForm from './EmailForm';
import Blog from '@/components/Blog';

export default function FeatureFlex2() {
  // const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });
  // const childWidth = useBreakpointValue({ base: '100%', md: '50%' });
  const showQuote = useBreakpointValue({ base: false, md: true });

  return (
    <Box>
      <Flex
        // flexFlow={flexDirection}
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
        //   m={{ base: '1', md: '5' }}
        //   mt={{ base: '75px' , md: '250px' }}
        >
          <Blog />
        </Box>
      </Flex>
    </Box>
  );
}
