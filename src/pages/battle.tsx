import { Container } from '../components/Container'
import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { MainCategory } from '../components/mainCategory';

const Battle = () => (
  <Container height="100vh">
    <Header />
    <Navbar />
    <MainCategory data={CATEGORIES} />
    <Footer />
  </Container>
)

export default Battle;

interface Category {
  label: string;
  path?: string;
  href?: string;
}

const CATEGORIES: Array<Category> = [
  {
    label: 'Stat Boosts',
    path: '/items/battle/stat/dire-hit.png',
    href: '/items/trainer-utility'
  },
  {
    label: 'Flutes',
    path: '/items/battle/flute/blue-flute.png',
    href: '/items/trainer-utility'
  },
  {
    label: 'Miracles',
    path: '/items/battle/miracle/item-drop.png',
    href: '/items/trainer-utility'
  },
];