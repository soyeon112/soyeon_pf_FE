import styled from "styled-components";

export const StackWrap = styled.div`
  width: 90%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  margin: 50px auto 0 auto;
`;

export const StackInnerWrap = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-template-rows: auto;
  box-sizing: border-box;
  gap: 30px;
  font-size: 0.8rem;
  margin-top: 40px;
  div {
    margin: 0 auto;
    width: 80px;
    height: 80px;
    /* border: 1px solid #eee; */
    border-radius: 10px;
    text-align: center;
    font-size: 2.5rem;
    color: #097efe;
  }

  @media (max-width: 820px) {
  }
  @media (max-width: 500px) {
    grid-template-columns: auto auto auto;
    width: 100%;
    gap: 15px;
    div {
      width: 55px;
      height: 55px;
      font-size: 2rem;
    }
  }
`;

export const StackTitle = styled.p`
  font-family: "nanumB";
  font-size: 1rem;
  @media (max-width: 820px) {
  }
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;
