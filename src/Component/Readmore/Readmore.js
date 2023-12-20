import { React, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReadmorePhoto from "./ReadmorePhoto";
import icon_close_blue from "../../static/images/icon_close_blue.png";
import axios from "axios";
import {
  ModalPopup,
  CodeDiv,
  Header,
  CloseBtn,
  CircleDiv,
  Circle,
  PjinfoDiv,
  TextEB,
  TextB,
  TextR,
  FeedbackDiv,
} from "./styled";
// 프로젝트 > readmore 모달창 컴포넌트 입니다.

function Readmore({ ...props }) {
  const projectId = props.id;

  const [projectData, setProjectData] = useState();

  useEffect(() => {
    const fecthProjectText = async () => {
      console.log("readmore page open");
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API}/getTexts/` + projectId,
          { withCredentials: true }
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
          <ReadmorePhoto imgArr={imgArr} />
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
    </ModalPopup>,
    document.getElementById("portal")
  );
}

export default Readmore;
