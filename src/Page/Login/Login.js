import React, { useState } from "react";
import axios from "axios";
import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authAction } from "../../Store/auth";
import {
  LoginWrap,
  LoginInner,
  Title,
  Subtext,
  LoginItem,
  LoginBtn,
} from "./styled";
// 어드민 > 로그인 페이지 입니다.

//관리자페이지 - 로그인 화면
function Login() {
  const [userId, setUserId] = useState("");
  const [pw, setPw] = useState("");

  const dispatch = useDispatch();

  const LoginHandler = () => {
    dispatch(authAction.login());
  };

  const handleClick = async (e) => {
    if (userId && pw) {
      e.preventDefault();
      try {
        await axios
          .post(`${process.env.REACT_APP_API}/login`, {
            data: { userId, pw },
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.status);
            if (res.status == 200) {
              LoginHandler();
              document.location.href = "/admin";
            } else {
              alert("틀렸어요. 아이디와 비밀번호를 다시 확인해주세요.");
            }
          });
      } catch (err) {
        console.log("login err : ", err);
      }
    } else {
      alert("빈칸이 있네요. 아이디와 비밀번호를 모두 입력해주세요.");
    }
  };

  return (
    <LoginWrap>
      <LoginInner>
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
          <LoginBtn onClick={handleClick}>Log in</LoginBtn>
        </LoginItem>
      </LoginInner>
      <Link to="/" className="iconHome">
        <HiHome />
      </Link>
    </LoginWrap>
  );
}

export default Login;
