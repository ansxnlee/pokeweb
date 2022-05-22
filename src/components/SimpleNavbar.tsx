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

export const SimpleNavbar = () => (
  <Box>
    <Flex
      bg='gray.50'
      _dark={{
        bg: 'gray.900',
        color: 'white',
      }}
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
    href: '#',
    children: [
      {
        label: 'Trainer Utility',
        subLabel: 'Useful items for any trainer',
        href: '/items/trainerUtility',
      },
      {
        label: 'Evolution Items',
        subLabel: 'Used to evolve certain Pokemon',
        href: '/items/evolution',
      },
    ],
  },
  {
    label: 'Medicine',
    href: '#',
    children: [
      {
        label: 'Healing',
        subLabel: 'Health point restoration',
        href: '/medicine/healing',
      },
      {
        label: 'Status Cures',
        subLabel: 'Cures status afflictions',
        href: '/medicine/statuscures',
      },
      {
        label: 'Revival',
        subLabel: 'Revives fainted Pokemon',
        href: '/medicine/revival',
      },
      {
        label: 'PP Recovery',
        subLabel: 'Pokemon move recovery',
        href: '/medicine/pprecovery',
      },
      {
        label: 'Vitamins',
        subLabel: 'Increases Pokemon Stats',
        href: '/medicine/vitamins',
      },
    ],
  },
  {
    label: 'Poké Balls',
    href: '#',
    children: [
      {
        label: 'Standard Balls',
        subLabel: 'Typical Pokeballs',
        href: '/pokeballs/standard',
      },
      {
        label: 'Special Balls',
        subLabel: 'Unique Pokeballs',
        href: '/pokeballs/special',
      },
    ],
  },
  {
    label: 'Berries',
    href: '#',
    children: [
      {
        label: 'Medicine',
        subLabel: 'Berries with restorative effects',
        href: '/berries/medicine',
      },
    ],
  },
];