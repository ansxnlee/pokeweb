import { Box, ButtonGroup, Flex, useColorModeValue } from "@chakra-ui/react";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { Titlecard } from './Titlecard';

export const MiniHeader = () => (
  <Box>
    <Flex 
      direction="row" 
      justifyContent="center" 
      alignItems='center'
      gap='4' 
      px={{ base: 4 }} 
      borderBottomWidth={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.700')}
    >
      <Box p='4'>
        <a href='/'>
          <Titlecard />
        </a>
      </Box>
      <ButtonGroup gap='2'>
        <DarkModeSwitch />
      </ButtonGroup>
    </Flex>
    
  </Box>
)