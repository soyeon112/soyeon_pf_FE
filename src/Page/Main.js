import React from "react";
// import Intro from "../Component/Intro/Intro";
import styled from "styled-components/macro";
import Intro from "./Intro/Intro";
// 메인 화면 입니다. (인트로 출력 페이지)
const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
function Main() {
  return (
    <Wrap>
      <Intro />
    </Wrap>
  );
}

export default Main;
