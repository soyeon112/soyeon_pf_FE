import React from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";
const ButtonDiv = styled.div`
  position: fixed;
  z-index: 100;
  bottom: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(4, 126, 254, 0.1);
  color: #047efe;
  text-align: center;
  line-height: 50px;
  cursor: pointer;

  @media (max-width: 820px) {
    width: 40px;
    height: 40px;
    font-size: 13px;
    line-height: 40px;
  }
`;
const topButtonClick = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
export default function TopButton() {
  return (
    <>
      <ButtonDiv onClick={topButtonClick}>
        <FaArrowUp />
      </ButtonDiv>
    </>
  );
}
