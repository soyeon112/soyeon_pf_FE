import styled from "styled-components";

export const AboutMeWrap = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  font-size: 0.9rem;

  @media (max-width: 820px) {
  }
  @media (max-width: 500px) {
    font-size: 0.8rem;
    margin-top: 50px;
  }
`;
export const Title = styled.span`
  font-family: "NanumEB";
  font-size: 1rem;
`;
export const AboutMeInner = styled.div`
  font-family: "NanumR";
  line-height: 27px;
`;
