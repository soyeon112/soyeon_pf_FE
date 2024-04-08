import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import axios from "axios";
import { Route } from "react-router-dom";

//헤더 > 네비게이션 입니다. (프로필, 프로젝트, 어드민)

const Nav_Wrap = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translate(-50%, -50%);
  /* background-color: lavender; */
`;

const Nav_Inner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 200px;
  @media (max-width: 1280px) {
    gap: 100px;
  }
  @media (max-width: 768px) {
    gap: 80px;
  }
  @media (max-width: 500px) {
    gap: 30px;
  }
`;

const Nav_Item = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-family: "Rosehot";
  /* font-family: "nanumR"; */
  font-size: 1rem;
  color: #000;
  &:hover {
    color: #e64f92;
  }
  @media (max-width: 500px) {
    font-size: 0.9rem;
    font-weight: bold;
  }
`;

function Nav2(props) {
  const isLogin = () => {
    if (props.isLogin) {
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
        <Link to="/">
          <Nav_Item>PROJECTS</Nav_Item>
        </Link>
        <Link>
          <Nav_Item onClick={isLogin}>ADMIN</Nav_Item>
        </Link>
      </Nav_Inner>
    </Nav_Wrap>
  );
}

export default Nav2;
