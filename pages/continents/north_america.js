import Header from "../../components/Header"
import { Flex, Text } from '@chakra-ui/react'

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
      </>
    )
}