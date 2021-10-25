import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"

import { Flex, Box, Text } from '@chakra-ui/react'

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
                <Text 
                  fontSize="35" 
                  fontWeight="bold"
                  color="white"
                >
                  América do Norte
                </Text>
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
                  <Text 
                    fontSize="35" 
                    fontWeight="bold"
                    color="white"
                  >
                    América do Sul
                  </Text>
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
                  <Text 
                    fontSize="35" 
                    fontWeight="bold"
                    color="white"
                  >
                    Ásia
                  </Text>
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
                  <Text 
                    fontSize="35" 
                    fontWeight="bold"
                    color="white"
                  >
                    África
                  </Text>
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
                  <Text 
                    fontSize="35" 
                    fontWeight="bold"
                    color="white"
                  >
                    Europa
                  </Text>
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
                  <Text 
                    fontSize="35" 
                    fontWeight="bold"
                    color="white"
                  >
                    Oceania
                  </Text>
                </Flex>
            </SwiperSlide>
        </Swiper>
      </Box>
    </>
  )
}