import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  fonts: {
    heading: 'Poppins',
    bg: 'Poppins'
  },
  components: {
    Divider: {
      baseStyle: {
        borderColor: '#47585B'
      }
    }
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.500'
      }
    }
  }
})