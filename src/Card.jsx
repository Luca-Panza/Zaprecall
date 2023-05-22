import { useState, Fragment } from "react";

import seta_play from "./assets/seta_play.png"
import seta_virar from "./assets/seta_virar.png"
import icone_certo from "./assets/icone_certo.png"
import icone_quase from "./assets/icone_quase.png"
import icone_erro from "./assets/icone_erro.png"
import cards from "./cards"

export default function Card (props){

  const {setCompleted, completed} = props;

  function turncard1 (setCondition){
    setCondition("intermediary")
  }

  function turncard2 (setCondition){
    setCondition("semi-final")
  }

  function turncard3 ({setCondition,setColor,color}){
    setColor(color)
    setCondition("final")
    setCompleted(completed + 1)
  }

  return (

    <div className="question_box">    
      {cards.map((card, i) => {

      const [condition, setCondition] = useState("start");
      const [color, setColor] = useState ("");

        return (
          <Fragment key={i}>
            {condition === "start" && (      
              <div data-test="flashcard" className="question">
                <p data-test="flashcard-text">Pergunta {i+1}</p>
                <img data-test="play-btn" src={seta_play} onClick={()=>turncard1(setCondition)} alt="Seta Play" />
              </div>
            )}
  
            {condition === "intermediary" && (
              <div className="question_back">
                <p data-test="flashcard-text">{card.question}</p>
                <div>
                  <img data-test="turn-btn" src={seta_virar} onClick={()=>turncard2(setCondition)} alt="Seta virar" />
                </div>
              </div>
            )}
  
            {condition === "semi-final" && (
              <div className="questions_answers">
                <p data-test="flashcard-text">{card.answer}</p>
                <div className="answers">
                  <div data-test="no-btn" className="answers_red" onClick={()=>turncard3({setCondition,setColor,color:"#FF3030"})}>Não lembrei</div>
                  <div data-test="partial-btn" className="answers_yellow" onClick={()=>turncard3({setCondition,setColor,color:"#FF922E"})}>Quase não lembrei</div>
                  <div data-test="zap-btn" className="answers_green" onClick={()=>turncard3({setCondition,setColor,color:"#2FBE34"})}>Zap!</div>
                </div>
              </div>  
            )}

            {condition === "final" && (      
              <div className="final_answer">
                <p data-test="flashcard-text" style={{color}}>Pergunta {i+1}</p>
                <img data-test={color === "#FF3030" ? "no-icon" : color === "#FF922E" ? "partial-icon": color === "#2FBE34" ? "zap-icon" : null} src={color === "#FF3030" ? icone_erro : color === "#FF922E" ? icone_quase : color === "#2FBE34" ? icone_certo : null} alt= "icone" />
              </div>
            )}

          </Fragment>
        );
      })}
    </div>
  );
  
}

