import React from "react";
import {
  IntroWrap,
  MessageWrap,
  Message,
  MessageInner,
  InnerLeft,
} from "./styled";
function IntroMessage() {
  const leftMessage = `#e9e9eb`;
  const rightMessage = `#057eff`;

  const createLMessage = (position, text) => {
    const result = [];
    for (let i = 0; i < 10; i++) {
      result.push(
        <MessageInner className="message">
          {position == "left" ? (
            <Message left={0} bgColor={leftMessage}>
              {text}
            </Message>
          ) : (
            <Message right={0} fontColor={`#fff`} bgColor={rightMessage}>
              {text}
            </Message>
          )}
        </MessageInner>
      );
      return result;
    }
  };

  const moveToScroll = () => {
    console.log("스크롤위치 Y", window.scrollY);
    window.scroll({
      bottom: 0,
      behavior: "smooth",
    });
  };

  return (
    <IntroWrap>
      <MessageWrap>
        <InnerLeft>
          {createLMessage(
            "left",
            "포트폴리오 페이지에 오신 모두를 환영합니다!🤩🙌🏻"
          )}
          {createLMessage(
            "left",
            "저는 이 페이지의 제작자 FrontEnd 김소연입니다.😇"
          )}
          {createLMessage(
            "right",
            "언제나 무슨일이든 최선을 다해 잘 해내려 노력해요!🌟"
          )}
          {createLMessage(
            "right",
            "섬세하고 사교성이 좋아 원활하게 소통할 수 있어요!🤗"
          )}
          {createLMessage(
            "right",
            "커피를 좋아하고 하트 라떼 아트를 할 줄 알아요!💗💘"
          )}
          {createLMessage("left", "thank you! 🥰🙏🏻")}
        </InnerLeft>
      </MessageWrap>
    </IntroWrap>
  );
}

export default IntroMessage;
