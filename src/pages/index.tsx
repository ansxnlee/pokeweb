import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

const Index = () => (
  <Container height="100vh">
    <Header />
    <Navbar />
    <h1>sample landing page content</h1>
    <h2>select a category to view items</h2>
    <h2>add a link to github</h2>
    <Footer />
  </Container>
)

export default Index
