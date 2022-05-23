import { Box, Button, useToast } from "@chakra-ui/react"
import { useAddItemMutation, useConninfoQuery } from "../generated/graphql"

export const CartAdd = ({ productId, productName }) => {
  const [{ data, fetching }] = useConninfoQuery();
  const [, addItem] = useAddItemMutation();
  const toast = useToast();

  const handleClick = ({ value, name }) => {
    if (fetching) {
      // nothing needs to be done
    } else if (!data?.conninfo) {
      //user is not logged
      toast({
        title: 'Login to add items',
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
    } else {
      // user is authenticated
      addItem({ productId: value, quantity: 1 })
      toast({
        title: name + ' added to cart',
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
    }
  }

  return (
    <Box>
      <Button 
        variant='ghost' 
        _hover={{ color: 'lightgreen' }}
        onClick={() => {handleClick({ value: productId, name: productName })}}
      >
        Add to Cart
      </Button>
    </Box>
  )
}