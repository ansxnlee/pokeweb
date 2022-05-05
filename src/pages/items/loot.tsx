import { Container } from '../../components/Container'
import { Header } from '../../components/Header';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { ItemGrid } from '../../components/ItemGrid';

const Loot = () => (
  <Container height="100vh">
    <Header />
    <Navbar />
    <ItemGrid data={SUBCATEGORIES} />
    <Footer />
  </Container>
)

export default Loot;

interface SubCategory {
  label: string;
  path?: string;
  href?: string;
  price?: string;
}

const SUBCATEGORIES: Array<SubCategory> = [
  {
    label: 'Balm Mushroom',
    path: '/items/items/loot/balm-mushroom.png',
    href: '#',
    price: '15000'
  },
  {
    label: 'Big Mushroom',
    path: '/items/items/loot/big-mushroom.png',
    href: '#',
    price: '5000'
  },
  {
    label: 'Big Nugget',
    path: '/items/items/loot/big-nugget.png',
    href: '#',
    price: '40000'
  },
  {
    label: 'Big Pearl',
    path: '/items/items/loot/big-pearl.png',
    href: '#',
    price: '8000'
  },
  {
    label: 'Bottle Cap',
    path: '/items/items/loot/bottle-cap.png',
    href: '#',
    price: '5000'
  },
  {
    label: 'Comet Shard',
    path: '/items/items/loot/comet-shard.png',
    href: '#',
    price: '60000'
  },
  {
    label: 'Discount Coupon',
    path: '/items/items/loot/discount-coupon.png',
    href: '#',
    price: '20'
  },
  {
    label: 'Gold Bottle Cap',
    path: '/items/items/loot/gold-bottle-cap.png',
    href: '#',
    price: '10000'
  },
  {
    label: 'Nugget',
    path: '/items/items/loot/nugget.png',
    href: '#',
    price: '10000'
  },
  {
    label: 'Pearl',
    path: '/items/items/loot/pearl.png',
    href: '#',
    price: '2000'
  },
  {
    label: 'Pearl String',
    path: '/items/items/loot/pearl-string.png',
    href: '#',
    price: '30000'
  },
  {
    label: 'Pretty Wing',
    path: '/items/items/loot/pretty-wing.png',
    href: '#',
    price: '1000'
  },
  {
    label: 'Rare Bone',
    path: '/items/items/loot/rare-bone.png',
    href: '#',
    price: '5000'
  },
  {
    label: 'Relic Band',
    path: '/items/items/loot/relic-band.png',
    href: '#',
    price: '200000'
  },
  {
    label: 'Relic Copper',
    path: '/items/items/loot/relic-copper.png',
    href: '#',
    price: '2000'
  },
  {
    label: 'Relic Crown',
    path: '/items/items/loot/relic-crown.png',
    href: '#',
    price: '300000'
  },
  {
    label: 'Relic Gold',
    path: '/items/items/loot/relic-gold.png',
    href: '#',
    price: '100000'
  },
  {
    label: 'Relic Silver',
    path: '/items/items/loot/relic-silver.png',
    href: '#',
    price: '10000'
  },
  {
    label: 'Relic Statue',
    path: '/items/items/loot/relic-statue.png',
    href: '#',
    price: '200000'
  },
  {
    label: 'Relic Vase',
    path: '/items/items/loot/relic-vase.png',
    href: '#',
    price: '50000'
  },
  {
    label: 'Stardust',
    path: '/items/items/loot/stardust.png',
    href: '#',
    price: '3000'
  },
  {
    label: 'Star Piece',
    path: '/items/items/loot/star0piece.png',
    href: '#',
    price: '12000'
  },
  {
    label: 'Strange Souvenir',
    path: '/items/items/loot/strange-souvenir.png',
    href: '#',
    price: '3000'
  },
  {
    label: 'Tiny Mushroom',
    path: '/items/items/loot/tiny-mushroom.png',
    href: '#',
    price: '500'
  },
];