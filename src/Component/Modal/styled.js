import styled from "styled-components/macro";

/*modal bg*/
export const ModalPopup = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

/*modal popup*/
export const CodeDiv = styled.div`
  width: 70%;
  height: 500px;
  /* height: 70%; */
  position: absolute;
  top: 100px;
  left: 15%;
  font-size: 16px;
  background-color: #f4f2f3;
  border-radius: 10px;
`;

/*헤더영역*/
export const Header = styled.header`
  background-color: #faf7f8;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 0 4px 4px -4px rgba(0, 0, 0, 0.2);
  height: 40px;
  display: flex;
  flex-direction: row;
`;
/*헤더 - 닫기 버튼*/
export const CloseBtn = styled.img`
  position: absolute;
  right: 0;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 28px;
  width: 28px;
  height: 28px;
  margin: 5px 10px 5px 5px;
  &:hover {
    cursor: pointer;
    background-color: #e5e3e4;
  }
`;
/*헤더 - 왼쪽 동그라미 세개*/
export const CircleDiv = styled.div`
  width: 55px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 15px 0 15px;
`;
export const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 10px;
`;

/* 언어 선택 탭*/
export const Nav = styled.nav`
  background-color: #faf7f8;
  height: 40px;
`;
export const Tab = styled.ul`
  margin-left: -40px;
  margin-top: -5px;
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
export const TabItem = styled.li`
  font-size: 0.9rem;
  line-height: 25px;
  width: 80px;
  padding: 10px;
  text-align: center;
  margin: 0 1px 0 1px;
  &:hover {
    cursor: pointer;
    background-color: #dcdce4;
  }
  .notClickTabItem {
    &:hover {
      cursor: pointer;
      background-color: green;
    }
  }
  .clickTabItem {
    font-size: 0.9rem;
    line-height: 25px;
    width: 80px;
    padding: 10px;
    text-align: center;
    margin: 0 1px 0 1px;
    background-color: pink;
    &:hover {
      cursor: pointer;
    }
  }
`;

/*코드 출력 되는 div*/
export const CodeTextDiv = styled.div`
  background-color: #282936;
  color: white;
  height: 85%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow-y: auto;
  overflow-y: auto;
`;
export const CodeText = styled.p`
  white-space: pre-wrap;
  line-height: 25px;
  padding: 10px 0 10px 50px;
`;
