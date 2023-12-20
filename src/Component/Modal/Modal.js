import React, { useState } from "react";
import ReactDOM from "react-dom";
import icon_close_blue from "../static/images/icon_close_blue.png";
import {
  ModalPopup,
  CodeDiv,
  Header,
  CloseBtn,
  CircleDiv,
  Circle,
  Nav,
  Tab,
  TabItem,
  CodeTextDiv,
  CodeText,
} from "./styled";
// 프로젝트 페이지 > readmore버튼 클릭시 나타나는 모달 컴포넌트 입니다.

function Modal({ open, children, onClose, stack }) {
  const [toggle1, setToggle1] = useState(false);
  const toggleTab = () => {
    setToggle1(!toggle1);
    console.log("toggle : " + toggle1);
    console.log("click");
  };
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <ModalPopup>
        <CodeDiv>
          <Header>
            <CircleDiv>
              <Circle style={{ backgroundColor: `#fd6058` }}></Circle>
              <Circle style={{ backgroundColor: `#fcbc30` }}></Circle>
              <Circle style={{ backgroundColor: `#dedcdd` }}></Circle>
            </CircleDiv>
            <CloseBtn src={icon_close_blue} onClick={onClose} />
          </Header>
          <Nav>
            <Tab>
              {stack.map((it, index) => (
                <TabItem
                  key={index}
                  // onClick={() => toggleTab(Number(index) + 1)}
                  onClick={() => toggleTab()}
                >
                  {it}
                </TabItem>
              ))}
            </Tab>
          </Nav>
          <CodeTextDiv>
            <CodeText> {children}</CodeText>
          </CodeTextDiv>
        </CodeDiv>
      </ModalPopup>
    </>,
    document.getElementById("portal")
  );
}

export default Modal;
