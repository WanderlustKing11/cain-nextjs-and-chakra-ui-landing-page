import { Container, Heading } from '@chakra-ui/react';

export default function CompanyQuote() {
  return(
    <Container
      
      px={{ md: '75px', lg: '0' }}
    >
{/* Find an animated design feature to add here */}
      <Heading 
        fontSize={{ md: '1.5rem', lg: '2rem'}}
      >
        This is a strategic and well thought out company quote.
      </Heading>
    </Container>
  )
}