import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  fonts: {
    heading: 'Poppins',
    bg: 'Poppins'
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