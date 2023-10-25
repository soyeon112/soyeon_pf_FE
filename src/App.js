import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Reset } from "styled-reset";
import Main from "./Page/Main";
import Profile from "./Page/Profile";
import Projects from "./Page/Projects";
import Login from "./Page/Login";
import AdminMain from "./Page/AdminMain";
import Update from "./Page/Update2";
import Header from "./Component/Header";
import Add from "./Page/Add";
function App() {
  return (
    <BrowserRouter>
      <Inner />
    </BrowserRouter>
  );
}

function Inner() {
  //현재 주소 가져오기
  const location = useLocation();
  const locationPath = location.pathname;
  return (
    <>
      <Reset />
      {/* 로그인 페이지에서만 헤더 안보이게, 이외 페이지에서는 헤더 보이게 */}
      {!(locationPath == "/admin/login") ? <Header /> : ""}

      <Routes>
        <Route path="/portfolio_sy" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/admin" element={<AdminMain />} />
        <Route path="/admin/add" element={<Add />} />
        <Route path="/admin/update/:id" element={<Update />} />
        <Route path="/admin/login" element={<Login />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}
export default App;
