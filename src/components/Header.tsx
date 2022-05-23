import { Box, Button, ButtonGroup, Flex, Input, InputGroup } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons';
import { DarkModeSwitch } from './DarkModeSwitch'
import { Titlecard } from './Titlecard';
import Link from "next/link";
import { ConnInfo } from "./connInfo";
import { Searchbar } from "./Searchbar";

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
    bg='gray.50'
    _dark={{
      bg: 'gray.900',
      color: 'white',
    }}
  >
    <Box p='4'>
      <a href='/'>
        <Titlecard />
      </a>
    </Box>
    <InputGroup>
      <Searchbar />
    </InputGroup>
    <ButtonGroup gap='2' alignItems='center'>
      <DarkModeSwitch />
      <Link href='/register'>
        <Button colorScheme='purple'>
          Register
        </Button>
      </Link>
      <ConnInfo />
      <a href='/cart'>
        <Button colorScheme='yellow'>
          Cart
        </Button>
      </a>
    </ButtonGroup>
  </Flex>
)