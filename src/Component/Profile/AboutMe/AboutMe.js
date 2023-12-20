import React from "react";
import { AboutMeWrap, Title, AboutMeInner } from "./styled";
// 프로필 페이지 > 하단 about me 컴포넌트 입니다.

function AboutMe() {
  return (
    <AboutMeWrap>
      <Title>💌 About Me</Title>
      <AboutMeInner>
        <p>이름 : 김소연</p>
        <p>생년월일 : 1995.11.12</p>
        <p>E-mail : kimsoyeon1112@gmail.com</p>
        <p>
          교육 : KOSTA Node.js기반 웹 Full-Stack 개발자 양성과정 교육 수료
          (2022.03.10 - 2022.07.26)
        </p>
      </AboutMeInner>
    </AboutMeWrap>
  );
}

export default AboutMe;
