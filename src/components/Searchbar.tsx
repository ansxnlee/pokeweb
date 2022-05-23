import { Button, Input, Flex, Box } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useState } from 'react';
let jdata = require('../../public/PRODUCTS.json');
import { useProductNameQuery } from '../generated/graphql';
import { useRouter } from "next/router";

export const Searchbar = () => {
  const [value, setValue] = useState("");
  const [{ data, fetching, error}] = useProductNameQuery({ variables: {nameEng: value} });
  const router = useRouter();
  
  if (fetching) {
    // do nothing
  }
  if (error) return <p>{error.message}</p>
  
  const onChange = (e) => {
    setValue(e.target.value);
  }

  const onSearch = (searchTerm) => {
    setValue(searchTerm)
    //console.log(data.productName.id);
  }

  const handleClick = (searchTerm) => {
    router.push('/detail/' + data.productName.id);
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
            // hack to fix rerendering of component since im returning compoennts from the query hook
            autoFocus  
          />
          <Button onClick={() => handleClick(value)}>{<SearchIcon />}</Button>
        </Flex>
        <Box 
          position='absolute' 
          zIndex={9001}  // this is hacky BUT ITS OVER 9000
          bg="gray.300" 
          _dark={{ bg: 'gray.700' }} 
          width='100%'
        >
          {jdata
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