import { React, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import icon_close_blue from "../static/images/icon_close_blue.png";
import Readmore_photo from "./Readmore_photo";
import axios from "axios";

// 프로젝트 > readmore 모달창 컴포넌트 입니다.

/*modal bg*/
const ModalPopup = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  /* overflow-y: auto; */
`;

/*modal popup*/
const CodeDiv = styled.div`
  width: 60%;
  height: 95vh;
  position: absolute;
  top: 2.5%;
  left: 20%;
  font-size: 16px;
  background-color: #f4f2f3;
  border-radius: 10px;
  overflow-y: auto;

  @media (max-width: 820px) {
    width: 90%;
    left: 5%;
  }
  @media (max-width: 500px) {
  }
`;

/*헤더영역*/
const Header = styled.header`
  background-color: #faf7f8;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 0 4px 4px -4px rgba(0, 0, 0, 0.2);
  height: 40px;
  display: flex;
  flex-direction: row;
`;
/*헤더 - 닫기 버튼*/
const CloseBtn = styled.img`
  position: absolute;
  right: 0;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 28px;
  width: 28px;
  height: 28px;
  margin: 5px 10px 5px 5px;
  &:hover {
    cursor: pointer;
    background-color: #e5e3e4;
  }
`;
/*헤더 - 왼쪽 동그라미 세개*/
const CircleDiv = styled.div`
  width: 55px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 15px 0 15px;
`;
const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 10px;
`;

/* 프로젝트 정보 */
const PjinfoDiv = styled.div`
  /* background-color: lavender; */
  width: 80%;
  height: 90px;
  margin: 30px auto 0 auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  /* background-color: lavender; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (max-width: 820px) {
    /* margin: 10px auto 0 auto; */
    width: 90%;
  }
  @media (max-width: 500px) {
    font-size: 0.6rem;
    margin: 15px auto 0 auto;
  }
`;

//글꼴 > 굵기에 따라 분류
const TextEB = styled.p`
  font-family: "NanumEB";
  font-size: 1.1rem;
  @media (max-width: 820px) {
    font-size: 0.95rem;
  }
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;
const TextB = styled.p`
  font-family: "NanumB";
  font-size: 0.9rem;
  @media (max-width: 820px) {
    font-size: 0.8rem;
  }
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`;

const TextR = styled.p`
  font-family: "NanumR";
  font-size: 0.85rem;
  /* margin: 10px 3px 10px 0; */
  white-space: pre-wrap;
  @media (max-width: 820px) {
    font-size: 0.8rem;
  }
  @media (max-width: 500px) {
    font-size: 0.7rem;
  }
`;
const FeedbackDiv = styled.div`
  white-space: pre; //textarea 텍스트 개행 되도록
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  padding: 10px 0 10px 0;
  margin: 0 auto 40px auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  line-height: 2;

  @media (max-width: 820px) {
    width: 90%;
  }
`;

function Readmore({ ...props }) {
  const projectId = props.id;

  const [projectData, setProjectData] = useState();

  useEffect(() => {
    const fecthProjectText = async () => {
      console.log("readmore page open");
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API}/getTexts/` + projectId
        );
        setProjectData(res.data);
      } catch (err) {
        console.log("readmore err >", err);
      }
    };
    fecthProjectText();
  }, [projectId]);

  //모달창 on/off
  if (!props.open) {
    return null;
  }
  // img1 - img5 배열로 만들기
  const imgArr = new Array();
  imgArr.push(projectData[0].img1);
  imgArr.push(projectData[0].img2);
  imgArr.push(projectData[0].img3);
  imgArr.push(projectData[0].img4);
  imgArr.push(projectData[0].img5);

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
            <CloseBtn src={icon_close_blue} onClick={props.onClose} />
          </Header>
          <div>
            <Readmore_photo imgArr={imgArr} />
            <PjinfoDiv>
              <TextEB>- {projectData[0].title}</TextEB>
              <TextB>- {projectData[0].skill}</TextB>
              <TextB>- {projectData[0].date}</TextB>
            </PjinfoDiv>
            <FeedbackDiv>
              <TextR>{projectData[0].readmore}</TextR>
            </FeedbackDiv>
          </div>
        </CodeDiv>
      </ModalPopup>
    </>,
    document.getElementById("portal")
  );
}

export default Readmore;
