import React from "react";
import styled from "styled-components";
import "../static/fonts/font.css";
import Introduce from "../Component/Introduce";
import Stack from "../Component/Stack";
import AboutMe from "../Component/AboutMe";

// 프로필 페이지 입니다.
const Wrap = styled.div`
  width: 990px;
  margin: 50px auto;
  @media (max-width: 1280px) {
    width: 90%;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
`;

function Profile() {
  return (
    <Wrap>
      <Introduce />
      <Stack />
      <AboutMe />
    </Wrap>
  );
}

export default Profile;
