import React from "react";
import { MessageWrap, Message, MessageInner, InnerWrap } from "./styled";

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
    <InnerWrap>
      {createLMessage("left", "새로운것에 도전하는것을 두려워하지 않아요!🤩🙌🏻")}
      {createLMessage(
        "left",
        "좀 더 효율적이고 클린한 코드를 만들기 위해 고민해요!🧐"
      )}
      {createLMessage(
        "right",
        "언제나 무슨일이든 최선을 다해 잘 해내려 노력해요!🌟"
      )}
      {createLMessage(
        "right",
        "섬세하고 사교성이 좋아 원활하게 소통할 수 있어요!🤗"
      )}
      {createLMessage("right", "MBTI ->> ISFJ💗💘")}
      {createLMessage("left", "개발하는것이 재미있어요! 좋아해요!😜😏")}
    </InnerWrap>
  );
}

export default IntroMessage;
