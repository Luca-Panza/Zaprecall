import React from "react";
import styled from "styled-components";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import FlashCards from "../Components/FlashCards";
import cards from "../Constants/cards";

export default function DeckScreen() {

  const [completed, setCompleted] = React.useState(0);

  return (
    <>
  <MainSC>

    <Header />

    <FlashCards 
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