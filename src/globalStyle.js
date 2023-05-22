import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  font-size: 100%;
  vertical-align: baseline;
}
  * {
  box-sizing: border-box;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
  background-color: #fb6b6b;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
strong {
  font-weight: bold;
}

/* STYLES GERAL AINDA TEM QUE REFATORAR */

.question_box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
}

.question {
  width: 300px;
  height: 65px;
  padding-left: 20px;
  padding-right: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
}

.question > p {
  font-family: "Recursive";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: #333333;
}

.question > img {
  width: 20px;
  height: 23px;

  color: #333333;
}

.question_back {
  width: 80%;
  padding: 18px 15px 15px 15px;

  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
}

.question_back > div {
  width: 100%;
  padding-top: 65px;

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}

.question_back > p {
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  word-wrap: break-word;

  color: #333333;
}

.question > img:hover,
.question_back > div > img:hover {
  cursor: pointer;
}

.questions_answers {
  width: 80%;

  padding: 18px 15px 15px 15px;

  text-align:center;

  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
}

.questions_answers > p {
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  word-wrap: break-word;

  color: #333333;
}

.answers {
  padding-top: 20px;
  display: flex;
  justify-content:center;
  gap: 8px;
}

.answers_red {
  width: 85px;
  height: 37px;

  background-color: #ff3030;
  border-radius: 5px;

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
}

.answers_yellow {
  width: 85px;
  height: 37px;

  background-color: #ff922e;
  border-radius: 5px;

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
}

.answers_green {
  width: 85px;
  height: 37px;

  background-color: #2fbe34;
  border-radius: 5px;

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
}

.answers_red:hover,
.answers_yellow:hover,
.answers_green:hover {
  cursor: pointer;
}

.final_answer {
  width: 300px;
  height: 65px;
  padding-left: 20px;
  padding-right: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
}

.final_answer > p {
  font-family: "Recursive";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-decoration-line: line-through;

  color: #333333;
}

`;

export default GlobalStyle;
