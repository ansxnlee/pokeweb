import { Container } from '../../components/Container'
import { Header } from '../../components/Header';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { ItemGrid } from '../../components/ItemGrid';

const Fossils = () => (
  <Container height="100vh">
    <Header />
    <Navbar />
    <ItemGrid data={SUBCATEGORIES} />
    <Footer />
  </Container>
)

export default Fossils;

interface SubCategory {
  label: string;
  path?: string;
  href?: string;
  price?: string;
}

const SUBCATEGORIES: Array<SubCategory> = [
  {
    label: 'Armor Fossil',
    path: '/items/items/fossils/armor-fossil.png',
    href: '#',
    price: '7000'
  },
  {
    label: 'Claw Fossil',
    path: '/items/items/fossils/claw-fossil.png',
    href: '#',
    price: '7000'
  },
  {
    label: 'Cover Fossil',
    path: '/items/items/fossils/cover-fossil.png',
    href: '#',
    price: '7000'
  },
  {
    label: 'Dome Fossil',
    path: '/items/items/fossils/dome-fossil.png',
    href: '#',
    price: '7000'
  },
  {
    label: 'Helix Fossil',
    path: '/items/items/fossils/helix-fossil.png',
    href: '#',
    price: '7000'
  },
  {
    label: 'Jaw Fossil',
    path: '/items/items/fossils/jaw-fossil.png',
    href: '#',
    price: '7000'
  },
  {
    label: 'Old Amber',
    path: '/items/items/fossils/old-amber.png',
    href: '#',
    price: '10000'
  },
  {
    label: 'Plume Fossil',
    path: '/items/items/fossils/plume-fossil.png',
    href: '#',
    price: '7000'
  },
  {
    label: 'Root Fossil',
    path: '/items/items/fossils/root-fossil.png',
    href: '#',
    price: '7000'
  },
  {
    label: 'Sail Fossil',
    path: '/items/items/fossils/sail-fossil.png',
    href: '#',
    price: '7000'
  },
  {
    label: 'Skull Fossil',
    path: '/items/items/fossils/skull-fossil.png',
    href: '#',
    price: '7000'
  },
];