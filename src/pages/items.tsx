import { Container } from '../components/Container'
import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { MainCategory } from '../components/mainCategory';

const Items = () => (
  <Container height="100vh">
    <Header />
    <Navbar />
    <MainCategory data={CATEGORIES} />
    <Footer />
  </Container>
)

export default Items;

interface Category {
  label: string;
  path?: string;
  href?: string;
}

const CATEGORIES: Array<Category> = [
  {
    label: 'Trainer Utility',
    path: '/items/items/trainerUtility/repel.png',
    href: '/items/trainer-utility'
  },
  {
    label: 'Evolution',
    path: '/items/items/evolution/moon-stone.png',
    href: '#'
  },
  {
    label: 'Fossils',
    path: '/items/items/fossils/helix-fossil.png',
    href: '#'
  },
  {
    label: 'Loot',
    path: '/items/items/loot/big-nugget.png',
    href: '#'
  },
  {
    label: 'Collectables',
    path: '/items/items/collectables/heart-scale.png',
    href: '#'
  },
  {
    label: 'Mulch',
    path: '/items/items/mulch/growth-mulch.png',
    href: '#'
  },
];