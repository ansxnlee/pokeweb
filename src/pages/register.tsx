import React from "react";
import { Formik, Form } from 'formik';
import { Box, Flex, Button, Text } from "@chakra-ui/react";
import { Container } from '../components/Container';
import { MiniHeader } from '../components/MiniHeader';
import { MiniFooter } from "../components/MiniFooter";
import { FormikInputField } from "../components/FormikInputField";
import Link from "next/link";

interface registerProps {

}

const Register: React.FC<registerProps> = ({}) => {
  return (
    <Container height="100vh">
      <MiniHeader />
      <Flex mx='auto' justifyContent='center' p='10'>
        <Formik
          initialValues={{ username: '', password: '' }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Flex direction='column' alignItems="center" gap='2'>
                <Box mb={4} fontWeight='bold' fontSize='large'>Create account</Box>
                <FormikInputField 
                  name='username' 
                  placeholder='' 
                  label='Username' 
                />
                <FormikInputField 
                  name='password' 
                  placeholder='At least 3 characters' 
                  label='Password' 
                  type='password'
                />
                <Button 
                  mt={4} 
                  colorScheme='purple' 
                  isLoading={isSubmitting}
                  type='submit'
                >
                  Continue
                </Button>
                <Text pt={4} fontSize={'sm'} textAlign={'center'}>
                  By creating an account, you agree to Pokemart's
                  <br />
                  {/* chakra's text component renders <p> by default so this mess is a workaround */}
                  <Text as='span' display='inline' color='blue.400' _hover={{ color: 'orange' }}>
                    <Link href='#'>
                      Conditions of Use
                    </Link>
                  </Text>
                  {/* scuffed way of adding whitespace inbetween tags */}
                  {" "}
                  <Text as='span' display='inline'>
                    and
                  </Text>
                  {" "}
                  <Text as='span' display='inline' color='blue.400' _hover={{ color: 'orange' }}>
                    <Link href='#'>
                      Privacy Notice
                    </Link>
                  </Text>
                </Text>
                <Text pt={4} fontSize={'sm'} textAlign={'center'}>
                  Already have an account?
                  {" "}
                  <Text as='span' display='inline' color='blue.400' _hover={{ color: 'orange' }}>
                    <Link href='/login'>
                      Sign in instead
                    </Link>
                  </Text>
                </Text>
              </Flex>
            </Form>
          )}
        </Formik>
      </Flex>
      <MiniFooter />
    </Container>
  );
}

export default Register;