import styled, { keyframes } from "styled-components";
import memoji from "../../static/images/icon_memoji_soyeon_git.png";

export const IntroWrap = styled.div`
  width: 100%;
  height: 60%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px 0;
  box-sizing: border-box;
`;

export const IntroText = styled.p`
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

export const IntroImg = styled.img.attrs({
  src: `${memoji}`,
})`
  &:hover {
    cursor: pointer;
    animation: ${fadeout} 1s ease-in-out forwards;
  }
`;

export const HyperLink = styled.div`
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
