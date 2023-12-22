import { VStack, Container, Image, Heading, Text } from '@chakra-ui/react';

export default function about() {
  return (
    <div style={{ margin: '0px' }}>
      <VStack m={0}>
        <Container m={20} mb={0}>
          <Heading as='h1' fontSize='3rem'>
            About Us
          </Heading>
        </Container>
        <Container m={20} mb={0}>
          <Text>
            We are a local business, for local businesses. We help you, the
            little guy, and everybody else make sure that your extinguisher
            servicing needs meet quality standards.
          </Text>
          <Container
            my={'3rem'}
            p={'3%'}
            borderRadius={'5px'}
            bgColor={'gray.100'}
            boxShadow={'1px 3px 5px gray'}
            maxW={'300'}
          >
            <Image
              src='/cs-img01.jpg'
              alt='Owner Ron Cain educating about fire extinguisher servicing at a local school'
              w={'100%'}
              h={'auto'}
              // transform={'translate(30%, 0)'}
            />
          </Container>
          <Heading 
            as='h2' 
            color={'gray.500'}
            fontSize={'1.8rem'}
          >
            Who we are
          </Heading>
          <Text mt={'2rem'}>
            Cain & Sons Fire Equipment was founded in 1977 by Ronald Cain Sr., a
            long-time firefighter and chief with the Pine Brook Volunteer Fire
            Department. In spring 2016, Ronald Cain III became president.
          </Text>
          <Text mt={'1rem'}>
            Through utilization of technology, we strive to expedite service to
            our valued customers, while remaining dedicated to the ideals his
            grandfather founded the company on, friendly customer care and
            thorough fire protection services.
          </Text>
        </Container>
      </VStack>
    </div>
  );
}
