import { Container } from '../../components/Container'
import { Header } from '../../components/Header';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { ItemGrid } from '../../components/ItemGrid';

const TrainerUtility = () => (
  <Container height="100vh">
    <Header />
    <Navbar />
    <ItemGrid data={SUBCATEGORIES} />
    <Footer />
  </Container>
)

export default TrainerUtility;

interface SubCategory {
  label: string;
  path?: string;
  href?: string;
  price?: string;
}

const SUBCATEGORIES: Array<SubCategory> = [
  {
    label: 'Black Flute',
    path: '/items/items/trainerUtility/black-flute.png',
    href: '#',
    price: '20'
  },
  {
    label: 'Escape Rope',
    path: '/items/items/trainerUtility/escape-rope.png',
    href: '#',
    price: '1000'
  },
  {
    label: 'Fluffy Tail',
    path: '/items/items/trainerUtility/fluffy-tail.png',
    href: '#',
    price: '100'
  },
  {
    label: 'Max Repel',
    path: '/items/items/trainerUtility/max-repel.png',
    href: '#',
    price: '900'
  },
  {
    label: 'Poke Doll',
    path: '/items/items/trainerUtility/poke-doll.png',
    href: '#',
    price: '100'
  },
  {
    label: 'Poke Toy',
    path: '/items/items/trainerUtility/poke-toy.png',
    href: '#',
    price: '100'
  },
  {
    label: 'Repel',
    path: '/items/items/trainerUtility/repel.png',
    href: '#',
    price: '400'
  },
  {
    label: 'Super Repel',
    path: '/items/items/trainerUtility/super-repel.png',
    href: '#',
    price: '700'
  },
  {
    label: 'White Flute',
    path: '/items/items/trainerUtility/white-flute.png',
    href: '#',
    price: '20'
  },
];