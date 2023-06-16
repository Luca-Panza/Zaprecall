import { useState, Fragment } from "react";
import styled from 'styled-components';

import seta_play from "./../assets/seta_play.png"
import seta_virar from "./../assets/seta_virar.png"
import icone_certo from "./../assets/icone_certo.png"
import icone_quase from "./../assets/icone_quase.png"
import icone_erro from "./../assets/icone_erro.png"
import cards from "../Constants/cards";
import { GREEN , YELLOW, RED} from  "../Constants/colors";

export default function FlashCards (props){

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

    <Flashcard_boxSC>    
      {cards.map((card, i) => {

      const [condition, setCondition] = useState("start");
      const [color, setColor] = useState ("");

        return (
          <Fragment key={i}>
            {condition === "start" && (      
              <FlashcardSC data-test="flashcard" >
                <p data-test="flashcard-text">Pergunta {i+1}</p>
                <img data-test="play-btn" src={seta_play} onClick={()=>turncard1(setCondition)} alt="Seta Play" />
              </FlashcardSC>
            )}
  
            {condition === "intermediary" && (
              <Flashcard_backSC>
                <p data-test="flashcard-text">{card.question}</p>
                <div>
                  <img data-test="turn-btn" src={seta_virar} onClick={()=>turncard2(setCondition)} alt="Seta virar" />
                </div>
              </Flashcard_backSC>
            )}
  
            {condition === "semi-final" && (
              <Flashcard_answersSC>
                <p data-test="flashcard-text">{card.answer}</p>
                <div>
                  <Button_redSC data-test="no-btn" onClick={()=>turncard3({setCondition,setColor,color:RED})}>Não lembrei</Button_redSC>
                  <Button_yellowSC data-test="partial-btn" onClick={()=>turncard3({setCondition,setColor,color:YELLOW})}>Quase não lembrei</Button_yellowSC>
                  <Button_greenSC data-test="zap-btn" onClick={()=>turncard3({setCondition,setColor,color:GREEN})}>Zap!</Button_greenSC>
                </div>
              </Flashcard_answersSC>  
            )}

            {condition === "final" && (      
              <Flashcard_finalSC>
                <p data-test="flashcard-text" style={{color}}>Pergunta {i+1}</p>
                <img data-test={color === RED ? "no-icon" : color === YELLOW ? "partial-icon": color === GREEN ? "zap-icon" : null} src={color === RED ? icone_erro : color === YELLOW ? icone_quase : color === GREEN ? icone_certo : null} alt= "icone" />
              </Flashcard_finalSC>
            )}

          </Fragment>
        );
      })}
    </Flashcard_boxSC>
  );
  
}

const Flashcard_boxSC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

const FlashcardSC = styled.div`
  width: 80%;
  height: 65px;
  padding-left: 20px;
  padding-right: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;

p {
  font-family: "Recursive";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: #333333;
  }

img {
  width: 20px;
  height: 23px;

  color: #333333;
  &:hover{
    cursor :pointer;
  }
  }
`;

const Flashcard_backSC = styled.div`
  width: 80%;
  padding: 18px 15px 15px 15px;
  border-radius: 5px;
  
  text-align:center;

  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);

div {
  width: 100%;
  padding-top: 65px;

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  }

p {
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  word-wrap: break-word;

  color: #333333;
  }

  img:hover {
  cursor: pointer;

  }
`;


const Flashcard_answersSC = styled.div`
  width: 80%;
  padding: 18px 15px 15px 15px;
  border-radius: 5px;

  text-align:center;

  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  p {
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  word-wrap: break-word;

  color: #333333;
  }

  div {
  padding-top: 20px;
  display: flex;
  justify-content:center;
  gap: 8px;
  }
`;


const Button_redSC = styled.button`
  width: 85px;
  height: 37px;

  background-color: #ff3030;
  border-radius: 5px;
  border:none;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  word-wrap: break-word;

  color: #ffffff;
  &:hover {
  cursor: pointer;
  }
`;

const Button_yellowSC = styled.button`
  width: 85px;
  height: 37px;

  background-color: #ff922e;
  border-radius: 5px;
  border:none;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  word-wrap: break-word;

  color: #ffffff;
  &:hover {
  cursor: pointer;
  }
`;

const Button_greenSC = styled.button`
  width: 85px;
  height: 37px;

  background-color: #2fbe34;
  border-radius: 5px;
  border:none;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  word-wrap: break-word;

  color: #ffffff;
  &:hover {
  cursor: pointer;
  }
`;

const Flashcard_finalSC = styled.div`
  width: 80%;
  height: 65px;
  padding-left: 20px;
  padding-right: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;

  p {
  font-family: "Recursive";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-decoration-line: line-through;

  color: #333333;
  }
`;
