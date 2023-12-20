import styled from "styled-components";

export const AdminCardWrap = styled.div`
  width: 250px;
  height: 300px;
  margin: 15px;
  border: #ececec 1px solid;
  background-color: #fff;
  padding: 15px;
  box-sizing: border-box;
  border-radius: 5px;

  @media (max-width: 1280px) {
  }
  @media (max-width: 768px) {
    margin: 15px auto;
  }
  @media (max-width: 500px) {
    margin: 15px auto;
  }
`;
export const ImgWrap = styled.div`
  width: 100%;
  height: 150px;
  background-image: url(${(props) => props.thumb});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
`;

export const Title = styled.p`
  font-family: "NanumB";
  font-size: 16px;
  margin: 15px 5px;
`;

export const BtnWrap = styled.div`
  width: 100%;
  height: 35px;
  margin-top: 55px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Btn = styled.button`
  width: 100px;
  height: 100%;
  font-family: "NanumR";
  font-size: 13px;
  background-color: #fff;
  color: ${(props) => props.textColor};
  border: 1px solid #dfdfdf;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.backColor};
    border: 1px solid ${(props) => props.borderColor};
    font-weight: border;
  }
`;
