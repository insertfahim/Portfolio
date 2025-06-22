import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f0e7db', '#202023')(props),
      color: mode('gray.800', 'whiteAlpha.900')(props)
    },
    iframe: {
      borderRadius: 'lg'
    },
    'html, body': {
      scrollBehavior: 'smooth'
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    },
    baseStyle: {
      fontWeight: 'bold',
      letterSpacing: 'tight'
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3,
      transition: 'all 0.2s ease-in-out',
      _hover: {
        textDecoration: 'underline',
        transform: 'translateY(-1px)'
      }
    })
  },
  Button: {
    baseStyle: {
      borderRadius: 'md',
      fontWeight: 'medium',
      transition: 'all 0.2s ease-in-out',
      _hover: {
        transform: 'translateY(-1px)'
      }
    }
  },
  IconButton: {
    baseStyle: {
      borderRadius: 'md',
      transition: 'all 0.2s ease-in-out',
      _hover: {
        transform: 'translateY(-1px)'
      }
    }
  },
  Menu: {
    baseStyle: {
      list: {
        borderRadius: 'md',
        boxShadow: 'lg'
      }
    }
  },
  Badge: {
    baseStyle: {
      borderRadius: 'md',
      fontWeight: 'medium'
    }
  },
  Card: {
    baseStyle: {
      container: {
        borderRadius: 'lg',
        boxShadow: 'md',
        transition: 'all 0.2s ease-in-out',
        _hover: {
          boxShadow: 'lg',
          transform: 'translateY(-2px)'
        }
      }
    }
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'",
  body: "'M PLUS Rounded 1c'"
}

const colors = {
  grassTeal: '#88ccca',
  brand: {
    50: '#e6fffa',
    100: '#b2f5ea',
    200: '#81e6d9',
    300: '#4fd1c7',
    400: '#38b2ac',
    500: '#319795',
    600: '#2c7a7b',
    700: '#285e61',
    800: '#234e52',
    900: '#1d4044'
  }
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
