import Link from 'next/link';
import {
  Box,
  Flex,
  IconButton,
  Stack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

export default function TestStaticNavbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue('gray.100', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>

        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Link href="/" passHref>
            <Box p={2} fontSize="sm" fontWeight={500}>
              Home
            </Box>
          </Link>
          <Link href="/about" passHref>
            <Box p={2} fontSize="sm" fontWeight={500}>
              About
            </Box>
          </Link>
          <Link href="/contact" passHref>
            <Box p={2} fontSize="sm" fontWeight={500}>
              Contact
            </Box>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
