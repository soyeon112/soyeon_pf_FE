import styled from "styled-components/macro";

export const DetailWrap = styled.div`
  font-family: "nanumR";
`;
export const DetailHeader = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  box-sizing: border-box;
  /* background: #eee; */
  background-color: rgba(4, 126, 254, 0.1);
  text-align: center;
  margin-top: -170px;
  z-index: -10;
`;

export const HeaderInner = styled.div`
  width: 100%;
  height: 400px;
  /* border: 1px solid; */
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 50px;
  box-sizing: border-box;
  gap: 50px;

  @media (max-width: 1280px) {
    gap: 20px;
  }
  @media (max-width: 820px) {
    flex-direction: column;
    padding: 0 30px 10px;
  }
  @media (max-width: 500px) {
  }
`;

export const Title = styled.h2`
  padding-bottom: 30px;
  color: #047efe;
  font-weight: bold;
  font-size: 35px;
  border-bottom: 3px solid #047efe;
  @media (max-width: 1280px) {
  }
  @media (max-width: 820px) {
    font-size: 25px;
  }
  @media (max-width: 500px) {
    font-size: 20px;
    padding: 10px;
    border-bottom: 1.5px solid #047efe;
  }
`;
export const TextBox = styled.div`
  width: 30%;
  height: auto;
  text-align: center;

  padding: 20px;
  box-sizing: border-box;
  @media (max-width: 1280px) {
    width: auto;
  }
  @media (max-width: 820px) {
  }
  @media (max-width: 500px) {
  }
`;

export const Date = styled.span`
  display: inline-block;
  color: #333;
  font-size: 15px;
  margin-top: 20px;
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

export const ImgBox = styled.div`
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  /* border: 1px solid red; */
  @media (max-width: 820px) {
    width: 100%;
  }
`;
export const Img = styled.div`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.src}) no-repeat center/contain;
`;

export const DetailMiddle = styled.div`
  width: 100%;
  height: 100%;
  /* background: rgba(0, 0, 0, 0.9); */
  color: #333;
  background: #fff;
  padding: 50px 0;
  box-sizing: border-box;
  text-align: center;
  font-size: 1rem;
  line-height: 25px;
  text-align: left;
  display: flex;
  flex-direction: column;

  @media (max-width: 500px) {
    font-size: 0.9rem;
  }
`;
export const MiddleInner = styled.div`
  width: 80%;
  height: 100%;

  padding: 30px;
  box-sizing: border-box;
  margin: 0 auto;
  @media (max-width: 820px) {
    width: 95%;
  }
`;
export const IntroText = styled.p`
  width: 100%;
  margin: 0px auto 30px;
  word-wrap: break-all;
  font-weight: bold;
  /* background: lemonchiffon; */
`;
export const ReadmoreText = styled.p`
  width: 100%;
  display: inline-block;
  margin: 0 auto;
  white-space: pre-wrap;
  line-height: 30px;
`;

export const StackBox = styled.div`
  width: 100%;
  height: auto;
  /* padding: 20px;
  box-sizing: border-box;
  background-color: rgba(4, 126, 254, 0.1); */
  margin: 0 0 30px;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  @media (max-width: 820px) {
  }
`;
export const Stack = styled.p`
  display: inline-block;
  box-sizing: border-box;
  padding: 5px 20px;
  background-color: rgba(4, 126, 254);
  line-height: 16px;
  color: #fff;
  border-radius: 20px;
  font-size: 0.9rem;

  @media (max-width: 820px) {
    padding: 2.5px 15px;
    font-size: 0.8rem;
    line-height: 22px;
  }
`;

export const ImgTable = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  background: #047efe;
`;
export const DetailBottom = styled.div`
  width: 100%;
  height: 600px;
  background-color: rgba(4, 126, 254, 0.1);
  text-align: center;
  padding: 20px;
  font-size: 1rem;
  box-sizing: border-box;
  @media (max-width: 500px) {
    width: 100%;
    padding: 5px;
  }
`;

export const BottomInner = styled.div`
  width: 85%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  margin: 0 auto;
  @media (max-width: 820px) {
    width: 100%;
    padding: 10px;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const BottomTitle = styled.h2`
  font-weight: bold;
  color: #047efe;
  font-size: 30px;
  margin-bottom: 50px;
`;
export const PhotoBox = styled.div`
  width: calc(100% - 50px);
  margin: 0 auto;
  height: 400px;
  background: #fee;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`;
