
import React, { useState } from 'react';
import { Box, Button, Flex, Stack, Text, Wrap, WrapItem } from '@chakra-ui/react';
import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { useProductsQuery } from '../generated/graphql';
import Link from "next/link";

const Test = () => {
  const [{ data, fetching, error }] = useProductsQuery();

  const handleChange = () => {
    console.log(data.products[0].nameEng);
  }
  if (fetching) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>
  return (
    <Container height="100vh">
      <Header />
      <Navbar />
      <Flex mx='auto' justifyContent='center' p='10'>
        <Flex direction='column' alignItems="center" gap='2'>
          <Wrap spacing='10px' justify='center'>
            {data.products.map((item) => (
              <WrapItem key={item.id}>
                <Box w='180px' h='180px' borderRadius='10px' _hover={{ bg: 'blue.500' }} transition='background-color 100ms linear'>
                  <Flex direction='column' h='100%' justifyContent='center' alignItems='center'>
                    <Box _hover={{ color: 'orange' }}>
                      <Link href="#">
                        {item.nameEng}
                      </Link>
                    </Box>
                  </Flex>
                </Box>
              </WrapItem>
            ))}
            test
          </Wrap>
          <button onClick={handleChange}>test</button>
        </Flex>
      </Flex>
      <Footer />
    </Container>
  )
}

export default Test;