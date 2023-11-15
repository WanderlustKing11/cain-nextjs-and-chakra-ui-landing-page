'use client';

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  Icon,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { IoIosPhonePortrait } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

interface Props {
  children: React.ReactNode;
}

const Links = ['Services', 'About', 'Contact'];

const NavLink = (props: Props) => {
  const { children } = props;

  return (
    <Box
      as='a'
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}
    >
      {children}
    </Box>
  );
};

const Logo = (props: any) => {
  return (
    <Image
      src='/logo3.png'
      width={'2rem'}
      height={'3rem'}
      alt='Cain & Sons company logo fire extinguisher'
    />
  )
}

const CellIcon = (props: any) => {
  return (
    <Icon 
      as={IoIosPhonePortrait}
      width={'2rem'}
      height={'3rem'}
      color={'red'}
    />
  )
}

const PhoneIcon = (props: any) => {
  return (
    <Icon 
      as={FaPhone}
      color={'red'}
    />
  )
}

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log('Is Dropdown open:', isOpen);

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'lg'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            {/* <Image
              src={'/logo3.png'}
              h={'3rem'}
              w={'2rem'}
              alt='logo'
            /> */}
            <Logo />
            {/* <Box>Logo</Box> */}
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              >
                <CellIcon />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Box display="flex" alignItems="center" justifyContent="flex-end">
                    <PhoneIcon mr={4} /> 999-999-9999
                  </Box>                  
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>Main Content Here</Box>
    </>
  );
}
