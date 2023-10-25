import React from "react";
import styled from "styled-components";
import iconHtml from "../static/images/icon_html.png";
import iconCss from "../static/images/icon_css.png";
import iconJs from "../static/images/icon_javascript.png";
import iconPs from "../static/images/icon_photoshop.png";
import iconReact from "../static/images/icon_react.png";
import iconNode from "../static/images/icon_nodejs.png";
import iconBlank from "../static/images/icon_blank.png";

//프로필 페이지 > 기술 스택 컴포넌트 입니다.

const Div = styled.div`
  width: 80%;
  margin: 50px auto 0 auto;
  font-family: "NanumEB";
  font-size: 16px;
  padding: 15px;

  /* @media (max-width: 1280px) {
    width: 60%;
  } */

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 500px) {
    width: 80%;
  }
`;

const Stacks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const StackItem = styled.div`
  width: 124px;
  margin: 15px auto 0;
  font-family: "NanumR";
  font-size: 13px;
  text-align: center;
`;
const ImgHtml = styled.img.attrs({
  src: `${iconHtml}`,
})`
  width: 120px;
  margin-bottom: 5px;
  &:hover {
    cursor: pointer;
  }
`;
const ImgCss = styled.img.attrs({
  src: `${iconCss}`,
})`
  width: 120px;
  margin-bottom: 5px;
  &:hover {
    cursor: pointer;
  }
`;
const ImgJs = styled.img.attrs({
  src: `${iconJs}`,
})`
  width: 120px;
  margin-bottom: 5px;
  &:hover {
    cursor: pointer;
  }
`;
const ImgPs = styled.img.attrs({
  src: `${iconPs}`,
})`
  width: 120px;
  margin-bottom: 5px;
  &:hover {
    cursor: pointer;
  }
`;
const ImgReact = styled.img.attrs({
  src: `${iconReact}`,
})`
  width: 120px;
  margin-bottom: 5px;
  &:hover {
    cursor: pointer;
  }
`;
const ImgNode = styled.img.attrs({
  src: `${iconNode}`,
})`
  width: 120px;
  margin-bottom: 5px;
  &:hover {
    cursor: pointer;
  }
`;

const ImgBlank = styled.img.attrs({
  src: `${iconBlank}`,
})`
  width: 120px;
  margin-bottom: 5px;
  &:hover {
    cursor: pointer;
  }
`;

function Stack() {
  return (
    <Div>
      <span>🔨 기술 스택</span>
      <Stacks>
        <StackItem>
          <ImgHtml />
          <span>HTML</span>
        </StackItem>
        <StackItem>
          <ImgCss />
          <span>CSS</span>
        </StackItem>
        <StackItem>
          <ImgJs />
          <span>JavaScript</span>
        </StackItem>
        <StackItem>
          <ImgReact />
          <span>React</span>
        </StackItem>
        <StackItem>
          <ImgNode />
          <span>Node.js</span>
        </StackItem>
        <StackItem>
          <ImgPs />
          <span>Photoshop</span>
        </StackItem>
        {/* <StackItem>
          <ImgBlank />
          <span> </span>
        </StackItem>
        <StackItem>
          <ImgBlank />
          <span> </span>
        </StackItem> */}
      </Stacks>
    </Div>
  );
}
export default Stack;
