import React from "react";
import styled from "styled-components";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import FlashCards from "../Components/FlashCards";

export default function DeckScreen() {

  const [completed, setCompleted] = React.useState(0);
  const [icons, setIcons] = React.useState ([]);

  return (
    <>
  <MainSC>

    <Header />

    <FlashCards 
    setCompleted={setCompleted}
    completed={completed}
    setIcons={setIcons}
    icons={icons}
    />

    <Footer
    completed={completed}
    icons={icons}
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