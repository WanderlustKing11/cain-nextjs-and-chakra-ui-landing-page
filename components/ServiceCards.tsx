import { useState } from 'react';
import { Global } from '@emotion/react';
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
  transition,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const chevronAnimation = `
  @keyframes chevronMove {
    0% { transform: translateY(0); }
    50% { transform: translateY(5px); }
    100% { transform: translateY(0); }
  }
`;

export default function ServiceCards() {
  const [clicked, setClicked] = useState(new Array(3).fill(false));

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

  const handleCardClick = (index: number) => {
    const newClicked = [...clicked];
    newClicked[index] = true;
    setClicked(newClicked);
    setTimeout(() => {
      newClicked[index] = false;
      setClicked(newClicked);
    }, 400);
  };

  return (
    <>
      <Global styles={chevronAnimation} />

      <Box mt={{ base: '375px', md: '200px' }} p={'10%'} bg='black'>
        <SimpleGrid
          spacing={{ base: 16, md: 3, lg: 5, xl: 7 }}
          columns={{ base: 1, md: 3 }}
          justifyContent='center'
          alignItems='center'
        >
          {cards.map((card, index) => (
            <Card
              key={index}
              align='center'
              onClick={() => handleCardClick(index)}
              cursor='pointer'
              w={{ base: '70%', sm: '80%', md: '90%', lg: '' }}
              maxW={{ sm: '350px'}}
              h={{
                base: '20rem',
                sm: '30rem',
                md: '22rem',
                lg: '22rem',
                xl: '27rem',
              }}
              mx={'auto'}
              p={{ base: 4, sm: 8, md: 5, xl: 7 }}
              borderRadius='15%'
              bg={'blackAlpha.900'}
              border={'4px'}
              borderColor={'whiteAlpha.900'}
              transition='background-color 0.3s ease-in-out'
              _hover={{
                bg: 'red.900',
                // '.card-text': {
                //   color: 'black',
                // },
                // '.card-icon': {
                //   color: 'black',
                // },
              }}
              sx={{
                '.card-icon': {
                  animation: clicked[index]
                    ? 'chevronMove 0.4s ease-in-out forwards'
                    : 'none',
                },
              }}
            >
              <Image
                src={card.image}
                alt={card.alt}
                borderRadius='50%'
                mt={{ base: 3, xl: 8 }}
                w={{
                  base: '90px',
                  sm: '10rem',
                  md: '80px',
                  lg: '100px',
                  xl: '130px',
                }}
                h={{
                  base: '90px',
                  sm: '10rem',
                  md: '80px',
                  lg: '100px',
                  xl: '130px',
                }}
                objectFit='cover'
                objectPosition={index === 2 ? 'right' : 'center' }
              />
              <CardBody>
                <Text
                  className='card-text'
                  align={'center'}
                  pt={{base: 3, sm: 5, md: 0, xl: 6 }}
                  fontSize={{ base: '1rem', sm: '1.5rem', md: '1.2rem' }}
                  color='whiteAlpha.900'
                >
                  {card.text}
                </Text>
              </CardBody>
              <CardFooter>
                <ChevronDownIcon
                  className='card-icon'
                  boxSize={{ base: 10, sm: 20, md: 10, lg: 12 }}
                  color='whiteAlpha.900'
                />
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}
