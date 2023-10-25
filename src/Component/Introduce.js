import React from "react";
import styled from "styled-components";
import "../static/fonts/font.css";
import memoji from "../static/images/icon_memoji_soyeon.png";

// 프로필 페이지 > 자기소개 컴포넌트 입니다.

const IntroduceDiv = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  padding-top: 30px;
  @media (max-width: 1280px) {
    display: flex;
  }
  @media (max-width: 768px) {
    width: 60%; /*60*/
    flex-direction: wrap;
    flex-direction: column;
  }
  @media (max-width: 500px) {
    width: 80%; /*60% */
    display: flex;
    flex-direction: column;
  }
`;

const ProfileImg = styled.img.attrs({
  src: `${memoji}`,
})`
  width: 45%;
  height: 45%;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;
const TextDiv = styled.div`
  width: 60%;
  margin: 12px 0 0 0;
  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }
  @media (max-width: 500px) {
    width: 100%;
    margin: 0 auto;
  }
`;
const IntroduceTextBold = styled.p`
  white-space: pre-wrap;
  margin: 25px 0 0 20px;
  font-family: "NanumEB";
  font-size: 14px;
  line-height: 25px;
  @media (max-width: 768px) {
    margin: 25px 0 0 10px;
  }
  @media (max-width: 500px) {
    margin: 25px 0 0 13px;
  }
`;
const IntroduceTextR = styled.p`
  white-space: pre-wrap;
  margin: 10px 0 0 20px;
  line-height: 25px;
  font-family: "NanumR";
  font-size: 14px;
  @media (max-width: 768px) {
    white-space: pre-wrap;
    margin: 10px 0 0 13px;
    font-size: 13px;
  }
  @media (max-width: 500px) {
    white-space: pre-wrap;
    margin: 10px 0 0 13px;
    font-size: 13px;
  }
`;

const profileTextB = `안녕하세요! 프론트엔드를 꿈꾸는 김소연입니다.🙋‍♀️  `;
const profileTextR = `
다양한 개발 언어를 접하다 HTML과 CSS, JavaScript를 만나면서 HTML와 CSS로 구성을하고 디자인요소를 추가하고, \nJavaScript로 동적인 기능을 구현하여 웹페이지를 만드는것에 흥미를 느끼게 되었습니다. `;

function Introduce() {
  return (
    <>
      <IntroduceDiv>
        <ProfileImg />
        <TextDiv>
          <IntroduceTextBold>{profileTextB}</IntroduceTextBold>
          <IntroduceTextR>{profileTextR}</IntroduceTextR>
        </TextDiv>
      </IntroduceDiv>
    </>
  );
}

export default Introduce;
