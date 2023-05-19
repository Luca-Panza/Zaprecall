import { useState } from 'react'
import "./css/reset.css";
import "./css/style.css";


import logo from "./assets/logo.png";
import seta_play from "./assets/seta_play.png"
import seta_virar from "./assets/seta_virar.png"

export default function App() {

  return (

  <div className="main">
    <header>
      <img src={logo}></img>
      <h1>ZapRecall</h1>
    </header>

    <div className="question_box">
      <div className="question">
        <p>Pergunta 1</p>
        <img src={seta_play}></img>
        </div>

      <div className="question_back">
        <p>O que é JSX?</p>
        <div><img src={seta_virar}></img></div>
      </div>

      <div className="questions_answers">
        <p>JSX é uma sintaxe para escrever HTML dentro do JS</p>
        <div className="answers">
          <div className="answers_red">Não lembrei</div>
          <div className="answers_yellow">Quase não lembrei</div>
          <div className="answers_green">Zap!</div>
        </div>  
      
      </div>

    </div>
    <footer>0/4 CONCLUÍDOS</footer>
  </div>

  )
}
