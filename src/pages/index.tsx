import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Flex, Text } from '@chakra-ui/react'
import Link from "next/link";

const Index = () => (
  <Container height="100vh">
    <Header />
    <Navbar />
    <Flex mx='auto' justifyContent='center' p='10'>
      <Flex direction='column' alignItems="center" gap='2'>
        <Text mb={4} fontSize='5xl' fontWeight='bold'>
          Welcome to the Pokemart!
        </Text>
        <Text pt={4} fontSize={'2xl'} textAlign={'center'}>
          Choose one of the categories above to start
        </Text>
        <Text pt={4} fontSize={'2xl'} textAlign={'center'}>
          or use the searchbar to find what you're looking for.
        </Text>
        {/* chakra's text component renders <p> by default so this is a workaround */}
        <Text pt={4} fontSize={'sm'} textAlign={'center'}>
          Checkout my
          {" "}
          <Text as='span' display='inline' color='blue.400' _hover={{ color: 'orange' }}>
            <Link href='#'>
              github
            </Link>
          </Text>
          {" "}
          for the source code.
        </Text>
      </Flex>
    </Flex>
    <Footer />
  </Container>
)

export default Index
