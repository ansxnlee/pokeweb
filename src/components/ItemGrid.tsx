import { Box, Stack, Flex, Wrap, WrapItem, useColorModeValue, Button } from '@chakra-ui/react'
import Image from 'next/image';
import Link from "next/link";

export const ItemGrid = () => (
  <Flex 
    bg={useColorModeValue('white', 'gray.800')}
    color={useColorModeValue('gray.600', 'white')} 
    justifyContent={'center'} 
    py={{ base: 4 }}
    px={{ base: 4 }}
  >
    <Wrap spacing='10px'>
      <WrapItem>
        <Link href={'#'}>
          <Box w='180px' h='180px' _hover={{ bg: 'blue.500' }}>
            <Flex direction='column' h='100%' justifyContent='center' alignItems='center'>
              <Image src='/items/battle/stat/dire-hit.png' alt="Repel" width='30px' height='30px' />
              <h1>label</h1>
              <h1>price</h1>
            </Flex>
          </Box>
        </Link>
      </WrapItem>
      <WrapItem>
        <Link href={'#'}>
          <Button w='180px' h='180px' variant='ghost'>
            box3
          </Button>
        </Link>
      </WrapItem>
    </Wrap>
    {/* 
    <Grid templateColumns='repeat(5, 1fr)' gap={6}>
      {GRID_ITEMS.map((gridItem) => (
        <GridItem key={gridItem.label} w='100%' h='40' bg='blue.500'>
          <Link>
            {gridItem.label}
          </Link>
        </GridItem>
      ))}
    </Grid>
    */}
  </Flex>
)

interface GridItem {
  label: string;
  subLabel?: string;
  href?: string;
}

const GRID_ITEMS: Array<GridItem> = [
  {
    label: 'Poké Balls',
  },
  {
    label: 'TMs',
  },
  {
    label: 'TMs',
  },
  {
    label: 'TMs',
  },
  {
    label: 'TMs',
  },
  {
    label: 'TMs',
  },
  {
    label: 'TMs',
  },
  {
    label: 'TMs',
  },
  {
    label: 'TMs',
  },
];