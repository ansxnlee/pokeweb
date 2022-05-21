import { Button, Input, Flex, Box, useColorModeValue } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useState } from 'react';
let data = require('../../public/PRODUCTS.json');

export const Searchbar = () => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  }

  const onSearch = (searchTerm) => {
    setValue(searchTerm)
  }


  return (
    <>
      <Box className='search-container' width='100%'>
        <Flex direction="row">
          <Input 
            variant='filled' 
            placeholder='Search for item..'
            value={value} 
            onChange={onChange} 
          />
          <Button onClick={() => onSearch(value)}>{<SearchIcon />}</Button>
        </Flex>
        <Box 
          position='absolute' 
          bg="gray.300" 
          _dark={{ bg: 'gray.700' }} 
          width='100%'
        >
          {data
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const name = item.nameEng.toLowerCase();
              
              return(
                searchTerm &&
                name.startsWith(searchTerm) &&
                name !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <>
                <Flex
                  onClick={() => onSearch(item.nameEng)}
                  key={item.nameEng}
                  alignItems='center'
                  h='2em'
                  _hover={{ bg: 'gray.600' }}
                  px={{ base: 4 }} 
                >
                  {item.nameEng}
                </Flex>
              </>
            ))}
        </Box>
      </Box>
    </>
  );
}