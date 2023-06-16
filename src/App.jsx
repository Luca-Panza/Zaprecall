import React from "react";
import { useState } from "react";

import GlobalStyle from "./globalStyle";
import DeckScreen from "./Components/DeckScreen";
import LoginScreen from "./Components/LoginScreen";

export default function App() {

  const [login, setLogin] = useState(true);

  function changeScreen (){
    setLogin(false)
  }

  return (
    <>
      <GlobalStyle />
      {login ? <LoginScreen changeScreen={changeScreen} /> :  <DeckScreen />}
    </>
  )
}
