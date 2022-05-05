import { Button, Flex, Wrap, WrapItem, useColorModeValue } from "@chakra-ui/react";
import Image from 'next/image';
import Link from "next/link";

export const MainCategory = (props) => (
  <Flex 
    bg={useColorModeValue('white', 'gray.800')}
    justifyContent={'center'} 
    px={{ base: 4 }} 
    py={{ base: 20 }} 
  >
    <Wrap spacing='30px'>
      {props.data.map((data) => (
        <WrapItem key={data.label}>
          <Link href={data.href}>
            <Button h='10em' w='10em' variant='outline'>
              <Flex direction="column" alignItems="center"  >
                <Image src={data.path} alt="Repel" width='30px' height='30px' />
                {data.label}
              </Flex>
            </Button>
          </Link>
        </WrapItem>
      ))}
    </Wrap>
  </Flex>
)
