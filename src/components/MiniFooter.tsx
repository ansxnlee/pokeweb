import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";

export const MiniFooter = () => (
  <Flex direction="column" alignItems="stretch" as="footer">
    <Box
      color={useColorModeValue('gray.700', 'gray.200')}
      borderTopWidth={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.700')}
    >
      <Text pt={4} fontSize={'sm'} textAlign={'center'}>
        Built and designed by Anson Lee.
        <br />
        Pokémon and its respective properties are © The pokémon Company International, Inc.
      </Text>
    </Box>
  </Flex>
)