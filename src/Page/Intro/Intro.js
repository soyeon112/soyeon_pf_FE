import React from "react";
import { useSelector } from "react-redux";
import Message from "../../Component/Intro/IntroMessage";
import AboutMe from "../../Component/Intro/IntroAboutMe";
import Stack from "../../Component/Intro/IntroStack";
import { IntroWrap, IntroRightWrap } from "./styled";

function Intro() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return (
    <IntroWrap>
      <Message />
      <IntroRightWrap>
        <AboutMe isAuth={isAuth} />
        <Stack />
      </IntroRightWrap>
    </IntroWrap>
  );
}

export default Intro;
