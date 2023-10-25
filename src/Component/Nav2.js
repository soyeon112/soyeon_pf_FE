import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

//헤더 > 네비게이션 입니다. (프로필, 프로젝트, 어드민)

const Nav_Wrap = styled.div`
  width: 50%;
  height: 50px;
  margin: 15px auto 0;

  /* background-color: lemonchiffon; */
`;

const Nav_Inner = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: lavender; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Nav_Item = styled.button`
  cursor: pointer;
  border: none;
  background-color: #fff;
  font-family: "Rosehot";
  font-size: 0.9rem;
  &:hover {
    color: #e64f92;
  }
`;
function Nav2(props) {
  // const fecthLoginSession = async (e) => {
  //   console.log("nav2 > admin click");
  //   e.preventDefault();
  //   try {
  //     const res = await axios.get(`/session`, { withCredentials: true });
  //     console.log("login session res : ", res);
  //     if (!res.data["userId"]) {
  //       //세션이 없다면 로그인 페이지로 이동
  //       document.location.href = "/admin/login";
  //     } else {
  //       //세션이 있다면 관리자 메인으로 이동
  //       document.location.href = "/admin";
  //     }
  //   } catch (err) {
  //     console.log("admin session err : ", err);
  //   }
  // };

  const isSession = () => {
    console.log("헤더에서 props로 받은 session state값 확인 > ", props.session);
    if (props.session) {
      //세션이 있다면 관리자 메인으로 이동
      document.location.href = "/admin";
    } else {
      //세션이 없다면 로그인 페이지로 이동
      document.location.href = "/admin/login";
    }
  };
  return (
    <Nav_Wrap>
      <Nav_Inner>
        <Link to="/profile">
          <Nav_Item>PROFILE</Nav_Item>
        </Link>
        <Link to="/projects">
          <Nav_Item>PROJECTS</Nav_Item>
        </Link>
        <Link>
          <Nav_Item onClick={isSession}>ADMIN</Nav_Item>
        </Link>
      </Nav_Inner>
    </Nav_Wrap>
  );
}

export default Nav2;
