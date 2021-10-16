import { Flex, Image } from '@chakra-ui/react'

export default function Header(){
  return(
    <Flex
      h="20"
      w="100%"
      as="header"
      alignItems="center"
      justifyContent="center"
    >
      <Image boxSize="40" src="/images/logo.svg" alt="logo"/>
    </Flex>
  )
}