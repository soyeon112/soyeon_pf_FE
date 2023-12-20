import styled from "styled-components";

export const LoginWrap = styled.div`
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
  @media (max-width: 820px) {
    width: 90%;
    .iconHome {
      bottom: 7%;
    }
  }
  @media (max-width: 500px) {
    width: 90%;
  }
`;
export const LoginInner = styled.div`
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

  @media (max-width: 1280px) {
    width: 500px;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 500px) {
    box-shadow: none;
    width: 95%;
  }
`;

export const Title = styled.p`
  margin-top: 20px;
  font-size: 1.6rem;
  text-align: center;
  font-family: "NanumB";
`;

export const Subtext = styled.p`
  font-size: 0.75rem;
  margin-top: 10px;
  color: #333;
`;
export const LoginItem = styled.div`
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

export const LoginBtn = styled.button`
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
