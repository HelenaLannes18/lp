import '../styles/globals.css'

import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { Header } from '../components/SEO/head'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Header title={'Black Friday Upload'} description={'Tudo para você dar um passo à frente com o seu negócio'} />
      <Component {...pageProps} />
    </ChakraProvider>
  )

}

export default MyApp