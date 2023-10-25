import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  margin-top: 45px;
  background-color: #f5f5f5;
  height: 40px;
  margin-bottom: 0px;
  font-size: 0.7rem;
  font-family: "NanumR";
  color: #979797;
  text-align: center;
  line-height: 45px;
  padding: 15px;
  clear: both;
`;

function Footer() {
  return (
    <>
      <FooterDiv>Copyright 2022. soyeon All rights reserved.</FooterDiv>
    </>
  );
}

export default Footer;
