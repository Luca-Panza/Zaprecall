import styled from 'styled-components';
import logo from "./../assets/logo.png";

export default function Header (){
  return (   
  <HeaderSC>
    <img src={logo} alt="Zaprecall"></img>
    <h1>ZapRecall</h1>
  </HeaderSC>
  );
}

const HeaderSC = styled.header`
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  img{
    width: 52px;
    margin-right: 2%;
  }
  h1{
    font-family: "Righteous";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.012em;
    color: #ffffff;
  }
`;

