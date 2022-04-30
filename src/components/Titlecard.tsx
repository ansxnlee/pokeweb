import { Flex, Heading } from '@chakra-ui/react'

export const Titlecard = ({ title }: { title: string }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
    bgClip="text"
  >
    <Heading>{title}</Heading>
  </Flex>
)

Titlecard.defaultProps = {
  title: 'Pokemart',
}
