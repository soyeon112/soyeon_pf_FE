import React, { useState } from "react";
import styled from "styled-components";

// 프로젝트 > readmore 모달창 내에 사진만 보여주는 컴포넌트 입니다.

const ScreenImgDiv = styled.div`
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
const BigImgDiv = styled.div`
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
const BigImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  @media (max-width: 820px) {
  }
  @media (max-width: 500px) {
  }
`;
const SmallImgDiv_scroll = styled.div`
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
const SmallImgDiv = styled.div`
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
const SmallImg = styled.img`
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
//images
function Readmore_photo({ imgArr }) {
  const [saveImg, setSaveImg] = useState();

  return (
    <>
      <ScreenImgDiv>
        <BigImgDiv>
          {saveImg ? (
            <BigImg src={`/api/image/${saveImg}`} />
          ) : (
            <BigImg src={`/api/image/${imgArr[0]}`} />
          )}
        </BigImgDiv>
        <SmallImgDiv_scroll>
          <SmallImgDiv>
            {imgArr.map((it) => (
              <SmallImg
                src={`/api/image/${it}`}
                key={it.id}
                onClick={() => setSaveImg(it)}
              />
            ))}
          </SmallImgDiv>
        </SmallImgDiv_scroll>
      </ScreenImgDiv>
    </>
  );
}

export default Readmore_photo;
