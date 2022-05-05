import { Container } from '../components/Container'
import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { MainCategory } from '../components/mainCategory';

const Pokeballs = () => (
  <Container height="100vh">
    <Header />
    <Navbar />
    <MainCategory data={CATEGORIES} />
    <Footer />
  </Container>
)

export default Pokeballs;

interface Category {
  label: string;
  path?: string;
  href?: string;
}

const CATEGORIES: Array<Category> = [
  {
    label: 'Standard',
    path: '/items/pokeballs/normal/poke-ball.png',
    href: '/items/trainer-utility'
  },
  {
    label: 'Special',
    path: '/items/pokeballs/special/luxury-ball.png',
    href: '#'
  },
  {
    label: 'Apricorn',
    path: '/items/pokeballs/apricorn/moon-ball.png',
    href: '#'
  },
];