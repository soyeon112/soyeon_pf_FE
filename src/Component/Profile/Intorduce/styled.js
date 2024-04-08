import styled from "styled-components/macro";
import profileImg from "../../../static/images/profileImg3.png";

export const IntroduceDiv = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 50px auto;
  box-sizing: border-box;

  @media (max-width: 1280px) {
    display: flex;
  }
  @media (max-width: 820px) {
    width: 100%;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    margin: 20px auto;
  }
`;

export const PhotoWrap = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${profileImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 17px;

  @media (max-width: 500px) {
    background-position: top;
  }
`;
export const ProfileImg = styled.img.attrs({
  src: `${profileImg}`,
})`
  /* width: 100%; */
  /* width: 45%; */
  width: 100%;
  height: auto;
  margin: 0 auto;
  border-radius: 10px;

  @media (max-width: 820px) {
    /* height: 100%; */
  }
  @media (max-width: 500px) {
    /* width: 100%; */
  }
`;
export const InnerWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 820px) {
  }
  @media (max-width: 500px) {
    width: 95%;
    height: auto;
    margin: 10px auto;
  }
`;

export const TextDiv = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 820px) {
    width: 100%;
    margin: 0 auto;
  }
  @media (max-width: 500px) {
  }
`;
export const IntroduceTextBold = styled.p`
  white-space: pre-wrap;
  font-family: "NanumEB";
  font-size: 1rem;
  color: #047efe;
  line-height: 25px;
  @media (max-width: 820px) {
  }
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;
export const IntroduceTextR = styled.p`
  white-space: pre-wrap;
  line-height: 25px;
  font-family: "NanumR";
  font-size: 0.9rem;
  @media (max-width: 820px) {
    white-space: pre-wrap;
  }
  @media (max-width: 500px) {
    white-space: pre-wrap;
    font-size: 0.75rem;
  }
`;
