import { Container } from '../components/Container'
import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { MainCategory } from '../components/mainCategory';

const Mail = () => (
  <Container height="100vh">
    <Header />
    <Navbar />
    <MainCategory data={CATEGORIES} />
    <Footer />
  </Container>
)

export default Mail;

interface Category {
  label: string;
  path?: string;
  href?: string;
}

const CATEGORIES: Array<Category> = [
  {
    label: 'Mail',
    path: '/items/mail/reply-mail.png',
    href: '/items/trainer-utility'
  },
];