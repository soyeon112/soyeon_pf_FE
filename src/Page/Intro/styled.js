import styled, { keyframes } from "styled-components";
export const aboutMeMoveAni = keyframes`
from {

  transform:translateY(1000px);
}to{
  width:50%;
transform:translateY(0px);
}`;
export const IntroWrap = styled.div`
  font-family: "NanumR";
  width: 100vw;
  height: 100vh;
  padding: 15px 55px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 820px) {
  }
  @media (max-width: 500px) {
    padding: 15px;
  }
`;

export const IntroRightWrap = styled.div`
  width: 0%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;

  transform: translateY(1000px);
  animation: ${aboutMeMoveAni} 1s 5s;
  animation-fill-mode: forwards;
`;
