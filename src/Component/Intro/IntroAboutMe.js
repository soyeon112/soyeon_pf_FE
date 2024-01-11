import React from "react";
import { AboutMeWrap, AboutMeInner, FolderWrap } from "./styled";
import { Logo } from "../../Component/Header/styled";
import { ReactComponent as FolerIcon } from "../../static/images/folder.svg";
import { Link } from "react-router-dom";

function IntroAboutMe({ isAuth }) {
  const isLogin = () => {
    if (isAuth) {
      //세션이 있다면 관리자 메인으로 이동
      document.location.href = "/admin";
    } else {
      //세션이 없다면 로그인 페이지로 이동
      document.location.href = "/admin/login";
    }
  };
  return (
    <AboutMeWrap>
      <AboutMeInner>
        {/* <Logo /> */}
        <FolderWrap>
          <div>
            <Link to="/projects">
              <FolerIcon
                className="folder"
                fill="#fff"
                stroke="#333"
                width={150}
                height={150}
              />
            </Link>
            <span>Projects</span>
          </div>
          <div>
            <Link to="/admin">
              <FolerIcon
                onClick={isLogin}
                className="folder"
                fill="#fff"
                stroke="#333"
                width={150}
                height={150}
              />
            </Link>
            <span>Admin</span>
          </div>
        </FolderWrap>
      </AboutMeInner>
    </AboutMeWrap>
  );
}

export default IntroAboutMe;
