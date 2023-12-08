import {
  Box,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
  Image,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

export default function ServiceCards() {
  const cards = [
    {
      image: '/ps-10.jpg',
      alt: 'Multiple fire extinguishers',
      text: 'Fire Extinguishers',
    },
    {
      image: '/ps-09.jpg',
      alt: 'An industrial kitchen',
      text: 'Kitchen Systems',
    },
    {
      image: '/ps-01.jpg',
      alt: 'Man putting out a fire with a fire extinguisher',
      text: 'Fire Protection Services',
    },
  ];

  return (
    <Box      
      mt={{ base: '375px', md: '200px'}} 
      p={'10%'}
      bg='black' 
    >      
        <SimpleGrid
          spacing={4}
          columns={{ base: 1, md: 3 }}
          justifyContent='center'
          alignItems='center'
        >
            {cards.map((card, index) => (
          <Card 
            key={index} 
            align='center'
            w={{ base: '70%', sm: '80%', md: '90%', lg: '' }}
            h={{ base: '20rem', sm: '30rem', md: '20rem', lg: '' }}
            p={{ base: '4', sm: '8', md: '5' }}
            borderRadius='15%'
            bg={'blackAlpha.900'}
            border={'4px'}
            borderColor={'whiteAlpha.900'}
            transition='background-color 0.3s ease-in-out'
            _hover={{
                bg: 'whiteAlpha.800',
                cursor: 'pointer',
                '.card-text': {
                  color: 'black',
                },
                '.card-icon': {
                  color: 'black',
                },
              }}
          >
            <Image
              src={card.image}
              alt={card.alt}
              borderRadius='50%'
              w={{ base: '100px', sm: '10rem', md: '80px', lg: '100px' }}
              h={{ base: '100px', sm: '10rem', md: '80px', lg: '100px' }}
            />
            <CardBody>
              <Text 
                className='card-text'
                align={'center'}
                pt={{ sm: '10', md: '0'}}
                fontSize={{ base: '1.3rem', sm: '1.5rem', md: '1.2rem' }}
                color='whiteAlpha.900'
              >
                {card.text}
              </Text>
            </CardBody>
            <CardFooter>
              <ChevronDownIcon 
                className='card-icon'
                boxSize={10}  
                color='whiteAlpha.900'
              />
            </CardFooter>
          </Card>      
          ))}    
        </SimpleGrid>
      
    </Box>
  );
}
