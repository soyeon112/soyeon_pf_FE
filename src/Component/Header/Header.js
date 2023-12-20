import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";
import Logout from "../Logout";
import axios from "axios";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { HeaderWrap, LogoWrap, Logo, LogoutWrap } from "./styled";
//헤더 > 로고 컴포넌트입니다.

function Header({ ...props }) {
  //11.25 로그인 여부 리덕스
  const isAuth = useSelector((state) => state.auth.isAuth);
  console.log("header isAuth >> ", isAuth);
  const [session, setSession] = useState(false);
  // useEffect(() => {
  //   const getSession = async () => {
  //     try {
  //       const res = await axios.get(`${process.env.REACT_APP_API}/session`, {
  //         withCredentials: true,
  //       });
  //       console.log(res.data);
  //       console.log("헤더 > 세션 확인", res.data.userId);
  //       //로그인 여부에 따라 로그아웃 버튼 on/off
  //       if (res.data.userId != undefined) {
  //         setSession(true);
  //         console.log("헤더 > state 세션 값", session);
  //       } else {
  //         setSession(false);
  //         console.log("헤더 > state 세션 값2", session);
  //       }
  //     } catch (err) {
  //       console.log("헤더에서 세션 유무 확인중 에러", err);
  //     }
  //   };
  //   getSession();
  // }, []);

  return (
    <Fragment>
      <HeaderWrap>
        <LogoWrap>
          <Link to="/">
            <Logo />
          </Link>
        </LogoWrap>
        {/* 로그인 여부에 따라 로그아웃 버튼 on/off */}
        {isAuth && <Logout />}

        <Nav isLogin={isAuth} />
      </HeaderWrap>
    </Fragment>
  );
}
export default Header;
