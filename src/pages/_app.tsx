import type {AppProps} from 'next/app'
import {createGlobalStyle} from 'styled-components'
import AppContext, {defaultUser} from "@/core/context";
import {useState} from "react";
import IUser from "../../interface/user.interface";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: linear-gradient(#141e30, #243b55);
    font-family: 'Poppins', sans-serif;
  }
`

const App = ({Component, pageProps}: AppProps) => {
  const [user, setUser] = useState(defaultUser)
  const handleLogin = (candidate: IUser) => {
    setUser(candidate)
  }

  return (
    <>
      <AppContext.Provider value={{user, handleLogin}}>
        <GlobalStyle/>
        <Component {...pageProps} />
      </AppContext.Provider>
    </>
  )
}

export default App;
