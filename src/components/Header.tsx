import { Box, Button, ButtonGroup, Flex, Input, InputGroup } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons';
import { DarkModeSwitch } from './DarkModeSwitch'
import { Titlecard } from './Titlecard';

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
        <Titlecard />
      </Box>
      <InputGroup>
        <Input variant='filled' placeholder='Search for item..' flexGrow={1} />
        <Button onClick={searchClick}>{<SearchIcon />}</Button>
      </InputGroup>
      <ButtonGroup gap='2'>
        <DarkModeSwitch />
        <Button colorScheme='purple'>Register</Button>
        <Button colorScheme='blue'>Login</Button>
        <Button colorScheme='yellow'>Cart</Button>
      </ButtonGroup>
    </Flex>
)