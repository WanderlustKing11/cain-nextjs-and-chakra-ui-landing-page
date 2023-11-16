// 'use client';
// import {
//   Box,
//   Flex,
//   HStack,
//   Text,
//   Icon,
//   Collapse,
//   IconButton,
//   Button,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   MenuDivider,
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
//   useBreakpointValue,
//   useDisclosure,
//   useColorModeValue,
//   Stack,
//   Image,
//   Slide,
// } from '@chakra-ui/react';
// import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';
// import { IoIosPhonePortrait } from 'react-icons/io';
// import { FaPhone } from 'react-icons/fa6';

// interface Props {
//   children: React.ReactNode;
// }

// const Links = ['Services', 'About', 'Contact'];

// const NavLink = (props: Props) => {
//   const { children } = props;

//   return (
//     <Box
//       as='a'
//       px={2}
//       py={1}
//       rounded={'md'}
//       _hover={{
//         textDecoration: 'none',
//         bg: useColorModeValue('gray.200', 'gray.700'),
//       }}
//       href={'#'}
//     >
//       {children}
//     </Box>
//   );
// };

// const Logo = (props: any) => {
//   return (
//     <Image
//       src='/logo3.png'
//       width={'2rem'}
//       height={'3rem'}
//       alt='Cain & Sons company logo fire extinguisher'
//     />
//   );
// };

// const CellIcon = (props: any) => {
//   return (
//     <Icon
//       as={IoIosPhonePortrait}
//       width={'2rem'}
//       height={'3rem'}
//       color={'red'}
//     />
//   );
// };

// const PhoneIcon = (props: any) => {
//   return <Icon as={FaPhone} color={'red'} {...props} />;
// };

// export default function Navbar() {
//   const bgColor = useColorModeValue('gray.100', 'gray.900');
//   const { isOpen, onToggle } = useDisclosure();

//   return (
//     <>
//       <Box id='navbar' bg={bgColor} px={4}>
//         <Flex 
//           h={16} 
//           alignItems={'center'} 
//           justifyContent={'space-between'}
//         >
//           <IconButton
//           onClick={onToggle}
//             size={'lg'}
//             icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
//             aria-label={'Toggle navigation'}
//             display={{ md: 'none' }}
//           />
//           <HStack spacing={8} alignItems={'center'}>
//             {/* <Image
//               src={'/logo3.png'}
//               h={'3rem'}
//               w={'2rem'}
//               alt='logo'
//             /> */}
//             <Logo />
//             {/* <Box>Logo</Box> */}
//             <HStack
//               as={'nav'}
//               spacing={4}
//               display={{ base: 'none', md: 'flex' }}
//             >
//               {Links.map((link) => (
//                 <NavLink key={link}>{link}</NavLink>
//               ))}
//             </HStack>
//           </HStack>
//           <Flex alignItems={'center'}>
//             <Menu>
//               <MenuButton
//                 as={Button}
//                 rounded={'full'}
//                 variant={'link'}
//                 cursor={'pointer'}
//                 minW={0}
//               >
//                 <CellIcon />
//               </MenuButton>
//               <MenuList>
//                 <MenuItem>
//                   <Stack
//                     direction='row'
//                     alignItems='center'
//                     justifyContent='center'
//                     spacing={4}
//                   >
//                     <PhoneIcon marginLeft={4} />
//                     <a
//                       href='tel:973-227-2277'
//                       style={{
//                         textDecoration: 'none',
//                         color: 'inherit',
//                       }}
//                     >
//                       <strong>(973) 227-2277</strong>
//                     </a>
//                   </Stack>
//                 </MenuItem>
//               </MenuList>
//             </Menu>
//           </Flex>
//         </Flex>
//       </Box>

//         <Box
//           display={{ md: 'none' }}
//           bg={bgColor}
//           px={4}
//           py={2}
//           mt={16}
//         >
//           <Stack as={'nav'}>
//             {Links.map((link) => (
//               <NavLink key={link}>{link}</NavLink>
//             ))}
//           </Stack>
//         </Box>

//       <Box p={4}>Main Content Here</Box>
//     </>
//   );
// }
