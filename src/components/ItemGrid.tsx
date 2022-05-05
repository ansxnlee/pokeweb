import { Box, Flex, Grid, GridItem, Link, Popover, PopoverTrigger, useColorModeValue } from '@chakra-ui/react'

export const ItemGrid = () => (
  <Box>
  <Flex 
    bg={useColorModeValue('white', 'gray.800')}
    color={useColorModeValue('gray.600', 'white')}
    direction="column"  
    py={{ base: 4 }}
    px={{ base: 4 }}
    borderTop={1}
    borderBottom={1}
    borderStyle={'solid'}
    borderColor={useColorModeValue('gray.200', 'gray.700')}
  >
    <Grid templateColumns='repeat(5, 1fr)' gap={6}>
      {/*<GridItem w='100%' h='40' bg='blue.500' />*/}
      {GRID_ITEMS.map((gridItem) => (
        <GridItem key={gridItem.label} w='100%' h='40' bg='blue.500'>
          <Link>
            {gridItem.label}
          </Link>
        </GridItem>
      ))}
    </Grid>
  </Flex>
  </Box>
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