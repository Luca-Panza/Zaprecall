import styled from 'styled-components';

import logo from "./assets/logo.png";

export default function Header (){
  return (   
  <HeaderSC>
    <LogoImageSC src={logo}></LogoImageSC>
    <HeadingSC>ZapRecall</HeadingSC>
  </HeaderSC>
  );
}

const HeaderSC = styled.header`
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
`;

const LogoImageSC = styled.img`
  width: 52px;
  height: 60px;
  margin-right: 2%;
`;

const HeadingSC = styled.h1`
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
`;
