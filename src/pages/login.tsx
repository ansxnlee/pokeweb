import React from "react";
import { Formik, Form } from 'formik';
import { Flex, Button, Text } from "@chakra-ui/react";
import { Container } from '../components/Container';
import { MiniHeader } from '../components/MiniHeader';
import { MiniFooter } from "../components/MiniFooter";
import { FormikInputField } from "../components/FormikInputField";
import Link from "next/link";
import { useLoginMutation } from "../generated/graphql";
import { arrayToErrorObj } from "../utility/arrayToErrorObj";
import { useRouter } from "next/router";

interface loginProps {

}

const Login: React.FC<loginProps> = ({}) => {
  const [, login] = useLoginMutation();
  const router = useRouter();
  return (
    <Container height="100vh">
      <MiniHeader />
      <Flex mx='auto' justifyContent='center' p='10'>
        <Formik
          initialValues={{ username: '', password: '' }}
          onSubmit={async (values, { setErrors }) => {
            const response = await login({ username: values.username, password: values.password });
            console.log(response);
            if (response.data?.login.errors) {
              // formik errors will display the exact errors that the server throws
              setErrors(arrayToErrorObj(response.data.login.errors));
            } else if (response.data?.login.user) {
              router.push('/');
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Flex direction='column' alignItems="center" gap='2'>
                <Text mb={4} fontWeight='bold' fontSize='2xl'>Login account</Text>
                <FormikInputField 
                  name='username' 
                  placeholder='' 
                  label='Username' 
                />
                <FormikInputField 
                  name='password' 
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
                  Don't have an account?
                  {" "}
                  <Text as='span' display='inline' color='blue.400' _hover={{ color: 'orange' }}>
                    <Link href='/register'>
                      Register here
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

export default Login;