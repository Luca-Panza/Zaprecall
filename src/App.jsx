import React from "react";
import styled from "styled-components";
import GlobalStyle from "./globalStyle";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Card from "./Components/Deckscreen";
import cards from "./Constants/cards";

export default function App() {

  const [completed, setCompleted] = React.useState(0);

  return (
    <>
  <GlobalStyle />
  <MainSC>

    <Header />

    <Card 
    setCompleted={setCompleted}
    completed={completed}
    />

    <Footer
    completed={completed}
    cards={cards}
    />

  </MainSC>
  </>
  )
}

const MainSC = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  `;