import { Container } from '../components/Container'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import Navbar from '../components/Navbar';
import { ItemGrid } from '../components/ItemGrid';
import { Box } from '@chakra-ui/react';

const Listing = () => (
  <Box>
    <Container height="100vh">
      <Header />
      <Navbar />
      <h1>test above</h1>
      <ItemGrid />
      <h1>test under</h1>
      <Footer />
    </Container>
    
  </Box>
)

export default Listing;