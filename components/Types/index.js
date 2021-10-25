import { Flex, Image, HStack, Icon } from '@chakra-ui/react'

export default function Types(){
  return(
    <Flex
      justifyContent="center"
      alignItems="center"
      my="8"
      pr="10"
    >
      <HStack spacing="8rem" alignSelf="center">
        <Image src="/images/nightlife.svg" alt="nigthlife"/>
        <Image src="/images/beach.svg" alt="beach"/>
        <Image src="/images/modern.svg" alt="modern"/>
        <Image src="/images/classic.svg" alt="classic"/>
        <Image src="/images/more.svg" alt="more"/>
      </HStack>
    </Flex>
  )
}