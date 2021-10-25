import { Text, Box, Flex, Divider, Center } from '@chakra-ui/react'
import Header from "../components/Header"
import Banner from "../components/Banner"
import Types from '../components/Types'
import SwiperComponent from '../components/Swiper'

export default function Home() {
  return (
    <Box>
      <Header />
      <Banner />
      <Types />
      <Flex justifyContent="center" alignItems="center" height="50">
        <Center w="20">
          <Divider 
            orientation="horizontal"
            color="twitter"
          />
        </Center>
      </Flex>
      <Flex my="10" textAlign="center" justifyContent="center"> 
        <Text fontSize="4xl" color="gray.600">
          Vamos nessa?
          <br />
          Então escolha seu continente
        </Text>
      </Flex>
      <SwiperComponent />
    </Box>
  )
}
