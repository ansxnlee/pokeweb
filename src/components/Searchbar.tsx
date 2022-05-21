import { Button, Input, Flex, Box } from '@chakra-ui/react';
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
          _dark={{ bg: '#555555' }} 
          width='100%'
          px={{ base: 4 }} 
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
              <div
                onClick={() => onSearch(item.nameEng)}
                className="dropdown-row"
                key={item.nameEng}
              >
                {item.nameEng}
              </div>
            ))}
        </Box>
      </Box>
    </>
  );
}