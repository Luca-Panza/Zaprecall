import styled from 'styled-components';

export default function Footer (props) {

  const {completed , cards} = props;

  return (
    <FooterSC data-test="footer">{completed} / {cards.length}</FooterSC>
  );
}

const FooterSC = styled.footer`
  width: 100%;
  height: 70px;
  margin-top:25px;

  background-color: #ffffff;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);

  display: flex;
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
  `;
