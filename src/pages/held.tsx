import { Container } from '../components/Container'
import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { MainCategory } from '../components/mainCategory';

const Held = () => (
  <Container height="100vh">
    <Header />
    <Navbar />
    <MainCategory data={CATEGORIES} />
    <Footer />
  </Container>
)

export default Held;

interface Category {
  label: string;
  path?: string;
  href?: string;
}

const CATEGORIES: Array<Category> = [
  {
    label: 'Held Items',
    path: '/items/held/held/quick-claw.png',
    href: '/items/trainer-utility'
  },
  {
    label: 'Negative Held',
    path: '/items/held/negativeHeld/sticky-barb.png',
    href: '#'
  },
  {
    label: 'Training',
    path: '/items/held/training/amulet-coin.png',
    href: '#'
  },
  {
    label: 'Type Enchance',
    path: '/items/held/typeEnhance/metal-coat.png',
    href: '#'
  },
  {
    label: 'Mega Stones',
    path: '/items/held/megastones/ampharosite.png',
    href: '#'
  },
  {
    label: 'Species',
    path: '/items/held/species/stick.png',
    href: '#'
  },
  {
    label: 'Plates',
    path: '/items/held/plates/flame-plate.png',
    href: '#'
  },
  {
    label: 'Effort',
    path: '/items/held/effort/power-anklet.png',
    href: '#'
  },
  {
    label: 'Choice',
    path: '/items/held/choice/choice-scarf.png',
    href: '#'
  },
];