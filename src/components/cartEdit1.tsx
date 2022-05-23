import { 
  Flex, 
  Button, 
  NumberInput, 
  NumberInputField, 
  NumberInputStepper, 
  NumberIncrementStepper, 
  NumberDecrementStepper 
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useEditItemMutation } from "../generated/graphql"

export const CartEdit = () => {
  const [, editItem] = useEditItemMutation();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      quantity: 0,
    },
    onSubmit: values => {
      console.log("edit submitted: " + values);
    },
  });

  return (
    <Flex>
      <form onSubmit={formik.handleSubmit}>
        <NumberInput 
          id='quantity' 
          name='quantity'
          size='xs'
          onChange={formik.handleChange}
          value={formik.values.quantity}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Button variant='link' type='submit'>Change</Button>
      </form>
    </Flex>
  )
}