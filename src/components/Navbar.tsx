import {
  Box,
  Flex,
  Text,
  Stack,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';

export const Navbar = () => (
  <Box>
    <Flex
      bg={useColorModeValue('white', 'gray.800')}
      color={useColorModeValue('gray.600', 'white')}
      minH={'60px'}
      py={{ base: 2 }}
      px={{ base: 4 }}
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.900')}
      align={'center'}
    >
      <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
        <Text
          textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
          fontFamily={'heading'}
          color={useColorModeValue('red', 'yellow')}>
          Categories
        </Text>
        <Flex ml={10}>
          <NavButtons />
        </Flex>
      </Flex>
    </Flex>
  </Box>
)

const NavButtons = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'red');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
                <Icon color={'pink.400'} w={5} h={5} as={ChevronDownIcon} />
              </Link>
            </PopoverTrigger>
            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <SubNavButtons key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const SubNavButtons = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

// hard-code navbar item categories
interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Items',
    href: '/items',
    children: [
      {
        label: 'Trainer Utility',
        subLabel: 'Useful items for any trainer',
        href: '#',
      },
      {
        label: 'Evolution Items',
        subLabel: 'Used to evolve certain Pokemon',
        href: '#',
      },
      {
        label: 'Fossils',
        subLabel: 'Pokemon Fossils',
        href: '#',
      },
      {
        label: 'Loot',
        subLabel: 'Can be sold for a profit',
        href: '#',
      },
      {
        label: 'Collectables',
        subLabel: 'Can be traded with others',
        href: '#',
      },
      {
        label: 'Mulch',
        subLabel: 'Pokemon garden supplies',
        href: '#',
      },
    ],
  },
  {
    label: 'Held Items',
    href: '/held',
    children: [
      {
        label: 'Held Items',
        subLabel: 'Items designed to be held by pokemon',
        href: '#',
      },
      {
        label: 'Negative Held Items',
        subLabel: 'Inflicts status effects on holder',
        href: '#',
      },
      {
        label: 'Training Items',
        subLabel: 'Special items for trainers',
        href: '#',
      },
      {
        label: 'Type Enhancement',
        subLabel: 'Pokemon enhancement items',
        href: '#',
      },
      {
        label: 'Mega Stones',
        subLabel: 'Stones that allow certain Pokemon to mega-evolve',
        href: '#',
      },
      {
        label: 'Species Items',
        subLabel: 'Held items unique to certain Pokemon',
        href: '#',
      },
      {
        label: 'Plates',
        subLabel: 'Move type boosters',
        href: '#',
      },
      {
        label: 'Effort Items',
        subLabel: 'Pokemon Stat Converters',
        href: '#',
      },
      {
        label: 'Choice Items',
        subLabel: 'Power Move restriction items',
        href: '#',
      },
    ],
  },
  {
    label: 'Medicine',
    href: '/medicine',
    children: [
      {
        label: 'Healing',
        subLabel: 'Health point restoration',
        href: '#',
      },
      {
        label: 'Status Cures',
        subLabel: 'Cures status afflictions',
        href: '#',
      },
      {
        label: 'Revival',
        subLabel: 'Revives fainted Pokemon',
        href: '#',
      },
      {
        label: 'PP Recovery',
        subLabel: 'Pokemon move recovery',
        href: '#',
      },
      {
        label: 'Vitamins',
        subLabel: 'Increases Pokemon Stats',
        href: '#',
      },
    ],
  },
  {
    label: 'Poké Balls',
    href: './pokeballs',
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
    href: './tms',
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
  {
    label: 'Berries',
    href: './berries',
    children: [
      {
        label: 'Medicine',
        subLabel: 'Berries with restorative effects',
        href: '#',
      },
      {
        label: 'Picky Healing',
        subLabel: 'Confuses Pokemon that dislike certain flavours',
        href: '#',
      },
      {
        label: 'Pinch',
        subLabel: 'Used by Pokemon when HP is critical',
        href: '#',
      },
      {
        label: 'Type Protection',
        subLabel: 'Protects against type weaknesses',
        href: '#',
      },
      {
        label: 'Effort Drop',
        subLabel: 'Drops EVs to allow further training',
        href: '#',
      },
      {
        label: 'Baking',
        subLabel: 'Used to make PokeBlocks and Poffins',
        href: '#',
      },
      {
        label: 'Others',
        subLabel: 'Battle related Berries',
        href: '#',
      },
    ],
  },
  {
    label: 'Mail',
    href: './mail',
    children: [
      {
        label: 'Mail',
        subLabel: 'Pokemon Trade Item',
        href: '#',
      },
    ],
  },
  {
    label: 'Battle Items',
    href: './battle',
    children: [
      {
        label: 'Stat Boosts',
        subLabel: 'Temporarily increases stats',
        href: '#',
      },
      {
        label: 'Flutes',
        subLabel: 'Status Recovery Items',
        href: '#',
      },
      {
        label: 'Miracle Shooters',
        subLabel: 'Wonder Launcher items',
        href: '#',
      },
    ],
  },
];
