import React from "react";
import styled from 'styled-components';
import GlobalStyle from "./globalStyle";

import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import cards from "./cards";

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

const MainSC = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  `;