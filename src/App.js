import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Reset } from "styled-reset";
import styled from "styled-components/macro";

import Main from "./Page/Main";
import Profile from "./Page/Profile";
import Projects from "./Page/Projects";
import Login from "./Page/Login/Login";
import AdminMain from "./Page/AdminMain/AdminMain";
import Update from "./Page/Update/Update";
import Header from "./Component/Header/Header";
import Add from "./Page/Add/Add";
import Detail from "./Page/DetailProject/Detail";

import TopButton from "./Component/TopButton";

import { useSelector } from "react-redux";
function App() {
  return <Inner />;
}

function Inner() {
  //현재 주소 가져오기
  const location = useLocation();
  const locationPath = location.pathname;

  const [isLogin, setIsLogin] = useState(false);
  //11.25 로그인 리덕스
  const isAuth = useSelector((state) => state.auth.isAuth);

  //로그인 여부 확인 (11.05)

  // useEffect(() => {
  //   getSession();
  // }, [locationPath]);

  // const getSession = async () => {
  //   try {
  //     const res = await axios.get(
  //       `${process.env.REACT_APP_API}/login/success`,
  //       {
  //         withCredentials: true,
  //       }
  //     );
  //     if (res.data.user) {
  //       console.log("로그인 ㅇ");
  //       // setIsLogin(true);
  //     } else {
  //       console.log("로그인 x");
  //       // setIsLogin(false);
  //     }
  //   } catch (err) {
  //     console.log(" FE App.js > get sseion", err);
  //   }
  // };
  // console.log("is Login", isLogin);

  return (
    <>
      <Reset />
      {/* 로그인 페이지에서만 헤더 안보이게, 이외 페이지에서는 헤더 보이게 */}
      {!(locationPath == "/admin/login") ? (
        <Header /*isLogin={isLogin}*/ />
      ) : (
        ""
      )}

      <TopButton />
      <Routes>
        {/* <Route path="/" element={<Main />} /> */}
        <Route path="/" element={<Projects />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        <Route path="/admin" element={<AdminMain />} />
        <Route path="/admin/add" element={<Add />} />
        <Route path="/admin/update/:id" element={<Update />} />
        <Route path="/admin/login" element={<Login />} />
        {/* 0406 디테일페이지 추가 */}
        <Route path="/projectDetail/:id" element={<Detail />} />
      </Routes>
    </>
  );
}
export default App;
