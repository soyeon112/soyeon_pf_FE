import React, { useEffect } from "react";
import Intro from "../Component/Intro";
import styled from "styled-components";

// 메인 화면 입니다. (인트로 출력 페이지)
const Wrap = styled.div`
  width: 100vw;
  height: 80vh; //이전 값 90vh
  /* margin: 30px auto; */
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
function Main(props) {
  return (
    <Wrap>
      <Intro />
    </Wrap>
  );
}

export default Main;
