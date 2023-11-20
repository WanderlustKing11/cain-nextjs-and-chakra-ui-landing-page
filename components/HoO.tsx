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
} from '@chakra-ui/react';

export default function HoursOfOperation() {
  return (
    <Box bg={useColorModeValue('red.600', 'gray.800')} p={4}>
      <Flex
        direction={'row'}
        justifyContent={'space-evenly'}
        alignItems={'center'}
      >
        <Card>
          <CardHeader>
            <Heading size='md'> Customer dashboard</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <Heading size='md'> Customer dashboard</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
        </Card>
      </Flex>
    </Box>
  );
}
