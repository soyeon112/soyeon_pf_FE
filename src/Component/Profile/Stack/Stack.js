import React from "react";
import { StackWrap, StackTitle, StackInnerWrap } from "./styled";
import { FaNodeJs, FaGithub } from "react-icons/fa";

import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiMysql,
  SiFigma,
  SiAdobephotoshop,
} from "react-icons/si";
export default function Stack2() {
  return (
    <StackWrap>
      <StackTitle>🔧 기술 스택</StackTitle>
      <StackInnerWrap>
        <div>
          <SiReact />
        </div>
        <div>
          <SiHtml5 />
        </div>
        <div>
          <SiCss3 />
        </div>
        <div>
          <SiJavascript />
        </div>
        <div>
          <SiMysql />
        </div>
        <div>
          <FaNodeJs />
        </div>
        <div>
          <FaGithub />
        </div>
        <div>
          <SiFigma />
        </div>
        <div>
          <SiAdobephotoshop />
        </div>
      </StackInnerWrap>
    </StackWrap>
  );
}
