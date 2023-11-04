import axios from "axios";
import React from "react";
import styled from "styled-components";

// 헤더 > 로그아웃 버튼 컴포넌트 입니다.
// 어드민에 로그인 되어있을시에만 나타나며 해당 버튼 클릭시 로그아웃 됩니다.

const LogoutBtn = styled.button`
  position: absolute;
  right: 100px;
  top: 15px;
  width: 80px;
  height: 30px;
  font-family: "NanumB";
  font-size: 0.8rem;
  background-color: rgb(255, 255, 255);
  color: rgb(230, 79, 146);
  border: 1px solid rgb(236, 236, 236);
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    background-color: rgb(230, 79, 146);
    color: #fff;
  }

  @media (max-width: 1280px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 500px) {
    width: 65px;
    height: 30px;
    font-size: 0.6rem;
    top: 15px;
    right: 15px;
  }
`;

const handleClick_Logout = async (e) => {
  try {
    await axios.post(`${process.env.REACT_APP_API}/logout`, {
      withCredentials: true,
    });
    //로그아웃 되면 프로젝트 목록 페이지로 이동
    document.location.href = "/";
  } catch (err) {
    console.log("로그아웃 에러", err);
  }
};

function Logout() {
  return (
    <>
      <LogoutBtn onClick={handleClick_Logout}>Log Out</LogoutBtn>
    </>
  );
}

export default Logout;
