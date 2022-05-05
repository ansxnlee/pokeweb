import { Container } from '../components/Container'
import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { MainCategory } from '../components/mainCategory';

const Medicine = () => (
  <Container height="100vh">
    <Header />
    <Navbar />
    <MainCategory data={CATEGORIES} />
    <Footer />
  </Container>
)

export default Medicine;

interface Category {
  label: string;
  path?: string;
  href?: string;
}

const CATEGORIES: Array<Category> = [
  {
    label: 'Healing',
    path: '/items/medicine/healing/potion.png',
    href: '/items/trainer-utility'
  },
  {
    label: 'Status',
    path: '/items/medicine/status/burn-heal.png',
    href: '#'
  },
  {
    label: 'Revival',
    path: '/items/medicine/revival/revive.png',
    href: '#'
  },
  {
    label: 'PP Recovery',
    path: '/items/medicine/pp/ether.png',
    href: '#'
  },
  {
    label: 'Vitamins',
    path: '/items/medicine/vitamin/carbos.png',
    href: '#'
  },
];