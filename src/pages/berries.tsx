import { Container } from '../components/Container'
import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { MainCategory } from '../components/mainCategory';

const Berries = () => (
  <Container height="100vh">
    <Header />
    <Navbar />
    <MainCategory data={CATEGORIES} />
    <Footer />
  </Container>
)

export default Berries;

interface Category {
  label: string;
  path?: string;
  href?: string;
}

const CATEGORIES: Array<Category> = [
  {
    label: 'Medicine',
    path: '/items/berries/medicine/oran-berry.png',
    href: '/items/trainer-utility'
  },
  {
    label: 'Picky Healing',
    path: '/items/berries/picky/figy-berry.png',
    href: '#'
  },
  {
    label: 'Pinch',
    path: '/items/berries/pinch/starf-berry.png',
    href: '#'
  },
  {
    label: 'Type Protection',
    path: '/items/berries/type/haban-berry.png',
    href: '#'
  },
  {
    label: 'Effort Drop',
    path: '/items/berries/effort/grepa-berry.png',
    href: '#'
  },
  {
    label: 'Baking',
    path: '/items/berries/baking/cornn-berry.png',
    href: '#'
  },
  {
    label: 'Others',
    path: '/items/berries/other/rowap-berry.png',
    href: '#'
  },
];