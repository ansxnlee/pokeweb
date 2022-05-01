import { Container } from '../components/Container'
import { Footer } from '../components/Footer';
import Navbar from '../components/Navbar';
import { Header } from '../components/Header';
import { Box } from '@chakra-ui/react';

const Listing = () => (
  <Box>
    <Container height="100vh">
    <Header />
    <Navbar />
    <h1>test</h1>
    </Container>
    <Footer />
  </Box>
)

export default Listing;