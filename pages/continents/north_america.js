import Header from "../../components/Header"
import { Flex, Text, HStack, Box } from '@chakra-ui/react'
import { Cities } from "../../components/Cities"

export default function NorthAmerica(){
    return(
      <>
        <Header inRoute={true} />
        <Flex
          w="100%"
          h="400"
          backgroundImage="/images/banner.jpeg"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          alignItems="end"
          p="20"
        >
          <Text fontWeight="bold" fontSize="35" color="white">America do norte</Text>
        </Flex>

        <Flex
          my="10"
          w="100%"
          justifyContent="space-around"
          alignItems="center"
        >
          <Text fontSize="25" color="gray.600" w="50%">
            A Europa é, por convenção, um dos seis continentes do mundo. 
            Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a 
            leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o 
            mar Negro a sudeste
          </Text>

          <Flex
            justifyContent="space-between"
            alignItems="center"
            pr="8"
          >
            <HStack spacing="8">
              <Flex flexDirection="column" alignItems="center">
                  <Text color="yellow.400" fontSize="45" fontWeight="bold">50</Text>
                  <Text color="gray.600" fontSize="20" fontWeight="bold">países</Text>
                </Flex>

                <Flex flexDirection="column" alignItems="center">
                  <Text color="yellow.400" fontSize="45" fontWeight="bold">60</Text>
                  <Text color="gray.600" fontSize="20" fontWeight="bold">línguas</Text>
                </Flex>
                
                <Flex flexDirection="column" alignItems="center">
                  <Text color="yellow.400" fontSize="45" fontWeight="bold">27</Text>
                  <Text color="gray.600" fontSize="20" fontWeight="bold">cidades +100</Text>
                </Flex>
            </HStack>
          </Flex>
        </Flex>
        
        <Box m="8">
          <Text fontSize="35" color="gray.600" fontWeight="bold">Cidades +100</Text>
        </Box>

        <Cities />
      </>
    )
}