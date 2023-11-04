import { React, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

// 어드민 > 프로젝트 수정 페이지 입니다.
const Wrap = styled.div`
  width: 990px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1280px) {
    width: 90%;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
`;

const PageName = styled.span`
  background-color: #ececec;
  padding: 7px;
  border-radius: 7px;
  font-family: "NanumB";
  font-size: 13px;
  margin: 20px;
  color: blue;
`;

const InputSt = styled.input`
  width: 200px;
  height: 30px;
  border: #ececec 1px solid;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  color: blue;
  font-family: "NanumR";
`;
const TextArea = styled.textarea`
  height: 150px;
  width: 200px;
  border: #ececec 1px solid;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  color: blue;
  font-family: "NanumR";
  line-height: 17px;
`;

const Inner = styled.div`
  width: 100%;
  /* height: 500px; */
  margin: 30px auto;
`;

const Item = styled.div`
  width: 100%;
  /* height: 50px; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  padding: 10px 0;
  box-sizing: border-box;
  border-bottom: 1px solid #ecebe3;
`;
const Title = styled.span`
  font-size: 0.9rem;
  display: inline-block;
  width: 150px;
  font-family: "NanumB";
`;
const UpdataBtn = styled.button`
  width: 80px;
  height: 40px;
  background-color: #fff;
  color: blue;
  border: 1px solid #738af3;
  border-radius: 20px;
  &:hover {
    cursor: pointer;
    background-color: #738af3;
    color: #fff;
    font-weight: border;
  }
`;

const BtnDiv = styled.div`
  width: 40%;
`;

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
          `${process.env.REACT_APP_API}/getTexts/` + projectId
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
              project
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
        <UpdataBtn onClick={handleClick}>Add</UpdataBtn>
      </Wrap>
    </>
  );
}

export default Update2;
