import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"

import { Flex, Box, Text } from '@chakra-ui/react'

import Link from 'next/link'

import SwiperCore, {
  Navigation, Pagination
} from 'swiper';

SwiperCore.use([Navigation, Pagination]);

export default function SwiperComponent(){
  return (
    <>
      <Box 
        alignSelf="center"
        m="40"
      >
        <Swiper navigation={true} pagination={true} className="mySwiper">
            <SwiperSlide>
              <Flex
                alignItems="center"
                justifyContent="center"
                h="450"
                backgroundImage="/images/america1.jpeg" 
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
              >
                <Link href="/continents/north_america">
                  <Text
                    as="a"
                    fontSize="35" 
                    fontWeight="bold"
                    color="white"
                    cursor="pointer"
                    transition="filter .2s"
                    _hover={{
                      filter: "brightness(90%)"
                    }}
                  >
                    América do Norte
                  </Text>
                </Link>
              </Flex>
            </SwiperSlide>

            <SwiperSlide>
              <Flex
                  alignItems="center"
                  justifyContent="center"
                  h="450"
                  backgroundImage="/images/southamerica.jpeg" 
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                >
                  <Link href="/continents/south_america">
                    <Text 
                      as="a"
                      fontSize="35" 
                      fontWeight="bold"
                      color="white"
                      cursor="pointer"
                      transition="filter .2s"
                      _hover={{
                        filter: "brightness(90%)"
                      }}
                    >
                      América do Sul
                    </Text>
                  </Link>
                </Flex>
            </SwiperSlide>

            <SwiperSlide>
              <Flex
                  alignItems="center"
                  justifyContent="center"
                  h="400"
                  backgroundImage="/images/asia.jpeg" 
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                >
                  <Link href="/continents/asia">
                    <Text 
                      as="a"
                      fontSize="35" 
                      fontWeight="bold"
                      color="white"
                      cursor="pointer"
                      transition="filter .2s"
                      _hover={{
                        filter: "brightness(90%)"
                      }}
                    >
                      Ásia
                    </Text>
                  </Link>
                </Flex>
            </SwiperSlide>

            <SwiperSlide>
              <Flex
                  alignItems="center"
                  justifyContent="center"
                  h="400"
                  backgroundImage="/images/europe.jpeg" 
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                >
                  <Link href="/continents/africa">
                    <Text 
                      as="a"
                      fontSize="35" 
                      fontWeight="bold"
                      color="white"
                      cursor="pointer"
                      transition="filter .2s"
                      _hover={{
                        filter: "brightness(90%)"
                      }}
                    >
                      África
                    </Text>
                  </Link>
                </Flex>
            </SwiperSlide>

            <SwiperSlide>
              <Flex
                  alignItems="center"
                  justifyContent="center"
                  h="400"
                  backgroundImage="/images/europe.jpeg" 
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                >
                  <Link href="/continents/europe">
                    <Text 
                      as="a"
                      fontSize="35" 
                      fontWeight="bold"
                      color="white"
                      cursor="pointer"
                      transition="filter .2s"
                      _hover={{
                        filter: "brightness(90%)"
                      }}
                    >
                      Europa
                    </Text>
                  </Link>
                </Flex>
            </SwiperSlide>

            <SwiperSlide>
              <Flex
                  alignItems="center"
                  justifyContent="center"
                  h="400"
                  backgroundImage="/images/europe.jpeg" 
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                >
                  <Link href="/continents/europe">
                    <Text 
                      as="a"
                      fontSize="35" 
                      fontWeight="bold"
                      color="white"
                      cursor="pointer"
                      transition="filter .2s"
                      _hover={{
                        filter: "brightness(90%)"
                      }}
                    >
                      Oceania
                    </Text>
                  </Link>
                </Flex>
            </SwiperSlide>
        </Swiper>
      </Box>
    </>
  )
}