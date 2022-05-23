import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { SimpleNavbar } from '../components/SimpleNavbar'
import { Footer } from '../components/Footer'
import { Box, Flex, Image, Wrap, WrapItem } from '@chakra-ui/react'
import Link from "next/link";
import { useProductsQuery } from '../generated/graphql'
import { CartAdd } from '../components/cartAdd'

const Index = () => {
  const [{ data, fetching, error }] = useProductsQuery();

  if (fetching) return <></>
  if (error) return <p>{error.message}</p>
  return (
    <Container height="100vh">
      <Header />
      <SimpleNavbar />
      <Flex mx='auto' justifyContent='center' p='10' bg="gray.50" _dark={{ bg: 'gray.900', color: 'white'}}>
        <Flex direction='column' alignItems="center" gap='2'>
          <Wrap spacing='10px' justify='center'>
            {data.products.map((item) => (
              <WrapItem key={item.id}>
                <Box w='180px' h='180px' borderRadius='10px'>
                  <Flex direction='column' h='100%' justifyContent='center' alignItems='center'>
                    <Flex h='5em' alignItems='center'>
                      <a href={'detail/' + item.id}>
                        <Image src={item.sprite} width='30px' height='30px' />
                      </a>
                    </Flex>
                    <Box _hover={{ color: 'orange' }}>
                      <Link href={'detail/' + item.id}>
                        {item.nameEng}
                      </Link>
                    </Box>
                    <Box  _hover={{ color: 'red' }}>
                      <span>¥</span>
                      <a href={'detail/' + item.id}>
                        {item.cost}
                      </a>
                    </Box>
                    <Box>
                      <CartAdd productId={item.id} productName={item.nameEng} />
                    </Box>
                  </Flex>
                </Box>
              </WrapItem>
            ))}
          </Wrap>
        </Flex>
      </Flex>
      <Footer />
    </Container>
  )
}

export default Index
