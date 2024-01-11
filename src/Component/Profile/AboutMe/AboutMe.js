import React from "react";
import { AboutMeWrap, Title, AboutMeInner } from "./styled";
// 프로필 페이지 > 하단 about me 컴포넌트 입니다.

function AboutMe() {
  return (
    <AboutMeWrap>
      {/* <Title>💌 About Me</Title> */}
      <AboutMeInner>
        <p>👩🏻 김소연</p>
        <p>📅 1995-11-12</p>
        <p>📩 kimsoyeon1112@gmail.com</p>
        <p>🏠 경기도 수원시 </p>
      </AboutMeInner>
    </AboutMeWrap>
  );
}

export default AboutMe;
