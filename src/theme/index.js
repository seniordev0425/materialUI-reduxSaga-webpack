import { createMuiTheme } from '@material-ui/core/styles'

export const THEME = createMuiTheme({
  pallete: {
    primary: {
      main: '#1174F2'
    }
  },
  typography: {
    fontFamily: 'Montserrat',
    fontSize: 16,

    darkFont24: {
      fontSize: 54,
      color: 'black',
      fontWeight: 500
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})

export const Colors = {
  WHITE: '#FFFFFF',
  GRAY_DARK: '#000000DE',
  GRAY_REGULAR: '#353535',
  GRAY_BORDER1: '#BAC3C9',
  GRAY_BORDER2: '#BAC3C9',
  GRAY_LIGHT: '#F3F5F7',
  BLUE: '#1174F2',
  RED: '#F63333'
}

export const CommonFonts = {
  // WHITE BOLD FONTS
  whiteBoldFont30: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.WHITE
  },
  whiteBoldFont28: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.WHITE
  },
  whiteBoldFont26: {
    fontSize: 26,
    fontWeight: 'bold',
    color: Colors.WHITE
  },
  whiteBoldFont24: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.WHITE
  },
  whiteBoldFont22: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.WHITE
  },
  whiteBoldFont20: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.WHITE
  },
  whiteBoldFont18: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.WHITE
  },
  whiteBoldFont16: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.WHITE
  },
  whiteBoldFont14: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.WHITE
  },
  whiteBoldFont12: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.WHITE
  },
  whiteBoldFont10: {
    fontSize: 10,
    fontWeight: 'bold',
    color: Colors.WHITE
  },
  whiteBoldFont8: {
    fontSize: 8,
    fontWeight: 'bold',
    color: Colors.WHITE
  },

  // WHITE FONTS
  whiteFont30: {
    fontSize: 30,
    color: Colors.WHITE
  },
  whiteFont28: {
    fontSize: 28,
    color: Colors.WHITE
  },
  whiteFont26: {
    fontSize: 26,
    color: Colors.WHITE
  },
  whiteFont24: {
    fontSize: 24,
    color: Colors.WHITE
  },
  whiteFont22: {
    fontSize: 22,
    color: Colors.WHITE
  },
  whiteFont20: {
    fontSize: 20,
    color: Colors.WHITE
  },
  whiteFont18: {
    fontSize: 18,
    color: Colors.WHITE
  },
  whiteFont16: {
    fontSize: 16,
    color: Colors.WHITE
  },
  whiteFont14: {
    fontSize: 14,
    color: Colors.WHITE
  },
  whiteFont12: {
    fontSize: 12,
    color: Colors.WHITE
  },
  whiteFont10: {
    fontSize: 10,
    color: Colors.WHITE
  },
  whiteFont8: {
    fontSize: 8,
    color: Colors.WHITE
  },

  // DARK BOLD FONTS
  darkBoldFont30: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.GRAY_DARK
  },
  darkBoldFont28: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.GRAY_DARK
  },
  darkBoldFont26: {
    fontSize: 26,
    fontWeight: 'bold',
    color: Colors.GRAY_DARK
  },
  darkBoldFont24: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.GRAY_DARK
  },
  darkBoldFont22: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.GRAY_DARK
  },
  darkBoldFont20: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.GRAY_DARK
  },
  darkBoldFont18: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.GRAY_DARK
  },
  darkBoldFont16: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.GRAY_DARK
  },
  darkBoldFont14: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.GRAY_DARK
  },
  darkBoldFont12: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.GRAY_DARK
  },
  darkBoldFont10: {
    fontSize: 10,
    fontWeight: 'bold',
    color: Colors.GRAY_DARK
  },
  darkBoldFont8: {
    fontSize: 8,
    fontWeight: 'bold',
    color: Colors.GRAY_DARK
  },

  // DARK FONTS
  darkFont30: {
    fontSize: 30,
    color: Colors.GRAY_DARK
  },
  darkFont28: {
    fontSize: 28,
    color: Colors.GRAY_DARK
  },
  darkFont26: {
    fontSize: 26,
    color: Colors.GRAY_DARK
  },
  darkFont24: {
    fontSize: 24,
    color: Colors.GRAY_DARK
  },
  darkFont22: {
    fontSize: 22,
    color: Colors.GRAY_DARK
  },
  darkFont20: {
    fontSize: 20,
    color: Colors.GRAY_DARK
  },
  darkFont18: {
    fontSize: 18,
    color: Colors.GRAY_DARK
  },
  darkFont16: {
    fontSize: 16,
    color: Colors.GRAY_DARK
  },
  darkFont14: {
    fontSize: 14,
    color: Colors.GRAY_DARK
  },
  darkFont12: {
    fontSize: 12,
    color: Colors.GRAY_DARK
  },
  darkFont10: {
    fontSize: 10,
    color: Colors.GRAY_DARK
  },
  darkFont8: {
    fontSize: 8,
    color: Colors.GRAY_DARK
  },

  // GRAY BOLD FONTS
  grayBoldFont30: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.GRAY_REGULAR
  },
  grayBoldFont28: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.GRAY_REGULAR
  },
  grayBoldFont26: {
    fontSize: 26,
    fontWeight: 'bold',
    color: Colors.GRAY_REGULAR
  },
  grayBoldFont24: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.GRAY_REGULAR
  },
  grayBoldFont22: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.GRAY_REGULAR
  },
  grayBoldFont20: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.GRAY_REGULAR
  },
  grayBoldFont18: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.GRAY_REGULAR
  },
  grayBoldFont16: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.GRAY_REGULAR
  },
  grayBoldFont14: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.GRAY_REGULAR
  },
  grayBoldFont12: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.GRAY_REGULAR
  },
  grayBoldFont10: {
    fontSize: 10,
    fontWeight: 'bold',
    color: Colors.GRAY_REGULAR
  },
  grayBoldFont8: {
    fontSize: 8,
    fontWeight: 'bold',
    color: Colors.GRAY_REGULAR
  },

  // GRAY FONTS
  grayFont30: {
    fontSize: 30,
    color: Colors.GRAY_REGULAR
  },
  grayFont28: {
    fontSize: 28,
    color: Colors.GRAY_REGULAR
  },
  grayFont26: {
    fontSize: 26,
    color: Colors.GRAY_REGULAR
  },
  grayFont24: {
    fontSize: 24,
    color: Colors.GRAY_REGULAR
  },
  grayFont22: {
    fontSize: 22,
    color: Colors.GRAY_REGULAR
  },
  grayFont20: {
    fontSize: 20,
    color: Colors.GRAY_REGULAR
  },
  grayFont18: {
    fontSize: 18,
    color: Colors.GRAY_REGULAR
  },
  grayFont16: {
    fontSize: 16,
    color: Colors.GRAY_REGULAR
  },
  grayFont14: {
    fontSize: 14,
    color: Colors.GRAY_REGULAR
  },
  grayFont12: {
    fontSize: 12,
    color: Colors.GRAY_REGULAR
  },
  grayFont10: {
    fontSize: 10,
    color: Colors.GRAY_REGULAR
  },
  grayFont8: {
    fontSize: 8,
    color: Colors.GRAY_REGULAR
  },

  // BLUE BOLD FONTS
  blueBoldFont30: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.BLUE
  },
  blueBoldFont28: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.BLUE
  },
  blueBoldFont26: {
    fontSize: 26,
    fontWeight: 'bold',
    color: Colors.BLUE
  },
  blueBoldFont24: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.BLUE
  },
  blueBoldFont22: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.BLUE
  },
  blueBoldFont20: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.BLUE
  },
  blueBoldFont18: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.BLUE
  },
  blueBoldFont16: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.BLUE
  },
  blueBoldFont14: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.BLUE
  },
  blueBoldFont12: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.BLUE
  },
  blueBoldFont10: {
    fontSize: 10,
    fontWeight: 'bold',
    color: Colors.BLUE
  },
  blueBoldFont8: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.BLUE
  },

   // BLUE FONTS
   blueFont30: {
    fontSize: 30,
    color: Colors.BLUE
  },
  blueFont28: {
    fontSize: 28,
    color: Colors.BLUE
  },
  blueFont26: {
    fontSize: 26,
    color: Colors.BLUE
  },
  blueFont24: {
    fontSize: 24,
    color: Colors.BLUE
  },
  blueFont22: {
    fontSize: 22,
    color: Colors.BLUE
  },
  blueFont20: {
    fontSize: 20,
    color: Colors.BLUE
  },
  blueFont18: {
    fontSize: 18,
    color: Colors.BLUE
  },
  blueFont16: {
    fontSize: 16,
    color: Colors.BLUE
  },
  blueFont14: {
    fontSize: 14,
    color: Colors.BLUE
  },
  blueFont12: {
    fontSize: 12,
    color: Colors.BLUE
  },
  blueFont10: {
    fontSize: 10,
    color: Colors.BLUE
  },
  blueFont8: {
    fontSize: 24,
    color: Colors.BLUE
  }
}