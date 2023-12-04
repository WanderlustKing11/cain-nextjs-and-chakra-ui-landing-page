'use client';

import {
  Box,
  Flex,
  VStack,
  Container,
  Center,
  useColorModeValue,
  Button,
  Spacer,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

interface CustomCardProps {
  title: string;
  days: string;
  hours: string;
}

const CustomCard: React.FC<CustomCardProps> = ({ title, days, hours }) => {
  const cardWidth = useBreakpointValue({
    base: '40%',
    sm: '200px',
    md: '30%',
    lg: '15em',
  });
  const cardHeight = useBreakpointValue({
    base: '160px',
    sm: '175px',
    md: '200',
    lg: '15em',
  });
  const cardTextColor = useColorModeValue('gray.700', 'gray.900');

  return (
    <Card
      alignItems={'center'}
      width={cardWidth}
      height={cardHeight}
      mt={{ base: 4, sm: 4, md: 6, lg: 10 }}
      mb={{ base: 4, sm: 4, md: 6, lg: 10 }}
    >
      <CardHeader p={2} pt={{ base: 6, sm: 6, md: 6, lg: 12 }}>
        <Heading
          size={{ sm: 'md', md: 'md', lg: 'md' }}
          fontSize={{ base: '0.79rem' }}
          color={cardTextColor}
        >
          {title}
        </Heading>
      </CardHeader>
      <CardBody>
        <Text
          fontSize={{ base: '1rem', sm: '1.3rem', md: '1.3rem', lg: '1.8rem' }}
          color={cardTextColor}
        >
          {days}
        </Text>
        <Text
          fontSize={{ base: '1rem', sm: '1.3rem', md: '1.3rem', lg: '1.8rem' }}
          color={cardTextColor}
        >
          {hours}
        </Text>
      </CardBody>
    </Card>
  );
};

export default function HoursOfOperation() {
  return (
    <Box bg={useColorModeValue('red.700', 'gray.800')} p={4}>
      <Flex
        direction={'row'}
        justifyContent={'space-evenly'}
        alignItems={'center'}
      >
        <CustomCard title='Walk-in Hours' days='Wednesday' hours='12pm - 3pm' />
        <CustomCard
          title='Hours of Operation'
          days='Mon - Fri'
          hours='9am - 5pm'
        />
      </Flex>
    </Box>
  );
}
