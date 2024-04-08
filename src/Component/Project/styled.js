import styled from "styled-components/macro";

export const ProjectCompoWrap = styled.div`
  display: flex;
  width: 100%;
  height: auto; //330px
  margin: 20px auto;
  padding: 30px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 820px) {
    padding: 0px;
    width: 90%; //80%
    height: auto;
    flex-direction: column;
    margin: 40px auto;
  }
  @media (max-width: 500px) {
    margin: 60px auto;
  }
`;

export const ThumbDiv = styled.div`
  width: 100%;
  height: 330px; //100%
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 820px) {
    height: 100%;
  }
  @media (max-width: 500px) {
  }
`;

export const Thumb = styled.img`
  height: 100%;
  object-fit: contain; //cover

  @media (max-width: 1000px) {
    height: 80%;
  }
  @media (max-width: 820px) {
    width: 100%;
    padding-left: 0px;
  }
  @media (max-width: 500px) {
    width: 100%;
    padding: 0;
  }
`;

export const TextWrap = styled.div`
  width: 60%;
  height: 330px; //100%
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 0;
  box-sizing: border-box;
  @media (max-width: 1280px) {
  }
  @media (max-width: 820px) {
    width: 60%;
    width: 100%;
    height: 250px;
    padding: 20px 0 0 10px;
  }
  @media (max-width: 500px) {
  }
`;

export const Title = styled.p`
  font-family: "NanumEB";
  font-size: 20px;
  margin-bottom: 20px;
  @media (max-width: 1280px) {
    font-size: 0.9em;
  }
  @media (max-width: 820px) {
    /* font-size: 0.8em; */
  }
  @media (max-width: 500px) {
    /* font-size: 0.8em; */
  }
`;
export const SubText = styled.p`
  font-family: "NanumB";
  font-size: 14px;
  margin-bottom: 13px;
  @media (max-width: 1280px) {
    font-size: 0.8em;
  }
  @media (max-width: 820px) {
    /* font-size: 0.7em; */
  }
  @media (max-width: 500px) {
    /* font-size: 0.7em; */
  }
`;
export const StackBottomDiv = styled.div`
  font-family: "NanumB";
  width: 100%;
  box-sizing: border-box;
`;
export const StackDiv = styled.div`
  /* height: 20px; */
`;

export const Stacks = styled.span`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 7px;
  margin-right: 3px;
  padding: 6px;
  box-sizing: border-box;
  font-size: 13px;
  color: #757575;
  line-height: 2.5;

  @media (max-width: 1280px) {
    font-size: 0.75em;
  }
  @media (max-width: 820px) {
  }
  @media (max-width: 500px) {
  }
`;

export const BtnDiv = styled.div`
  flex-direction: row;
  margin-top: 10px;
  a {
    text-decoration: none;
  }
`;

export const Btns = styled(Stacks)`
  color: #e64f92;
  font-size: 0.75em;
  &:hover {
    cursor: pointer;
    background-color: #ffeff5;
    border: 1px solid #e64f92;
  }
`;
