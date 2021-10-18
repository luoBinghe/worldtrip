import { Flex, Image, Stack } from '@chakra-ui/react'

export default function Types(){
  return(
    <Flex
      justifyContent="space-around"
      alignItems="center"
      my="8"
      mx="8"
      p="8"
    >
      <Image src="/images/nightlife.svg" alt="nigthlife"/>
      <Image src="/images/beach.svg" alt="beach"/>
      <Image src="/images/modern.svg" alt="modern"/>
      <Image src="/images/classic.svg" alt="classic"/>
      <Image src="/images/more.svg" alt="more"/>
    </Flex>
  )
}