import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import {
  Wrap,
  PageName,
  InputSt,
  TextArea,
  Inner,
  Item,
  Title,
  UpdateBtn,
  BtnDiv,
} from "./styled";
//관리자페이지 - 프로젝트 추가 화면
function Update2({ ...props }) {
  //프로젝트 id 추출
  const location = useLocation();
  const projectId = location.pathname.split("/")[3];
  console.log("아이디", projectId);

  const [project, setProject] = useState({
    // title: null, //플젝명
    // date: null, //제작일자
    // introduction: null, //소개글
    // category: null, //개인 or 팀
    // skill: null, //사용스택
    // view: null, //플젝 홈페이지 링크
    // git: null, //깃허브 저장소링크
    // readmore: null, // 플젝 상세 소개 페이지
    // subTitle: null, //플젝 한줄소개
  });

  useEffect(() => {
    //id에 해당하는 프로젝트 텍스트 가져오기
    const fecthProjectText = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API}/getTexts/` + projectId,
          { withCredentials: true }
        );
        setProject(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    fecthProjectText();
  }, []);

  //이미지 전송을 위한 폼데이터 객체 생성
  const formData = new FormData();

  //input onChange - image
  const handleChangeImg = (e) => {
    e.preventDefault();
    formData.append(e.target.name, e.target.files[0]);
    console.log("form data", formData);
    console.log(formData.get(e.target.name));
  };

  //input onChange - text
  const handleChange = (e) => {
    setProject((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log("e.target.values > ", e.target.name, Boolean(e.target.value));
    console.log("ddd", project);
  };

  //완료 버튼 클릭시 실행되는 함수
  const handleClick = async (e) => {
    console.log("update2 완료 버튼 클릭 되었습니다.");
    e.preventDefault();
    console.log(project);

    for (let key in project) {
      console.log(key, project);

      if (!project[key]) {
        console.log(key, "값이 없음");
        alert("입력되지 않은 칸이 있습니다. 모두 입력해주세요!");
        break;
      } else {
        //빈칸없이 입력되었다면
        try {
          console.log("빈칸확인", project);
          let addConfirm = window.confirm(
            "확인을 누르면 프로젝트가 DB에서 수정됩니다. \n프로젝트 수정을 완료하시겠습니까?"
          );
          //알림창의 확인버튼 클릭시 조건문 작동
          if (addConfirm) {
            const res = await axios.put(
              `${process.env.REACT_APP_API}/update/` + projectId,
              project,
              { withCredentials: true }
            );
            alert("수정되었습니다.");
            //프로젝트 등록이 완료되면 contetns로 화면이동
            document.location.href = "/projects";
          }
        } catch (err) {
          console.log(err);
        }
        break;
      }
    }
  };

  return (
    <>
      <Wrap>
        <Inner>
          <Item>
            <PageName> &lt; EDIT PAGE &gt; </PageName>
          </Item>
          <Item>
            <Title>프로젝트 명</Title>
            <InputSt
              type="text"
              placeholder="ex) 공공기관 홈페이지"
              onChange={handleChange}
              defaultValue={project.title}
              name="title"
            />
          </Item>
          <Item>
            <Title>제작일</Title>
            <InputSt
              type="text"
              onChange={handleChange}
              placeholder="ex) 2023.02 - 2023.05"
              defaultValue={project.date}
              name="date"
            />
          </Item>
          <Item>
            <Title>프로젝트 한줄 소개</Title>
            <InputSt
              type="text"
              placeholder="홈페이지 리디자인"
              onChange={handleChange}
              defaultValue={project.subTitle}
              name="subTitle"
            />
          </Item>
          <Item>
            <Title>프로젝트 소개</Title>
            <InputSt
              type="text"
              placeholder="프로젝트 소개"
              onChange={handleChange}
              defaultValue={project.introduction}
              name="introduction"
            />
          </Item>
          <Item>
            <Title>개인 or 팀 프로젝트</Title>
            <InputSt
              type="text"
              placeholder="ex) 개인프로젝트"
              onChange={handleChange}
              defaultValue={project.category}
              name="category"
            />
          </Item>
          <Item>
            <Title>사용 스택</Title>
            <InputSt
              type="text"
              placeholder="ex) react / node / sql"
              onChange={handleChange}
              defaultValue={project.skill}
              name="skill"
            />
          </Item>
          <Item>
            <Title>readmore</Title>
            <TextArea
              placeholder="readmore"
              cols="1000"
              wrap="hard"
              onChange={handleChange}
              defaultValue={project.readmore}
              name="readmore"
            ></TextArea>
          </Item>
          <Item>
            <Title>프로젝트 페이지 URL</Title>
            <InputSt
              type="text"
              placeholder="URL"
              onChange={handleChange}
              defaultValue={project.view}
              name="view"
            />
          </Item>
          <Item>
            <Title>깃허브 저장소 URL</Title>
            <InputSt
              type="text"
              placeholder="URL"
              onChange={handleChange}
              defaultValue={project.git}
              name="git"
            />
          </Item>
        </Inner>
        <UpdateBtn onClick={handleClick}>Update</UpdateBtn>
      </Wrap>
    </>
  );
}

export default Update2;
