import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Readmore";

// 프로젝트 페이지 > 프로젝트 목록 중 한개의 컴포넌트 입니다.

const Div = styled.div`
  display: flex;
  width: 100%;
  height: 330px;
  margin: 30px auto;
  box-sizing: border-box;
  padding: 10px 0 10px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media (max-width: 820px) {
    padding: 0px;
  }
  @media (max-width: 768px) {
    width: 80%;
    height: auto;
    flex-direction: column;
  }
`;

const ThumbDiv = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
  }

  @media (max-width: 500px) {
  }
`;

const Thumb = styled.img`
  height: 100%;
  object-fit: cover;

  @media (max-width: 1000px) {
    height: 80%;
  }
  @media (max-width: 820px) {
    width: 100%;
    padding-left: 0px;
  }
  @media (max-width: 500px) {
    width: 100%;
    padding: 0;
  }
`;

const TextDiv = styled.div`
  position: relative;
  width: 60%;
  height: 100%; //썸네일 세로 길이가 300임
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 40px 0 0 0;
  box-sizing: border-box;
  /* background-color: lightsalmon; */
  @media (max-width: 1280px) {
  }
  @media (max-width: 820px) {
    width: 60%;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 250px;
    padding: 20px 0 0 10px;
  }
  @media (max-width: 500px) {
  }
`;
const Title = styled.p`
  font-family: "NanumEB";
  font-size: 20px;
  margin-bottom: 20px;
  @media (max-width: 1280px) {
    font-size: 0.9em;
  }
  @media (max-width: 820px) {
    font-size: 0.8em;
  }
  @media (max-width: 500px) {
    font-size: 0.8em;
  }
`;
const SubText = styled.p`
  font-family: "NanumB";
  font-size: 14px;
  margin-bottom: 13px;
  @media (max-width: 1280px) {
    font-size: 0.8em;
  }
  @media (max-width: 820px) {
    font-size: 0.7em;
  }
  @media (max-width: 500px) {
    font-size: 0.7em;
  }
`;
const StackBottomDiv = styled.div`
  font-family: "NanumB";
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
`;
const StackDiv = styled.div`
  /* height: 20px; */
`;

const Stacks = styled.span`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 7px;
  margin-right: 3px;
  padding: 6px;
  box-sizing: border-box;
  font-size: 13px;
  color: #757575;
  line-height: 2.5;

  @media (max-width: 1280px) {
    font-size: 0.7em;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 500px) {
  }
`;

const BtnDiv = styled.div`
  flex-direction: row;
  margin-top: 10px;

  a {
    text-decoration: none;
  }
`;

const Btns = styled(Stacks)`
  color: #e64f92;
  &:hover {
    cursor: pointer;
    background-color: #ffeff5;
    border: 1px solid #e64f92;
  }
`;

function Project(props) {
  const [isOpen, setIsOpen] = useState(false);
  /* 모달 오픈시 배경 스크롤 막음*/
  {
    isOpen === true
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }

  return (
    <>
      <Div>
        <ThumbDiv>
          <Thumb src={`/api/image/${props.thumb}`} alt="project thumbnail" />
        </ThumbDiv>
        <TextDiv>
          <Title>{props.title}</Title>
          <SubText>&#45; &#32;{props.sub}</SubText>
          <SubText>&#45; &#32;{props.cate}</SubText>
          <SubText>&#45; &#32;{props.date}</SubText>
          <StackBottomDiv>
            <StackDiv>
              <Stacks>{props.stack}</Stacks>
            </StackDiv>
            <BtnDiv>
              <a target="_blank" href={props.view}>
                <Btns>View 👀</Btns>
              </a>
              <Btns onClick={() => setIsOpen(true)}>Read More 💻</Btns>
              {props.git ? (
                <a target="_blank" href={props.git}>
                  <Btns>Git 💾</Btns>
                </a>
              ) : (
                console.log("git없음")
              )}
            </BtnDiv>
          </StackBottomDiv>
          <Modal
            open={isOpen}
            onClose={() => setIsOpen(false)}
            id={props.id}
          ></Modal>
        </TextDiv>
      </Div>
    </>
  );
}

export default Project;
