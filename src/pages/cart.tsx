import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { SimpleNavbar } from '../components/SimpleNavbar'
import { Footer } from '../components/Footer'
import { Box, Button, Flex, Grid, GridItem, Image, SimpleGrid, Table, TableContainer, Tbody, Td, Th, Thead, Tr, Wrap, WrapItem } from '@chakra-ui/react'
import Link from "next/link";
import { useConninfoQuery, useRemoveItemMutation, useSubmitOrderMutation, useUserOrderQuery } from '../generated/graphql'
import { MiniHeader } from '../components/MiniHeader'
import { MiniFooter } from '../components/MiniFooter'
import { useRouter } from "next/router";
import { CartEdit } from '../components/cartEdit'

const Cart = () => {
  // display appripriate page for user that is not logged
  const [query] = useConninfoQuery();
  if (query.fetching) {
    // nothing
  } else if (!query.data?.conninfo) {
    // user is not logged
    return (
      <Container height="100vh">
        <MiniHeader />
          <Box mx='auto' my='4'>You must be logged in to view your cart.</Box>
        <MiniFooter />
      </Container>
    )
  }

  const [{ data, fetching, error }] = useUserOrderQuery();
  const [, removeItem] = useRemoveItemMutation();
  const [, submitOrder] = useSubmitOrderMutation();
  let greeting = null;

  if (fetching) return <></>
  if (error) return <p>{error.message}</p>

  if (data.userOrder.order.items.length == 0) {
    greeting = (
      <Flex justifyContent='center'>Hi {data.userOrder.order.user.username}, you currently have no items in your cart.</Flex>
    )
  } else {
    greeting = (
      <Flex direction='column' alignItems='center' py='2' gap='2'>
        <h1>Hi {data.userOrder.order.user.username}, these are the items currently in your cart.</h1>
        <Button colorScheme='yellow' onClick={() => {submitOrder();}}>Submit Order</Button>
      </Flex>
    )
  }

  const handleDelete = (id) => {
    removeItem({ productId: id });
    // pretty hacky way to reload window instead of properly updating component
    window.location.reload();
  }

  return (
    <Container height="100vh">
      <MiniHeader />
      <Flex direction='column' justifyContent='center' p='10' bg="gray.50" _dark={{ bg: 'gray.900', color: 'white'}}>
        <Box>{greeting}</Box>
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th>Image</Th>
                <Th>Name</Th>
                <Th>Description</Th>
                <Th>Quantity</Th>
                <Th>Cost</Th>
                <Th>Edit Amount</Th>
                <Th>Remove Item</Th>
              </Tr>
            </Thead>
            {data.userOrder.order.items.map((item) => (
              <Tbody key={item.id}>
                <Tr>
                  <Td><Image src={item.product.sprite} /></Td>
                  <Td>{item.product.nameEng}</Td>
                  <Td>{item.product.text}</Td>
                  <Td>{item.quantity}</Td>
                  <Td>{item.product.cost * item.quantity}</Td>
                  <Td><CartEdit productId={item.product.id} /></Td>
                  <Td><Button variant='link' onClick={() => handleDelete(item.product.id)}>Delete</Button></Td>
                </Tr>
              </Tbody>
            ))}
          </Table>
        </TableContainer>
      </Flex>
      <MiniFooter />
    </Container>
  )
}

export default Cart
