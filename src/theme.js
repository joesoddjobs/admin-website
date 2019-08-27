import { load } from 'webfontloader'

load({
  google: {
    families: ['Roboto:300,400,500,700']
  }
})

const theme = {
  colors: {
    font: {
      primary: 'black',
      secondary: 'white'
    },
    background: {
      primary: 'white',
      secondary: '#F2F2F2',
      tertiary: '#1B1464',
      quaternary: '#333333'
    },
    button: {
      primary: 'white',
      secondary: '#1B1464'
    }
  },
  fonts: {
    header: {
      family: 'Roboto'
    },
    body: {
      family: 'Roboto'
    }
  }
}

export default theme
