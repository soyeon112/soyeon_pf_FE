import styled, { keyframes } from "styled-components/macro";

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
to{
    width:50%;
}`;

export const MessageWrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
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
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.fontColor};

  @media (max-width: 820px) {
    font-size: 1rem;
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
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 5px;
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

//aboutme
export const AboutMeWrap = styled.div`
  width: 100%;
  height: 50%;
  /* margin-left: 20px; */
`;
export const AboutMeInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const FolderWrap = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: "NanumB";
  }
  .folder {
    margin: 0 20px;
    &:hover {
      cursor: pointer;
      path {
        stroke: #057eff;
      }
    }
  }
`;
//stack
export const StackWrap = styled.div`
  width: 100%;
  height: 50%;
  /* background-color: pink; */
`;
