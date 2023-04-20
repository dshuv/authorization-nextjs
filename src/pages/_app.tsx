import type {AppProps} from 'next/app'
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: linear-gradient(#141e30, #243b55);
    font-family: 'Poppins', sans-serif;
  }
`

const App = ({Component, pageProps}: AppProps) => {
  return (
    <>
      <GlobalStyle/>
      <Component {...pageProps} />
    </>
  )
}

export default App;
