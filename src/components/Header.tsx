import { Box, Button, ButtonGroup, Flex, Input, InputGroup } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons';
import { DarkModeSwitch } from './DarkModeSwitch'
import { Titlecard } from './Titlecard';
import Link from "next/link";
import { ConnInfo } from "./connInfo";

const searchClick = () => {
  console.log("search pressed");
}

export const Header = () => (
  <Flex 
    direction="row" 
    justifyContent="start" 
    alignItems="center" 
    gap='4' 
    px={{ base: 4 }} 
  >
    <Box p='4'>
      <a href='/'>
        <Titlecard />
      </a>
    </Box>
    <InputGroup>
      <Input variant='filled' placeholder='Search for item..' flexGrow={1} />
      <Button onClick={searchClick}>{<SearchIcon />}</Button>
    </InputGroup>
    <ButtonGroup gap='2' alignItems='center'>
      <DarkModeSwitch />
      <Link href='/register'>
        <Button colorScheme='purple'>
          Register
        </Button>
      </Link>
        <ConnInfo />
      <Button colorScheme='yellow'>Cart</Button>
    </ButtonGroup>
  </Flex>
)