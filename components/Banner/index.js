import { Box, Image, Text, Flex } from '@chakra-ui/react'

export default function Banner(){
  return(
    <Flex
      flexDir="row"
      justifyContent="space-around"
      h="300"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundImage="/images/bg.jpeg"
      mb="10"
    >
      <Flex 
        color="white" 
        flexDir="column" 
        justifyContent="center"
      >
        <Text fontSize="35" mb="5" fontWeight="400">
          5 Continentes, 
          <br />
          infinitas possibilidades.
        </Text>

        <Text fontSize="20" fontWeight="300">
          Chegou a hora de tirar do papel a viagem que você
          <br />  
          sempre sonhou.
        </Text>
      </Flex>

      <Box py="10">
        <Image src="/images/airplane.svg"  />
      </Box>
    </Flex>
  )
}