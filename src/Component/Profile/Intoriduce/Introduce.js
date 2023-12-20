import React from "react";
import "../../../static/fonts/font.css";
import {
  IntroduceDiv,
  ProfileImg,
  TextDiv,
  IntroduceTextBold,
  IntroduceTextR,
} from "./styled";

// 프로필 페이지 > 자기소개 컴포넌트 입니다.

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
