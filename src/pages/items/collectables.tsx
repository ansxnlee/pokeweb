import { Container } from '../../components/Container'
import { Header } from '../../components/Header';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { ItemGrid } from '../../components/ItemGrid';

const Collectables = () => (
  <Container height="100vh">
    <Header />
    <Navbar />
    <ItemGrid data={SUBCATEGORIES} />
    <Footer />
  </Container>
)

export default Collectables;

interface SubCategory {
  label: string;
  path?: string;
  href?: string;
  price?: string;
}

const SUBCATEGORIES: Array<SubCategory> = [
  {
    label: 'Blue Shard',
    path: '/items/items/collectables/blue-shard.png',
    href: '#',
    price: '1000'
  },
  {
    label: 'Green Shard',
    path: '/items/items/collectables/green-shard.png',
    href: '#',
    price: '1000'
  },
  {
    label: 'Heart Scale',
    path: '/items/items/collectables/heart-scale.png',
    href: '#',
    price: '100'
  },
  {
    label: 'Red Shard',
    path: '/items/items/collectables/red-shard.png',
    href: '#',
    price: '1000'
  },
  {
    label: 'Shoal Salt',
    path: '/items/items/collectables/shoal-salt.png',
    href: '#',
    price: '20'
  },
  {
    label: 'Shoal Shell',
    path: '/items/items/collectables/shoal-shell.png',
    href: '#',
    price: '20'
  },
  {
    label: 'Yellow Shard',
    path: '/items/items/collectables/yellow-shard.png',
    href: '#',
    price: '1000'
  },
];