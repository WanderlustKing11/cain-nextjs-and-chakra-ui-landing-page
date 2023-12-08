'use client';

import { Flex, Box, useBreakpointValue } from '@chakra-ui/react';
import PrimaryFeature from './PrimaryFeature';
import ServiceTitle from './ServiceTitle';
import CompanyQuote from './CompanyQuote';

export default function FeatureFlex1() {
  // const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });
  // const childWidth = useBreakpointValue({ base: '100%', md: '50%' });
  const showQuote = useBreakpointValue({ base: false, md: true });

  return (
    <>
      <Flex
        // flexFlow={flexDirection}
        direction={{ base: 'column', md: 'row' }}
        justify='space-between'
        align='stretch'
        w='100%'
        h='500px'
      >
        <Box flex='1' minH={{ base: '400px', md: '400px' }}>
          <PrimaryFeature />
        </Box>
        <Box
          flex='1'
          minH={{ base: '400px', md: '400px' }}
          m={{ base: '1', md: '5' }}
          mt={{ md: '250px' }}
        >
          <ServiceTitle />
        </Box>
      </Flex>
      {showQuote && (
        <Box transform='translate(-22%, 0)'>
          <CompanyQuote />
        </Box>
      )}
    </>
  );
}
