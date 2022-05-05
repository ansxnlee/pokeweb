import { Container } from '../components/Container'
import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';
import { ItemGrid } from '../components/ItemGrid';
import { Footer } from '../components/Footer';

const Listing = () => (
  <Container height="100vh">
    <Header />
    <Navbar />
    <ItemGrid />
    <Footer />
  </Container>
)

export default Listing;