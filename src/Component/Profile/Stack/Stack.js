import React from "react";
import {
  StackWrap,
  Stacks,
  StackItem,
  ImgHtml,
  ImgCss,
  ImgJs,
  ImgPs,
  ImgReact,
  ImgNode,
  ImgBlank,
} from "./styled";
//프로필 페이지 > 기술 스택 컴포넌트 입니다.
function Stack() {
  return (
    <StackWrap>
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
    </StackWrap>
  );
}
export default Stack;
