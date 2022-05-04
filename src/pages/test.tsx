import { Header } from '../components/Header';
import { Container } from '../components/Container'
import { ItemGrid } from '../components/ItemGrid';
import { Footer } from '../components/Footer';
import Navbar from '../components/Navbar';
import { Box, Flex, Grid, GridItem, Popover, PopoverTrigger, Tab, TabList, TabPanel, TabPanels, Tabs, useColorModeValue } from '@chakra-ui/react';

const Test = () => (
  <>
    <Container height="100vh">
      <Tabs>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
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
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                      <PopoverTrigger>
                        <a>Sample Text</a>
                      </PopoverTrigger>
                    </Popover>
                  </GridItem>
                ))}
              </Grid>
            </Flex>
          </Box>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  </>
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
];

export default Test;