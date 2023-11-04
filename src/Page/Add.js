import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

// 어드민 > 프로젝트 추가 페이지 입니다.
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
  /* 
  input,
  textarea {
    width: 200px;
    height: 30px;
    border: #ececec 1px solid;
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;
    color: #e64f92;
    font-family: "NanumR";
  } */
`;

const PageName = styled.span`
  background-color: #ececec;
  padding: 7px;
  border-radius: 7px;
  font-family: "NanumB";
  font-size: 13px;
  margin: 20px;
  color: #e64f92;
`;
const InputSt = styled.input`
  width: 200px;
  height: 30px;
  border: #ececec 1px solid;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  color: #e64f92;
  font-family: "NanumR";
`;
const TextArea = styled.textarea`
  height: 150px;
  width: 200px;
  border: #ececec 1px solid;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  color: #e64f92;
  font-family: "NanumR";
  line-height: 17px;
`;

const Inner = styled.div`
  width: 100%;
  /* height: 500px; */
  margin: 30px auto;
  /* text-align: center; */
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
const AddBtn = styled.button`
  width: 80px;
  height: 40px;

  background-color: #fff;
  color: #e64f92;
  border: 1px solid #e64f92;
  border-radius: 20px;
  &:hover {
    cursor: pointer;
    background-color: #e64f92;
    color: #fff;
    font-weight: border;
  }
`;

const BtnDiv = styled.div`
  width: 40%;
`;

//관리자페이지 - 프로젝트 추가 화면
function Add() {
  const [project, setProject] = useState({
    title: null, //플젝명
    date: null, //제작일자
    introduction: null, //소개글
    category: null, //개인 or 팀
    skill: null, //사용스택
    view: null, //플젝 홈페이지 링크
    git: null, //깃허브 저장소링크
    readmore: null, // 플젝 상세 소개 페이지
    subTitle: null, //플젝 한줄소개
  });

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
    console.log("e.target.values > ", e.target.value);
  };

  //완료 버튼 클릭시 실행되는 함수
  const handleClick = async (e) => {
    e.preventDefault();

    console.log(project);

    for (let key in project) {
      if (project[key] == null) {
        //값이 없다면
        alert("입력되지 않은 칸이 있습니다. 모두 입력해주세요!");
        break;
      } else {
        console.log(project[key]);
        try {
          let addConfirm = window.confirm(
            "확인을 누르면 프로젝트가 DB에 추가됩니다. \n프로젝트를 추가하시겠습니까?"
          );
          //알림창의 확인버튼 클릭시 조건문 작동
          if (addConfirm) {
            //state 돌면서 데이터들 formdata에 추가
            for (let data in project) {
              console.log("aa", project[data]);
              formData.append(data, project[data]);
            }
            const res = await axios.post(`/api/add/project`, formData, {
              headers: {
                "Content-Type": "multipart/form-data",
                withCredentials: true,
              },
            });
            console.log("test add >>> ", res);
            alert("등록되었습니다.");
            //프로젝트 등록이 완료되면 contetns로 화면이동
            document.location.href = "/admin"; //projects
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
            <PageName> &lt; ADD PAGE &gt; </PageName>
          </Item>
          <Item>
            <Title>프로젝트 명</Title>
            <InputSt
              type="text"
              placeholder="ex) 공공기관 홈페이지"
              onChange={handleChange}
              name="title"
            />
          </Item>
          <Item>
            <Title>제작일</Title>
            <InputSt
              type="text"
              placeholder="ex) 2023.02 - 2023.05"
              onChange={handleChange}
              name="date"
            />
          </Item>
          <Item>
            <Title>프로젝트 한줄 소개</Title>
            <InputSt
              type="text"
              placeholder="홈페이지 리디자인"
              onChange={handleChange}
              name="subTitle"
            />
          </Item>
          <Item>
            <Title>프로젝트 소개</Title>
            <InputSt
              type="text"
              placeholder="프로젝트 소개"
              onChange={handleChange}
              name="introduction"
            />
          </Item>
          <Item>
            <Title>개인 or 팀 프로젝트</Title>
            <InputSt
              type="text"
              placeholder="ex) 개인프로젝트"
              onChange={handleChange}
              name="category"
            />
          </Item>
          <Item>
            <Title>사용 스택</Title>
            <InputSt
              type="text"
              placeholder="ex) react / node / sql"
              onChange={handleChange}
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
              name="readmore"
            ></TextArea>
          </Item>
          <Item>
            <Title>프로젝트 페이지 URL</Title>
            <InputSt
              type="text"
              placeholder="URL"
              onChange={handleChange}
              name="view"
            />
          </Item>
          <Item>
            <Title>깃허브 저장소 URL</Title>
            <InputSt
              type="text"
              placeholder="URL"
              onChange={handleChange}
              name="git"
            />
          </Item>
          <Item>
            <Title>프로젝트 썸네일</Title>
            <InputSt
              type="file"
              placeholder="썸네일"
              onChange={handleChangeImg}
              name="thumb"
              accept="image/jgp, image/png, image/jpeg, image/gif"
            />
          </Item>
          <Item>
            <Title>상세 이미지1</Title>
            <InputSt
              type="file"
              placeholder="img1"
              onChange={handleChangeImg}
              name="img1"
              accept="image/jgp, image/png, image/jpeg, image/gif"
            />
          </Item>
          <Item>
            <Title>상세 이미지2</Title>
            <InputSt
              type="file"
              placeholder="img2"
              onChange={handleChangeImg}
              name="img2"
              accept="image/jgp, image/png, image/jpeg, image/gif"
            />
          </Item>
          <Item>
            <Title>상세 이미지3</Title>
            <InputSt
              type="file"
              placeholder="img3"
              onChange={handleChangeImg}
              name="img3"
              accept="image/jgp, image/png, image/jpeg, image/gif"
            />
          </Item>
          <Item>
            <Title>상세 이미지4</Title>
            <InputSt
              type="file"
              placeholder="img4"
              onChange={handleChangeImg}
              name="img4"
              accept="image/jgp, image/png, image/jpeg, image/gif"
            />
          </Item>
          <Item>
            <Title>상세 이미지5</Title>
            <InputSt
              type="file"
              placeholder="img5"
              onChange={handleChangeImg}
              name="img5"
              accept="image/jgp, image/png, image/jpeg, image/gif"
            />
          </Item>
        </Inner>
        <AddBtn onClick={handleClick}>Add</AddBtn>
      </Wrap>
    </>
  );
}

export default Add;
