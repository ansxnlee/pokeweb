import { Container } from '../components/Container'
import { Box, Button, ButtonGroup, Flex, Input, InputGroup, Spacer } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons';
import { Titlecard } from './Titlecard';

const searchClick = () => {
  console.log("search pressed");
}

export const Header = () => (
    <Flex direction="row" width='100vw' justifyContent="start" alignItems="center" gap='4'>
    <Spacer />
      <Box p='4'>
        <Titlecard />
      </Box>
      <InputGroup>
        <Input variant='filled' placeholder='Search for item..' />
        <Button onClick={searchClick}>{<SearchIcon />}</Button>
      </InputGroup>
      <ButtonGroup gap='2'>
        <Button colorScheme='purple'>Register</Button>
        <Button colorScheme='blue'>Login</Button>
        <Button colorScheme='yellow'>Cart</Button>
      </ButtonGroup>
      <Spacer />
    </Flex>
)