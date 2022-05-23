import { useRouter } from 'next/router';
import { Container } from '../../components/Container'
import { Header } from '../../components/Header'
import { SimpleNavbar } from '../../components/SimpleNavbar'
import { Footer } from '../../components/Footer'
import { useProductQuery } from '../../generated/graphql';
import { Flex, Box, Image } from '@chakra-ui/react';
import { CartAdd } from '../../components/cartAdd';

const Detail = () => {
  const router = useRouter()
  const number = parseInt(router.query.pid as string, 10);
  const [{ data, fetching, error }] = useProductQuery({ variables: { productId: number } });

  if (fetching) return <></>
  if (error) return <p>{error.message}</p>

  return (
    <Container height="100vh">
      <Header />
      <SimpleNavbar />
      
      <Flex direction="column" alignItems='center' py='10'>
        <Box 
          w='mincontent' 
          p='10' 
          border='1px'
          borderColor='blue.500'
          borderRadius='20px'
        >
          <Flex direction="column" alignItems='center'>
            <Box>{data.product.nameEng}</Box>
            <Box>'{data.product.category}' type item</Box>
            <Box>{data.product.text}</Box>
            <Image src={data.product.sprite} w='30px' h='30px'/>
            <Box>Cost: ¥{data.product.cost}</Box>
            <Box>{data.product.effect}</Box>
            <Box 
              mt='5'
              border='1px'
              borderColor='orange.500'
              borderRadius='5px'
              >
              <CartAdd productId={data.product.id} productName={data.product.nameEng}/>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Footer />
    </Container>
  )
}

export default Detail;