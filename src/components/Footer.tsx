import { ReactNode } from 'react';
import { Box, Container, Flex, FlexProps, Link, SimpleGrid, Stack, Tag, Text, useColorModeValue } from '@chakra-ui/react'
import { Titlecard } from './Titlecard';

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export const Footer = (props: FlexProps) => (
  <Flex 
    direction="column" 
    width='100vw'
    alignItems="center" 
    as="footer" 
    py="1rem" 
    {...props}
  >
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      width='100vw'
      borderTopWidth={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.700')}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Product</ListHeader>
            <Link href={'#'}>Overview</Link>
            <Stack direction={'row'} align={'center'} spacing={2}>
              <Link href={'#'}>Features</Link>
              <Tag
                size={'sm'}
                bg={useColorModeValue('green.300', 'green.800')}
                ml={2}
                color={'white'}>
                New
              </Tag>
            </Stack>
            <Link href={'#'}>Tutorials</Link>
            <Link href={'#'}>Pricing</Link>
            <Link href={'#'}>Releases</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'#'}>About Us</Link>
            <Link href={'#'}>Press</Link>
            <Link href={'#'}>Careers</Link>
            <Link href={'#'}>Contact Us</Link>
            <Link href={'#'}>Partners</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Legal</ListHeader>
            <Link href={'#'}>Cookies Policy</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Law Enforcement</Link>
            <Link href={'#'}>Status</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Follow Us</ListHeader>
            <Link href={'#'}>Facebook</Link>
            <Link href={'#'}>Twitter</Link>
            <Link href={'#'}>Dribbble</Link>
            <Link href={'#'}>Instagram</Link>
            <Link href={'#'}>LinkedIn</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            ml: 8,
          }}>
          <Titlecard />
        </Flex>
        <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          Built and designed by Anson Lee.
          <br />
          Pokémon and its respective properties are © The pokémon Company International, Inc.
          <br />
          <a>Privacy Policy</a>
          <span> • </span>
          <a>Terms of Service</a>
        </Text>
      </Box>
    </Box>
  </Flex>
)
