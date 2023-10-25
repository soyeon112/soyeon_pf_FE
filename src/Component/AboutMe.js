import React from "react";
import styled from "styled-components";

// 프로필 페이지 > 하단 about me 컴포넌트 입니다.
const Div = styled.div`
  width: 80%;
  margin: 50px auto 50px auto;
  padding: 15px;
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 500px) {
    width: 80%;
  }
`;
const Title = styled.span`
  font-family: "NanumEB";
  font-size: 16px;
`;
const ItemText = styled.div`
  font-family: "NanumR";
  font-size: 13.5px;
  margin: 20px 0 0 5px;
  line-height: 25px;
`;
function AboutMe() {
  return (
    <Div>
      <Title>💌 About Me</Title>
      <ItemText>
        <p>이름 : 김소연</p>
        <p>생년월일 : 1995.11.12</p>
        <p>E-mail : kimsoyeon1112@gmail.com</p>
        <p>
          교육 : KOSTA Node.js기반 웹 Full-Stack 개발자 양성과정 교육 수료
          (2022.03.10 - 2022.07.26)
        </p>
      </ItemText>
    </Div>
  );
}

export default AboutMe;
