import { Container } from '../../components/Container'
import { Header } from '../../components/Header';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { ItemGrid } from '../../components/ItemGrid';

const Mulch = () => (
  <Container height="100vh">
    <Header />
    <Navbar />
    <ItemGrid data={SUBCATEGORIES} />
    <Footer />
  </Container>
)

export default Mulch;

interface SubCategory {
  label: string;
  path?: string;
  href?: string;
  price?: string;
}

const SUBCATEGORIES: Array<SubCategory> = [
  {
    label: 'Amaze Mulch',
    path: '/items/items/mulch/amaze-mulch.png',
    href: '#',
    price: '200'
  },
  {
    label: 'Boost Mulch',
    path: '/items/items/mulch/boost-mulch.png',
    href: '#',
    price: '200'
  },
  {
    label: 'Damp Mulch',
    path: '/items/items/mulch/damp-mulch.png',
    href: '#',
    price: '200'
  },
  {
    label: 'Gooey Mulch',
    path: '/items/items/mulch/gooey-mulch.png',
    href: '#',
    price: '200'
  },
  {
    label: 'Growth Mulch',
    path: '/items/items/mulch/growth-mulch.png',
    href: '#',
    price: '200'
  },
  {
    label: 'Rich Mulch',
    path: '/items/items/mulch/rich-mulch.png',
    href: '#',
    price: '200'
  },
  {
    label: 'Stable Mulch',
    path: '/items/items/mulch/stable-mulch.png',
    href: '#',
    price: '200'
  },
  {
    label: 'Surprise Mulch',
    path: '/items/items/mulch/surprise-mulch.png',
    href: '#',
    price: '200'
  },
];