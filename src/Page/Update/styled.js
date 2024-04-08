import styled from "styled-components/macro";

// 어드민 > 프로젝트 수정 페이지 입니다.
export const Wrap = styled.div`
  width: 990px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1280px) {
    width: 90%;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
`;

export const PageName = styled.span`
  background-color: #ececec;
  padding: 7px;
  border-radius: 7px;
  font-family: "NanumB";
  font-size: 13px;
  margin: 20px;
  color: blue;
`;

export const InputSt = styled.input`
  width: 200px;
  height: 30px;
  border: #ececec 1px solid;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  color: blue;
  font-family: "NanumR";
`;
export const TextArea = styled.textarea`
  height: 150px;
  width: 200px;
  border: #ececec 1px solid;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  color: blue;
  font-family: "NanumR";
  line-height: 17px;
`;

export const Inner = styled.div`
  width: 100%;
  /* height: 500px; */
  margin: 30px auto;
`;

export const Item = styled.div`
  width: 100%;
  /* height: 50px; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  padding: 10px 0;
  box-sizing: border-box;
  border-bottom: 1px solid #ecebe3;
`;
export const Title = styled.span`
  font-size: 0.9rem;
  display: inline-block;
  width: 150px;
  font-family: "NanumB";
`;
export const UpdateBtn = styled.button`
  width: 80px;
  height: 40px;
  background-color: #fff;
  color: blue;
  border: 1px solid #738af3;
  border-radius: 20px;
  &:hover {
    cursor: pointer;
    background-color: #738af3;
    color: #fff;
    font-weight: border;
  }
`;

export const BtnDiv = styled.div`
  width: 40%;
`;
