import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../static/images/logo.png";
import Nav2 from "./Nav2";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import axios from "axios";

//헤더 > 로고 컴포넌트입니다.

const Header_Wrap = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 15px;
  /* background-color: lavender; */
  font-family: "Rosehot";
  position: relative;
`;
const Logo_Wrap = styled.div`
  width: 100%;
  /* background-color: lavenderblush; */
  text-align: center;
  margin: 0 auto;
`;
const Logo = styled.div`
  width: 160px;
  height: 100px;
  margin: 0 auto;
  background-image: url(${logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;
const Logout_Wrap = styled.div`
  width: 100%;

  height: 100%;
  background-color: lightsalmon;
  position: absolute;
  display: flex;
  justify-content: end;
  top: 10px;
  right: 100px;

  @media (max-width: 1280px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 500px) {
    right: 15px;
  }
`;
function Header() {
  const [session, setSession] = useState(false);
  useEffect(() => {
    const getSession = async () => {
      try {
        const res = await axios.get(`/session`, { withCredentials: true });
        console.log(res.data);
        console.log("헤더 > 세션 확인", res.data.userId);
        //로그인 여부에 따라 로그아웃 버튼 on/off
        if (res.data.userId != undefined) {
          setSession(true);
          console.log("헤더 > state 세션 값", session);
        } else {
          setSession(false);
          console.log("헤더 > state 세션 값2", session);
        }
      } catch (err) {
        console.log("헤더에서 세션 유무 확인중 에러", err);
      }
    };
    getSession();
  }, []);

  return (
    <>
      <Header_Wrap>
        <Logo_Wrap>
          <Link to="/portfolio_sy">
            <Logo />
          </Link>
        </Logo_Wrap>
        {/* 로그인 여부에 따라 로그아웃 버튼 on/off */}
        {session ? <Logout /> : ""}

        <Nav2 session={session} />
      </Header_Wrap>
    </>
  );
}
export default Header;
