import { Box, Flex, Grid, GridItem, SimpleGrid, useColorModeValue, } from '@chakra-ui/react'

export const ItemGrid = () => (
  <Box>
  <Flex 
    bg={useColorModeValue('white', 'gray.800')}
    color={useColorModeValue('gray.600', 'white')}
    direction="column"  
    width='100vw'
    maxWidth={'100vw'}
    py={{ base: 4 }}
    px={{ base: 4 }}
    borderTop={1}
    borderBottom={1}
    borderStyle={'solid'}
    borderColor={useColorModeValue('gray.200', 'gray.700')}
  >
    <Grid templateColumns='repeat(5, 1fr)' gap={6}>
      <GridItem w='100%' h='40' bg='blue.500' />
      <GridItem w='100%' h='40' bg='blue.500' />
      <GridItem w='100%' h='40' bg='blue.500' />
      <GridItem w='100%' h='40' bg='blue.500' />
      <GridItem w='100%' h='40' bg='blue.500' />
    </Grid>
  </Flex>
  </Box>
)

interface GridItem {
  label: string;
  subLabel?: string;
  children?: Array<GridItem>;
  href?: string;
}

const GRID_ITEMS: Array<GridItem> = [
  {
    label: 'Poké Balls',
    children: [
      {
        label: 'Standard Balls',
        subLabel: 'Typical Pokeballs',
        href: '#',
      },
      {
        label: 'Special Balls',
        subLabel: 'Unique Pokeballs',
        href: '#',
      },
      {
        label: 'Apricorn Balls',
        subLabel: 'Pokeballs made with Apricorns',
        href: '#',
      },
    ],
  },
  {
    label: 'TMs',
    children: [
      {
        label: 'TMs 01-19',
        href: '#',
      },
      {
        label: 'TMs 20-39',
        href: '#',
      },
      {
        label: 'TMs 40-59',
        href: '#',
      },
      {
        label: 'TMs 60-79',
        href: '#',
      },
      {
        label: 'TMs 80-99',
        href: '#',
      },
    ],
  },
];