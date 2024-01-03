import React, { useState } from "react";
import Modal from "../Readmore/Readmore";
import {
  ProjectCompoWrap,
  ThumbDiv,
  Thumb,
  TextWrap,
  Title,
  SubText,
  StackBottomDiv,
  StackDiv,
  Stacks,
  BtnDiv,
  Btns,
} from "./styled";

// 프로젝트 페이지 > 프로젝트 목록 중 한개의 컴포넌트 입니다.

function Project(props) {
  const [isOpen, setIsOpen] = useState(false);
  /* 모달 오픈시 배경 스크롤 막음*/
  {
    isOpen === true
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }

  return (
    <ProjectCompoWrap>
      <ThumbDiv>
        <Thumb
          src={`${process.env.REACT_APP_API}/image/${props.thumb}`}
          alt="project thumbnail"
        />
      </ThumbDiv>
      <TextWrap>
        <div>
          <Title>{props.title}</Title>
          <SubText>&#45; &#32;{props.sub}</SubText>
          <SubText>&#45; &#32;{props.cate}</SubText>
          <SubText>&#45; &#32;{props.date}</SubText>
        </div>
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
      </TextWrap>
    </ProjectCompoWrap>
  );
}

export default Project;
