import { Header } from '../components/Header';
import { Container } from '../components/Container'
import { ItemGrid } from '../components/ItemGrid';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

import React, { useState } from 'react';
import { Box, Button, Link, Stack } from '@chakra-ui/react';


const Test = () => {
  const [cat, setCat] = useState('choose a category');

  return (
    <>
      <h1>parent test: {cat}</h1>
      <ChildComp passCat={setCat} />
    </>
  )
}

const ChildComp = (props) => (
  <>
    <h1>child test</h1>
    <GrandChild passCat={props.passCat}/>
  </>
)

const GrandChild = (props) => {
  const handleClick = (labelName) => {
    console.log("link clicked");
    props.passCat(labelName);
  }
  return (
    <>
      <h1>grandchild test</h1>
      <Stack direction={'row'} spacing={4}>
        {GRID_ITEMS.map((gridItem) => (
          <Box key={gridItem.id}>
            <Link
              role={'group'}
              display={'block'}
              p={1}
              rounded={'md'}
            >
              <Button onClick={() => handleClick(gridItem.label)}>
                {gridItem.label}
              </Button>
            </Link>
          </Box>
        ))}
      </Stack>
    </>
  )
}

interface GridItem {
  id: number;
  label: string;
  subLabel?: string;
  href?: string;
}

const GRID_ITEMS: Array<GridItem> = [
  {
    id: 1,
    label: 'Poké Balls',
  },
  {
    id: 2,
    label: 'TMs',
  },
];

export default Test;