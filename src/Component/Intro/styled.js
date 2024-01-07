import styled, { keyframes } from "styled-components";

export const messageAni = keyframes`
from {
    opacity:0;
    transform:translateX(-100px);
}
to{
   opacity:1; 
   transform:translateX(0px);
}`;
export const messageWrapMoveAni = keyframes`
from {
   
}
to{
    width:50%;
  /* transform:translateX(-100px); */
}`;

export const IntroWrap = styled.div`
  font-family: "NanumR";
  width: 100%;
  height: 80vh;
  padding: 15px 55px;
  margin-top: 100px;
  box-sizing: border-box;
  @media (max-width: 820px) {
  }
  @media (max-width: 500px) {
    padding: 15px;
  }
`;
export const MessageWrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: start;

  .message:nth-of-type(2) {
    animation-delay: 0.5s;
  }
  .message:nth-of-type(3) {
    animation-delay: 1s;
  }
  .message:nth-of-type(4) {
    animation-delay: 1.5s;
  }
  .message:nth-of-type(5) {
    animation-delay: 2s;
  }
  .message:nth-of-type(6) {
    animation-delay: 2.5s;
  }
  .message:nth-of-type(7) {
    animation-delay: 3s;
  }
`;

export const MessageInner = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  animation: ${messageAni} 0.5s;
  animation-fill-mode: forwards;
  gap: 5px;
  position: relative;
  @media (max-width: 820px) {
    height: 100px;
  }
  @media (max-width: 500px) {
    height: 60px;
  }
  @media (max-width: 300px) {
    height: 80px;
  }
`;
export const Message = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  left: ${(props) => props.left}px;
  right: ${(props) => props.right}px;
  top: ${(props) => props.top}px;
  bottom: ${(props) => props.bottom}px;
  padding: 30px 25px;
  box-sizing: border-box;
  font-size: 1.2rem;
  border-radius: 150px;
  /* line-height: 60px; */
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.fontColor};

  @media (max-width: 820px) {
    font-size: 1rem;
    /* line-height: 50px; */
  }
  @media (max-width: 500px) {
    padding: 15px 25px;
    font-size: 0.8rem;
    line-height: 20px;
  }
`;

export const InnerLeft = styled.div`
  width: 100%;
  height: 100%;
  /* margin: 0 auto; */
  display: flex;
  flex-direction: column;
  gap: 5px;
  @media (min-width: 1280px) {
    animation: ${messageWrapMoveAni} 1s 4s;
    animation-fill-mode: forwards;
  }
  @media (max-width: 820px) {
    width: 100%;
  }
  @media (max-width: 500px) {
  }
`;
