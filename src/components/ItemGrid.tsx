import { Box, Button, Flex, Wrap, WrapItem, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image';
import Link from "next/link";

export const ItemGrid = ({ data }) => (
  <Flex 
    bg={useColorModeValue('white', 'gray.800')}
    color={useColorModeValue('gray.600', 'white')} 
    justifyContent={'center'} 
    py={{ base: 4 }}
    px={{ base: 4 }}
  >
    <Wrap spacing='10px' justify='center'>
      {data.map((item) => (
        <WrapItem key={item.label}>
          <Box w='180px' h='180px' borderRadius='10px' _hover={{ bg: 'blue.500' }} transition='background-color 100ms linear'>
            <Flex direction='column' h='100%' justifyContent='center' alignItems='center'>
              <Flex h='5em' alignItems='center'>
                <a href={item.href}>
                  <Image src={item.path} alt="Repel" width='30px' height='30px' />
                </a>
              </Flex>
              <Box  _hover={{ color: 'orange' }}>
                <Link href={item.href}>
                    {item.label}
                </Link>
              </Box>
              <Box  _hover={{ color: 'red' }}>
                <span>¥</span>
                <Link href={item.href}>
                  {item.price}
                </Link>
              </Box>
              <Box  _hover={{ color: 'lightgreen' }}>
                <Button variant='ghost'>Add to Cart</Button>
              </Box>
            </Flex>
          </Box>
      </WrapItem>
      ))}
    </Wrap>
  </Flex>
)
