'use client';

import {
  Box,
  Flex,
  useColorModeValue,
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

const CustomCard: React.FC<CustomCardProps> = ({title, days, hours}) => {
  const cardWidth = useBreakpointValue({ base: '40%', md: '33%', lg: '20em' });

  return (
    <Card alignItems={'center'} width={cardWidth}>
      <CardHeader p={2} pt={4}>
        <Heading size={{sm: 'sm', md: 'md'}}>{title}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{days}</Text>
        <Text>{hours}</Text>
      </CardBody>
    </Card>
  );
};

export default function HoursOfOperation() {
  return (
    <Box bg={useColorModeValue('red.600', 'gray.800')} p={4}>
      <Flex
        direction={'row'}
        justifyContent={'space-evenly'}
        alignItems={'center'}
      >
        {/* <Card width={'33%'}>
          <CardHeader pb={0}>
            <Heading size='md'>Walk-in Hours</Heading>
          </CardHeader>
          <CardBody>
            <Text>Wednesday</Text>
            <Text>12pm - 3pm</Text>
          </CardBody>
        </Card>
        <Card alignItems={'center'} width={'33%'}>
          <CardHeader pb={0}>
            <Heading size='md'>Hours of Operation</Heading>
          </CardHeader>
          <CardBody>
            <Text>Mon - Fri</Text>
            <Text>9am - 5pm</Text>
          </CardBody>
        </Card> */}
        <CustomCard title='Walk-in Hours' days='Wednesday' hours='12pm - 3pm' />
        <CustomCard title='Hours of Operation' days='Mon - Fri' hours='9am - 5pm'  />
      </Flex>
    </Box>
  );
}
