import { Box, Button, ButtonGroup, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useConninfoQuery } from "../generated/graphql";


export const ConnInfo = () => {
  const [{ data, fetching }] = useConninfoQuery();
  let userBody = null;

  // conditionally render username and login button
  if (fetching) {
    // nothing needs to be done
  } else if (!data?.conninfo) {
    // user is not logged
    userBody = (
      <>
        <Link href='/login'>
          <Button colorScheme='blue'>
            Login
          </Button>
        </Link>
      </>
    )
  } else {
    // user is logged
    userBody = (
      <Flex
        direction='row'
        justifyContent='start'
        alignItems='center'
        gap='4' 
      >
        <Text>Hello, {data.conninfo.username}</Text>
        <Button colorScheme='red' variant='outline'>Logout</Button>
      </Flex>
    )
  }
  
  return (
    <Flex 
      direction="row" 
      justifyContent="start" 
      alignItems="center" 
      gap='4' 
      px={{ base: 4 }} 
    >
      <ButtonGroup gap='2'>
        {userBody}
      </ButtonGroup>
    </Flex>
  )
}