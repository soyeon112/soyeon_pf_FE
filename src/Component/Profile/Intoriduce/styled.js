import styled from "styled-components";
import memoji from "../../../static/images/icon_memoji_soyeon.png";

export const IntroduceDiv = styled.div`
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

export const ProfileImg = styled.img.attrs({
  src: `${memoji}`,
})`
  width: 45%;
  height: 45%;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;
export const TextDiv = styled.div`
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
export const IntroduceTextBold = styled.p`
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
export const IntroduceTextR = styled.p`
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
