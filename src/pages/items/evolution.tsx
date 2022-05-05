import { Container } from '../../components/Container'
import { Header } from '../../components/Header';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { ItemGrid } from '../../components/ItemGrid';

const Evolution = () => (
  <Container height="100vh">
    <Header />
    <Navbar />
    <ItemGrid data={SUBCATEGORIES} />
    <Footer />
  </Container>
)

export default Evolution;

interface SubCategory {
  label: string;
  path?: string;
  href?: string;
  price?: string;
}

const SUBCATEGORIES: Array<SubCategory> = [
  {
    label: 'Dawn Stone',
    path: '/items/items/evolution/dawn-stone.png',
    href: '#',
    price: '3000'
  },
  {
    label: 'Dragon Scale',
    path: '/items/items/evolution/dragon-scale.png',
    href: '#',
    price: '2000'
  },
  {
    label: 'Dubious Disc',
    path: '/items/items/evolution/dubious-disc.png',
    href: '#',
    price: '2000'
  },
  {
    label: 'Dusk Stone',
    path: '/items/items/evolution/dusk-stone.png',
    href: '#',
    price: '3000'
  },
  {
    label: 'Electirizer',
    path: '/items/items/evolution/electirizer.png',
    href: '#',
    price: '2000'
  },
  {
    label: 'Fire Stone',
    path: '/items/items/evolution/fire-stone.png',
    href: '#',
    price: '3000'
  },
  {
    label: 'Ice Stone',
    path: '/items/items/evolution/ice-stone.png',
    href: '#',
    price: '3000'
  },
  {
    label: 'Leaf Stone',
    path: '/items/items/evolution/leaf-stone.png',
    href: '#',
    price: '3000'
  },
  {
    label: 'Magmarizer',
    path: '/items/items/evolution/magmarizer.png',
    href: '#',
    price: '2000'
  },
  {
    label: 'Moon Stone',
    path: '/items/items/evolution/moon-stone.png',
    href: '#',
    price: '3000'
  },
  {
    label: 'Oval Stone',
    path: '/items/items/evolution/oval-stone.png',
    href: '#',
    price: '2000'
  },
  {
    label: 'Prism Scale',
    path: '/items/items/evolution/prism-scale.png',
    href: '#',
    price: '2000'
  },
  {
    label: 'Protector',
    path: '/items/items/evolution/protector.png',
    href: '#',
    price: '2000'
  },
  {
    label: 'Reaper Cloth',
    path: '/items/items/evolution/reaper-cloth.png',
    href: '#',
    price: '2000'
  },
  {
    label: 'Sachet',
    path: '/items/items/evolution/sachet.png',
    href: '#',
    price: '2000'
  },
  {
    label: 'Shiny Stone',
    path: '/items/items/evolution/shiny-stone.png',
    href: '#',
    price: '3000'
  },
  {
    label: 'Sun Stone',
    path: '/items/items/evolution/sun-stone.png',
    href: '#',
    price: '3000'
  },
  {
    label: 'Thunder Stone',
    path: '/items/items/evolution/thunder-stone.png',
    href: '#',
    price: '3000'
  },
  {
    label: 'Up-Grade',
    path: '/items/items/evolution/up-grade.png',
    href: '#',
    price: '2000'
  },
  {
    label: 'Water Stone',
    path: '/items/items/evolution/water-stone.png',
    href: '#',
    price: '3000'
  },
  {
    label: 'Whipped Dream',
    path: '/items/items/evolution/whipped-dream.png',
    href: '#',
    price: '2000'
  }, 
];