import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";

// 어드민 > 로그인 페이지 입니다.

const Wrap = styled.div`
  background-color: #fff;
  height: 80vh;
  width: 990px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  font-family: "NanumR";

  .iconHome {
    font-size: 30px;
    z-index: 2;
    position: absolute;
    bottom: 5%;
    color: #333;
    cursor: pointer;
    border-radius: 50%;
  }

  @media (max-width: 1280px) {
    width: 90%;
  }
  @media (max-width: 850px) {
    width: 90%;
    .iconHome {
      bottom: 15%;
    }
  }
  @media (max-width: 500px) {
    width: 90%;
    .iconHome {
      bottom: 7%;
    }
  }
`;
const LoginBox = styled.div`
  position: absolute;
  margin: 0 auto;
  width: 500px;
  height: 350px;
  padding: 20px;
  background-color: #fff;
  text-align: center;
  box-sizing: border-box;
  border: none;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.1);
  /* z-index: -2; */
  @media (max-width: 1280px) {
    width: 500px;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 500px) {
    /* display: none; */
    box-shadow: none;
    width: 95%;
  }
`;

const Title = styled.p`
  margin-top: 20px;
  font-size: 1.6rem;
  text-align: center;
  font-family: "NanumB";
`;

const Subtext = styled.p`
  font-size: 0.75rem;
  margin-top: 10px;
  color: #333;
`;
const LoginItem = styled.div`
  margin: 30px auto;
  width: 250px;
  height: 200px;
  line-height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (max-width: 1280px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 500px) {
    width: 100%;
  }

  input {
    width: 100%;
    border: none;
    border-bottom: 1px solid #d8d3c9;
    box-sizing: border-box;
    padding: 10px;
    font-size: 0.9rem;
    margin: 10px auto;
  }
`;

const LoginBtn = styled.button`
  width: 100%;
  height: 35px;
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

//관리자페이지 - 로그인 화면
function Login() {
  const [userId, setUserId] = useState("");
  const [pw, setPw] = useState("");

  const handleClick = async (e) => {
    if (userId && pw) {
      e.preventDefault();
      try {
        await axios.post(`${process.env.REACT_APP_API}/login`, {
          withCredentials: true,

          userId,
          pw,
        });
        //로그인이 되면 관리자 페이지 - 메인
        document.location.href = "/admin";
      } catch (err) {
        console.log("login err : ", err);
      }
    } else {
      alert("빈칸있네요! 아이디와 비밀번호를 모두 입력해주세요.");
    }
  };

  return (
    <>
      <Wrap>
        <LoginBox>
          <Title>로그인</Title>
          <Subtext>관리자 로그인 창입니다.</Subtext>
          <LoginItem>
            <input
              type="text"
              placeholder="id"
              name="id"
              onChange={(e) => setUserId(e.target.value)}
            />
            <input
              type="password"
              placeholder="pw"
              name="pw"
              onChange={(e) => setPw(e.target.value)}
            />
            {/* <Link to="/admin"> */}
            <LoginBtn onClick={handleClick}>Log in</LoginBtn>
            {/* </Link> */}
          </LoginItem>
        </LoginBox>
        <Link to="/" className="iconHome">
          <HiHome />
        </Link>
      </Wrap>
    </>
  );
}

export default Login;
