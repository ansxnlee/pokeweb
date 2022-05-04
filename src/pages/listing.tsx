import { Container } from '../components/Container'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import Navbar from '../components/Navbar';
import { ItemGrid } from '../components/ItemGrid';

const Listing = () => (
  <Container height="100vh">
    <Header />
    <Navbar />
    <ItemGrid />
    <Footer />
  </Container>
)

export default Listing;