import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import SimpleSlider from "../../Component/Readmore/SimpleSlider";
import {
  DetailWrap,
  DetailHeader,
  HeaderInner,
  ImgBox,
  Img,
  Title,
  TextBox,
  DetailMiddle,
  MiddleInner,
  Date,
  DetailBottom,
  BottomInner,
  BottomTitle,
  IntroText,
  ReadmoreText,
  StackBox,
  Stack,
  PhotoBox,
} from "./styled";
//프로젝트 클릭시 보여지는 프로젝트 세부 설명 페이지

function Detail({ ...props }) {
  const location = useLocation();
  const projectId = location.pathname.split("/")[2];
  const [project, setProject] = useState({});
  const [sliderImgs, setSliderImgs] = useState([]);

  const imgArr = new Array();
  useEffect(() => {
    const fecthProjectTexts = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API}/getTexts/` + projectId,
          { withCredentials: true }
        );
        setProject(res.data[0]);
        imgArr.push("1");
        imgArr.push("2");
        imgArr.push("3");
      } catch (err) {
        console.log("detail page error > ", err);
      }
    };
    fecthProjectTexts();
  }, [projectId]);

  const stack = project.skill ? project.skill.split(",") : "";
  // 스크린샷 이미지 추출

  return (
    <DetailWrap>
      <DetailHeader>
        <HeaderInner>
          <ImgBox>
            <Img src={`${process.env.REACT_APP_API}/image/${project.img1}`} />
          </ImgBox>
          <TextBox>
            <Title>{project.title}</Title>
            <Date>{project.date}</Date>
          </TextBox>
        </HeaderInner>
      </DetailHeader>
      <DetailMiddle>
        <MiddleInner>
          <StackBox>{stack && stack.map((it) => <Stack>{it}</Stack>)}</StackBox>
          <IntroText>{project.introduction}</IntroText>
          <ReadmoreText>{project.readmore}</ReadmoreText>
        </MiddleInner>
      </DetailMiddle>
      <DetailBottom>
        <BottomInner>
          <SimpleSlider sliderImgArr={imgArr} />
        </BottomInner>
      </DetailBottom>
    </DetailWrap>
  );
}

export default Detail;
