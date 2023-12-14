import {
  Box,
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

  return (
    <Container p={14}>
      <Heading 
        display='flex' 
        justifyContent='center'
        mb={16}
      >
        Who do we serve?
      </Heading>
      <SimpleGrid spacing={10} columns={{ base: 1, md: 3 }}>
        <VStack>
          <Icon as={FaHospital} color={iconColors} boxSize={7} />
          <Text fontSize='1.3rem'>Hospitals</Text>
        </VStack>
        <VStack>
          <Icon as={PiOfficeChairFill} color={iconColors} boxSize={7} />
          <Text fontSize='1.3rem'>Offices</Text>
        </VStack>
        <VStack>
          <Icon as={FaHouseUser} color={iconColors} boxSize={7} />
          <Text fontSize='1.3rem'>Private Housing</Text>
        </VStack>
      </SimpleGrid>
    </Container>
  );
}
