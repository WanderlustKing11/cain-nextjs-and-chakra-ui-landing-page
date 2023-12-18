import {
  Flex,
  SimpleGrid,
  VStack,
  Container,
  Heading,
  Text,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react';
import { FaHospital } from 'react-icons/fa';
import { PiOfficeChairFill } from 'react-icons/pi';
import { FaHouseUser } from 'react-icons/fa';

export default function ClientExamples() {
  const iconColors = useColorModeValue('blue.500', 'blue.700');
  const iconSizes = { base: 10, lg: 14 }

  return (
    <Container p={14}>
      <Heading 
        display='flex' 
        justifyContent='center'
        mb={16}
        textAlign='center'
      >
        Who do we serve?
      </Heading>
      <SimpleGrid spacing={{ base: 20, md: 40 }} columns={{ base: 1, md: 3 }}>
        <VStack>
          <Icon as={FaHospital} color={iconColors} boxSize={iconSizes} />
          <Text fontSize='1.3rem'>Hospitals</Text>
        </VStack>
        <VStack>
          <Icon as={PiOfficeChairFill} color={iconColors} boxSize={iconSizes} />
          <Text fontSize='1.3rem'>Offices</Text>
        </VStack>
        <VStack>
          <Icon as={FaHouseUser} color={iconColors} boxSize={iconSizes} />
          <Text fontSize='1.3rem' w={'150px'}>Private Housing</Text>
        </VStack>
      </SimpleGrid>

      <Flex 
        mt={10}
        p={{ base: 4, md: 0 }}
        fontSize={{ base: 27, md: '1.6rem' }}
        justifyContent='center'
        // w={{  md: '130%' }}
      >
        <Text 
          textAlign='center'
        >
          We have served businesses and organizations locally for the past 46 years. You trusted us, now let us take care of the rest.
        </Text>
      </Flex>
    </Container>
  );
}
