import styled from "styled-components";
import logo from "../../static/images/logo.png";

export const HeaderWrap = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 15px;
  /* background-color: lavender; */
  font-family: "Rosehot";
  position: relative;
`;
export const LogoWrap = styled.div`
  width: 100%;
  /* background-color: lavenderblush; */
  text-align: center;
  margin: 0 auto;
`;
export const Logo = styled.div`
  width: 160px;
  height: 100px;
  margin: 0 auto;
  background-image: url(${logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;
export const LogoutWrap = styled.div`
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
