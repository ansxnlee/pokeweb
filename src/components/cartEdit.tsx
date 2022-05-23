import { 
  Flex, 
  NumberInput, 
  NumberInputField, 
  NumberInputStepper, 
  NumberIncrementStepper, 
  NumberDecrementStepper, 
} from "@chakra-ui/react";
import { useFormik } from 'formik';
import { useEditItemMutation } from "../generated/graphql"

export const CartEdit = ({ productId }) => {
  const [, editItem] = useEditItemMutation();

  const formik = useFormik({
    initialValues: {
      quantity: 0,
    },
    onSubmit: values => {
      editItem({ productId: productId, quantity: values.quantity });
      window.location.reload(); // another hacky way to refresh page
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <Flex>
      <NumberInput size='xs'>
        <NumberInputField 
          id="quantity"
          name="quantity"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.quantity}
        />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      
      <button type='submit'>Change</button>
      </Flex>
    </form>
  )
}