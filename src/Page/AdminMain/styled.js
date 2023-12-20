import styled from "styled-components";

export const AdminWrap = styled.div`
  width: 990px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media (max-width: 1280px) {
    width: 90%;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    width: 90%;
  }

  .addBtn {
    margin-top: 50px;
    font-size: 50px;
    color: #d2d2d2;
    cursor: pointer;
    &:hover {
      color: #e64f92;
    }
  }
`;

export const ContentsWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ContentsInner = styled.div`
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: start;

  @media (max-width: 1280px) {
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 500px) {
  }
`;
