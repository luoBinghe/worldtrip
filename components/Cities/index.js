import { Grid, Box, Text, Image } from "@chakra-ui/react"

export function Cities(){
  return(
    <Grid
      m="8"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={6}
    >
      <Box 
        h="16rem" 
        borderRadius="5" 
        border="1px" 
        borderColor="yellow" 
        w="15rem" 
        bg="white"
      >
        <Text fontSize="20" fontWeight="bold">Paris</Text>
        <Text>Fraça</Text>
      </Box>

      <Box 
        h="16rem" 
        borderRadius="5" 
        border="1px" 
        borderColor="yellow" 
        w="15rem" 
        bg="white"
      >
        isabela
      </Box>

      <Box 
        h="16rem" 
        borderRadius="5" 
        border="1px" 
        borderColor="yellow" 
        w="15rem" 
        bg="white"
      >
        isabela
      </Box>

      <Box 
        h="16rem" 
        borderRadius="5" 
        border="1px" 
        borderColor="yellow" 
        w="15rem" 
        bg="white"
      >
        isabela
      </Box>

      <Box 
        h="16rem" 
        borderRadius="5" 
        border="1px" 
        borderColor="yellow" 
        w="15rem" 
        bg="white"
      >
        isabela
      </Box>

      <Box 
        h="16rem" 
        borderRadius="5" 
        border="1px" 
        borderColor="yellow" 
        w="15rem" 
        bg="white"
      >
        isabela
      </Box>
    </Grid>
  )
}