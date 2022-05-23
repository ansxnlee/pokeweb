import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { SimpleNavbar } from '../components/SimpleNavbar'
import { Footer } from '../components/Footer'
import { Box, Button, Flex, Grid, GridItem, Image, SimpleGrid, Wrap, WrapItem } from '@chakra-ui/react'
import Link from "next/link";
import { useProductsQuery } from '../generated/graphql'

const Test2 = () => {
  const [{ data, fetching, error }] = useProductsQuery();

  if (fetching) return <></>
  if (error) return <p>{error.message}</p>
  return (
    <Container height="100vh">
      <Header />
      <SimpleNavbar />
      <Grid templateColumns='repeat(2, 1fr)' gap={6}>
        <GridItem w='100%' h='100' bg='blue.500'>box 1</GridItem>
        <GridItem w='100%' h='100' bg='blue.500'>box 2</GridItem>
        <GridItem w='100%' h='100' bg='blue.500'>box 3</GridItem>
        <GridItem w='100%' h='100' bg='blue.500'>box 4</GridItem>
      </Grid>
      <Footer />
    </Container>
  )
}

export default Test2
