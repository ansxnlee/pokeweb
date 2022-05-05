import { Container } from '../components/Container'
import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { MainCategory } from '../components/mainCategory';

const Tms = () => (
  <Container height="100vh">
    <Header />
    <Navbar />
    <MainCategory data={CATEGORIES} />
    <Footer />
  </Container>
)

export default Tms;

interface Category {
  label: string;
  path?: string;
  href?: string;
}

const CATEGORIES: Array<Category> = [
  {
    label: 'TMs 01-19',
    path: '/items/tm/hm01.png',
    href: '/items/trainer-utility'
  },
  {
    label: 'TMs 20-39',
    path: '/items/tm/hm02.png',
    href: '#'
  },
  {
    label: 'TMs 40-59',
    path: '/items/tm/hm03.png',
    href: '#'
  },
  {
    label: 'TMs 60-79',
    path: '/items/tm/hm04.png',
    href: '#'
  },
  {
    label: 'TMs 80-99',
    path: '/items/tm/hm05.png',
    href: '#'
  },
];