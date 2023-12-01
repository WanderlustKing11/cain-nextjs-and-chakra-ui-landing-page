'use client'

import React from 'react'
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react'
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: false, // Adjust for publish!!!!!!
  speed: 500,
  autoplaySpeed: 5000, 
  slidesToShow: 1,
  slidesToScroll: 1,
}

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null)

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '40px' })

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'Proud state family owned for over 40 years',
      text: "Your #1 fire extinguisher service",
      image: '/ps-03.jpg',
      position: { base: 'top left', sm: '10% -20%', md: '10% -50%', lg: '50% 10%' },
      size: { base: '300%', sm: '200%', md: '150%', lg: '70%' },
      textColor: 'gray.200',
      textTransfrom: { sm: 'translate(0, -50%)', md: 'translate(30%, -10%)', lg: 'translate(16%, -45%)' },
      transparentBg: { lg: 'hsla(100,0%,0%,0.3)' },
      borderRadius: { lg: '15px' },
    },
    {
      title: 'Small business helping other small businesses',
      text: "We believe that integrety and quality don't have to be exclusive.",
      image: '/ps-07.jpg',
      position: { base: '23% 0%', sm: '20% 0%', md: 'top left', lg: '50% 10%' },
      size: { base: '260%', sm: '185%', md: '115%', lg: '70%' },
      textColor: 'gray.200',
      textTransfrom: { sm: 'translate(0, -50%)', md: 'translate(31%, -10%)', lg: 'translate(30%, -45%)' },

    },
    {
      title: 'Design Projects 3',
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image: '/ps-02.jpg',
      position: { base: '60% 0%', sm: '60% 0%', md: '60% 0%', lg: '50% 10%' },
      size: { base: '250%', sm: '190%', md: '115%', lg: '70%' },
    },
  ]

  return (
    <Box 
      position={'relative'} 
      height={'600px'} width={'full'} 
      overflow={'hidden'}
      bgGradient='linear(to-l, gray.900, gray.900, red.800)'
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant={{md: 'ghost', lg: 'solid'}}
        colorScheme= 'white'
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant={{md: 'ghost', lg: 'solid'}}
        colorScheme='white'
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'6xl'}
            position="relative"
            backgroundPosition={card.position} // Custom in 'cards'
            backgroundRepeat="no-repeat"
            backgroundSize={card.size} // Adjust
            backgroundImage={`url(${card.image})`}>
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform={card.textTransfrom}
                backgroundColor={card.transparentBg}
                borderRadius={card.borderRadius}
              >
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '4xl' }}
                  margin={4}
                  mr={10}   
                  color={card.textColor}               
                >
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} 
                  color={card.textColor}
                  margin={4}
                  mr={10}
                >
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  )
}