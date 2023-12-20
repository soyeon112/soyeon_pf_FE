import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AdminContents from "../../Component/AdminContents/AdminContents";
import { AiOutlinePlus } from "react-icons/ai";
import { AdminWrap, ContentsWrap, ContentsInner } from "./styled";
// 어드민 페이지 입니다.
//관리자페이지 - 메인 화면
function AdminMain(props) {
  const [project, setProject] = useState([]);

  useEffect(() => {
    // 세션 유무에 따른 페이지 이동
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
        const res = await axios.get(`${process.env.REACT_APP_API}/projects`, {
          withCredentials: true,
        });
        setProject(res.data);
        console.log("project 1", project);
      } catch (err) {
        console.log(err);
      }
    };
    fecthAllProject();
  }, []);

  return (
    <AdminWrap>
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
    </AdminWrap>
  );
}
export default AdminMain;
