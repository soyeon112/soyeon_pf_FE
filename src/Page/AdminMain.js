import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import AdminContents from "../Component/AdminContents";
import Logout from "../Component/Logout";
import { AiOutlinePlus } from "react-icons/ai";

// 어드민 페이지 입니다.
const Wrap = styled.div`
  width: 990px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  /* background-color: lavender; */
  /* gap: 30px; */
  @media (max-width: 1280px) {
    width: 90%;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    width: 90%;
  }

  .addBtn {
    margin-top: 50px;
    font-size: 50px;
    color: #d2d2d2;
    cursor: pointer;
    &:hover {
      color: #e64f92;
    }
  }
`;

const ContentsWrap = styled.div`
  width: 100%;
  /* background-color: pink; */
  /* height: auto; */
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ContentsInner = styled.div`
  width: 85%;
  /* height: 100vh; */
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: start;

  @media (max-width: 1280px) {
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 500px) {
  }
`;

//관리자페이지 - 메인 화면
function AdminMain(props) {
  /*
  useEffect(() => {
    //세션 유무에 따른 페이지 이동 
    const fecthLoginSession = async () => {
      try {
        const res = await axios.get(`/session`, { withCredentials: true });
        console.log("login session res : ", res);
        if (!res.data["userId"]) {
          //세션이 없다면 로그인 페이지로 이동
          document.location.href = "/admin/login";
        }
      } catch (err) {
        console.log("admin session err : ", err);
      }
    };
    fecthLoginSession();
  }, []);
*/

  const [project, setProject] = useState([]);

  useEffect(() => {
    //세션 유무에 따른 페이지 이동
    // const fecthLoginSession = async () => {
    //   try {
    //     const res = await axios.get(`/session`, { withCredentials: true });
    //     console.log("login session res : ", res);
    //     if (!res.data["userId"]) {
    //       //세션이 없다면 로그인 페이지로 이동
    //       document.location.href = "/admin/login";
    //     }
    //   } catch (err) {
    //     console.log("admin session err : ", err);
    //   }
    // };
    // fecthLoginSession();

    //프로젝트 목록 가져오기
    const fecthAllProject = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API}/projects`);
        setProject(res.data);
        console.log("project 1", project);
      } catch (err) {
        console.log(err);
      }
    };
    fecthAllProject();
  }, []);

  return (
    <Wrap>
      <ContentsWrap>
        <ContentsInner>
          {/* 프로젝트 리스트업 */}
          {project &&
            project.map((item) => (
              <AdminContents
                title={item.title}
                id={item.id}
                thumb={item.thumb}
              />
            ))}
        </ContentsInner>
      </ContentsWrap>
      <Link to="/admin/add">
        <AiOutlinePlus className="addBtn" />
      </Link>
    </Wrap>
  );
}
export default AdminMain;
