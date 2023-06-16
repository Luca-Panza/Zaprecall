import styled from 'styled-components';

import cards from "../Constants/cards";
import icone_certo from "./../assets/icone_certo.png"
import icone_quase from "./../assets/icone_quase.png"
import icone_erro from "./../assets/icone_erro.png"
import { GREEN , YELLOW, RED} from  "../Constants/colors";

export default function Footer (props) {

  const {completed, icons} = props;

  return (

    <FooterSC>{completed} / {cards.length}
      <div>
        {icons.map((icon, i) => {
          return (
            <img key={i} src={icon === RED ? icone_erro : icon === YELLOW ? icone_quase : icon === GREEN ? icone_certo : null} alt= "icon"/>
          );
        })}
      </div>
    </FooterSC>
  );
}

const FooterSC = styled.footer`
  width: 100%;
  height: 70px;
  margin-top:25px;

  background-color: #ffffff;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);

  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;

  position: sticky;
  bottom: 0;
  left: 0;

  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  color: #333333;
  div{
    margin-top:4px;
    gap:5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  `;
