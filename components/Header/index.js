import { Flex, Image } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import Link from 'next/link'

export default function Header({ inRoute }){
  return(
    <Flex
      h="20"
      w="100%"
      as="header"
      alignItems="center"
      justifyContent="space-between"
      p="8"
    >
      {inRoute &&
        <Link href="/">
          <ChevronLeftIcon as="a" cursor="pointer" w={8} h={8} />
        </Link>
      }

      <Flex
        w="100%"
        alignItems="flex-start"
        justifyContent="center"
      >
        <Image boxSize="40" src="/images/logo.svg" alt="logo"/>
      </Flex>
    </Flex>
  )
}