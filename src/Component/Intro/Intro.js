import React from "react";
import "../../static/fonts/font.css";

import { GrTextWrap } from "react-icons/gr";
import { IntroWrap, IntroText, IntroImg, HyperLink } from "./styled";
//메인페이지 > 인트로 컴포넌트 입니다.

function Intro() {
  const gitLink = "https://github.com/soyeon112";
  return (
    <IntroWrap>
      <HyperLink>
        <IntroImg
          className="img"
          onClick={() => {
            window.open(gitLink);
          }}
        />
      </HyperLink>
      <IntroText>
        Hi-! <br />
        My name is soyeon kim.
        <br />
        Nice to meet you-!🙂
      </IntroText>
    </IntroWrap>
  );
}
export default Intro;
