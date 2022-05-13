import React from "react";
import { Formik, Form } from 'formik';
import { Flex, Button, Text } from "@chakra-ui/react";
import { Container } from '../components/Container';
import { MiniHeader } from '../components/MiniHeader';
import { MiniFooter } from "../components/MiniFooter";
import { FormikInputField } from "../components/FormikInputField";
import Link from "next/link";
import { useRegisterMutation } from "../generated/graphql";
import { arrayToErrorObj } from "../utility/arrayToErrorObj";
import { useRouter } from "next/router";

interface registerProps {

}

const Register: React.FC<registerProps> = ({}) => {
  const [, register] = useRegisterMutation();
  const router = useRouter();
  return (
    <Container height="100vh">
      <MiniHeader />
      <Flex mx='auto' justifyContent='center' p='10'>
        <Formik
          initialValues={{ username: '', password: '' }}
          onSubmit={async (values, { setErrors }) => {
            const response = await register({ username: values.username, password: values.password });
            if (response.data?.register.errors) {
              // explicitly
              // [{ field: 'username', message: 'error msg' }]
              // setErrors({
              //   username: "sample error msg",
              // });
              
              // helper function that does the same logic
              // formik errors will now display the exact errors that the server throws
              setErrors(arrayToErrorObj(response.data.register.errors));
            } else if (response.data?.register.user) {
              router.push('/login');
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Flex direction='column' alignItems="center" gap='2'>
                <Text mb={4} fontWeight='bold' fontSize='2xl'>Create account</Text>
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
                  <Text as='span' display='inline' color='blue.400' _hover={{ color: 'orange' }}>
                    <Link href='#'>
                      Conditions of Use
                    </Link>
                  </Text>
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