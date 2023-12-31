'use client';

import Link from 'next/link';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { IoIosPhonePortrait } from 'react-icons/io';
import { FaPhone } from 'react-icons/fa6';

const Logo = (props: any) => {
  return (
    <Flex flexDir={'row'} alignItems='center'>
      <Image
        src='/logo1.png'
        width='2rem'
        height='3rem'
        ml={{ lg: '2rem' }}
        alt='Cain & Sons company logo fire extinguisher'
        display='flex'
      />
      <Image
        src='/logo3.png'
        alt='Company title'
        w='3.5rem'
        h='2.5rem'  
        ml='10px'      
      />
    </Flex>
  );
};

const CellIcon = (props: any) => {
  return (
    <Icon
      as={IoIosPhonePortrait}
      width={'2.5rem'}
      height={'3.5rem'}
      color={'red'}
      ml={{ lg: '15rem' }}
      mr={{ lg: '4' }}
    />
  );
};

const PhoneIcon = (props: any) => {
  return <Icon as={FaPhone} color={'red'} {...props} />;
};

export default function Navbar() {
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
          ml={{ base: -2 }}
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
        <Flex
          flex={{ base: 1 }}
          justify={{ base: 'center', md: 'start', lg: 'space-between' }}
        >
          <Link href='/' passHref>
            <Logo />
          </Link>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          <Menu>
            <MenuButton>
              <CellIcon />
            </MenuButton>
            <MenuList>
              <MenuItem
                onClick={() => (window.location.href = 'tel:973-227-2277')}
              >
                <Stack
                  direction='row'
                  alignItems='center'
                  justifyContent='center'
                  spacing={4}
                >
                  <PhoneIcon marginLeft={4} />
                  <Text>
                    <strong>(973) 227-2277</strong>
                  </Text>
                </Stack>
              </MenuItem>
            </MenuList>
          </Menu>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('red.500', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} align={'center'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link href={navItem.href ?? '#'} passHref>
                <Box
                  p={2}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}
                >
                  {navItem.label}
                </Box>
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href = '#', subLabel }: NavItem) => {
  return (
    <Link href={href} passHref>
      <Box
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('gray.300', 'gray.900') }}
      >
        <Stack direction={'row'} align={'center'} justify={'end'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'blue.400' }}
              fontWeight={500}
            >
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}
          >
            <Icon color={'gray.50'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Box>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      ml={20}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Link href={href ?? '#'} passHref>
        <Box
          py={2}
          justifyContent='space-between'
          alignItems='center'
          _hover={{
            textDecoration: 'none',
          }}
        >
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}
          >
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Box>
      </Link>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} href={child.href ?? '#'} passHref>
                <Box py={2}>{child.label}</Box>
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Services',
    children: [
      {
        label: 'Service Page',
        subLabel: 'Our services',
        href: '/services',
      },
      {
        label: 'Fire Extinguishers',
        subLabel: 'Service and maintenance',
        href: '/services',
      },
      {
        label: 'Kitchen Systems',
        subLabel: 'Keep up to code and regulations',
        href: '/services',
      },
    ],
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];
