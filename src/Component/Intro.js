import React from "react";
import styled, { keyframes } from "styled-components";
import "../static/fonts/font.css";
import memoji from "../static/images/icon_memoji_soyeon_git.png";
import { GrTextWrap } from "react-icons/gr";

//메인페이지 > 인트로 컴포넌트 입니다.

const Wrap = styled.div`
  width: 100%;
  height: 60%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px 0;
  box-sizing: border-box;
`;

const IntroText = styled.p`
  inline-size: 100%;
  margin: 10px auto 0;
  font-family: "NanumR";
  font-size: 1rem;
  color: #000c75;
  line-height: 30px;
`;

const fadeout = keyframes`
  0% {
    opacity:1;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
`;

const IntroImg = styled.img.attrs({
  src: `${memoji}`,
})`
  &:hover {
    cursor: pointer;
    animation: ${fadeout} 1s ease-in-out forwards;
  }
`;

const HyperLink = styled.div`
  width: 100%;
  height: 70%;
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  .img {
    height: 100%;
    left: auto;
    object-fit: cover;
    overflow: hidden;
    position: absolute;
  }
`;
function Intro() {
  const gitLink = "https://github.com/soyeon112";
  return (
    <>
      <Wrap>
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
      </Wrap>
    </>
  );
}
export default Intro;
