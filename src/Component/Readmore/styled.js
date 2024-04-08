import styled from "styled-components/macro";

/*modal bg*/
export const ModalPopup = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  /* overflow-y: auto; */
`;

/*modal popup*/
export const CodeDiv = styled.div`
  width: 60%;
  height: 95vh;
  position: absolute;
  top: 2.5%;
  left: 20%;
  font-size: 16px;
  background-color: #f4f2f3;
  border-radius: 10px;
  overflow-y: auto;

  @media (max-width: 820px) {
    width: 90%;
    left: 5%;
  }
  @media (max-width: 500px) {
  }
`;

/*헤더영역*/
export const Header = styled.header`
  background-color: #faf7f8;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 0 4px 4px -4px rgba(0, 0, 0, 0.2);
  height: 40px;
  display: flex;
  flex-direction: row;
`;
/*헤더 - 닫기 버튼*/
export const CloseBtn = styled.img`
  position: absolute;
  right: 0;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 28px;
  width: 28px;
  height: 28px;
  margin: 5px 10px 5px 5px;
  &:hover {
    cursor: pointer;
    background-color: #e5e3e4;
  }
`;
/*헤더 - 왼쪽 동그라미 세개*/
export const CircleDiv = styled.div`
  width: 55px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 15px 0 15px;
`;

export const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 10px;
`;

/* 프로젝트 정보 */
export const PjinfoDiv = styled.div`
  /* background-color: lavender; */
  width: 80%;
  height: 90px;
  margin: 30px auto 0 auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  /* background-color: lavender; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (max-width: 820px) {
    /* margin: 10px auto 0 auto; */
    width: 90%;
  }
  @media (max-width: 500px) {
    font-size: 0.6rem;
    margin: 15px auto 0 auto;
  }
`;

//글꼴 > 굵기에 따라 분류
export const TextEB = styled.p`
  font-family: "NanumEB";
  font-size: 1.1rem;
  @media (max-width: 820px) {
    font-size: 0.95rem;
  }
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;
export const TextB = styled.p`
  font-family: "NanumB";
  font-size: 0.9rem;
  @media (max-width: 820px) {
    font-size: 0.8rem;
  }
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`;

export const TextR = styled.p`
  font-family: "NanumR";
  font-size: 0.85rem;
  /* margin: 10px 3px 10px 0; */
  white-space: pre-wrap;
  @media (max-width: 820px) {
    font-size: 0.8rem;
  }
  @media (max-width: 500px) {
    font-size: 0.7rem;
  }
`;
export const FeedbackDiv = styled.div`
  white-space: pre; //textarea 텍스트 개행 되도록
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  padding: 10px 0 10px 0;
  margin: 0 auto 40px auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  line-height: 2;

  @media (max-width: 820px) {
    width: 90%;
  }
`;

//photo

export const ReadmorePhotoWrap = styled.div`
  width: 80%;
  height: 330px;
  margin: 20px auto 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 1280px) {
  }
  @media (max-width: 820px) {
    width: 100%;
    height: 440px;
    flex-direction: column;
  }
  @media (max-width: 500px) {
    width: 100%;
    height: 300px;
  }
`;
export const BigImgDiv = styled.div`
  width: 80%;
  height: 330px;
  margin: auto 0;
  @media (max-width: 820px) {
    width: 100%;
    height: 80%;
    margin-bottom: 10px;
  }
  @media (max-width: 500px) {
    height: 70%;
  }
`;
export const BigImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  @media (max-width: 820px) {
  }
  @media (max-width: 500px) {
  }
`;
export const SmallImgDiv_scroll = styled.div`
  width: 20%;
  height: 330px;
  margin: 0 auto;
  overflow-y: auto;
  overflow-x: auto;

  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    height: 10%;
    background-color: #dedcdd;
    border-radius: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: #faf7f8;
  }
  @media (max-width: 820px) {
    width: 98%;
    height: 70px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  @media (max-width: 500px) {
  }
`;
export const SmallImgDiv = styled.div`
  width: 100%;
  height: auto;
  overflow-x: hidden;
  @media (max-width: 820px) {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    overflow-x: auto;
    overflow-y: hidden;
  }
  @media (max-width: 500px) {
    width: auto;
  }
`;
export const SmallImg = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
  object-fit: cover;
  padding: 2px;
  box-sizing: border-box;

  @media (max-width: 820px) {
  }
  @media (max-width: 500px) {
  }
`;
