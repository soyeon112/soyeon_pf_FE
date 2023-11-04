import { React, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import Modal from "./Readmore";

// 어드민 페이지 > 프로젝트 한개의 컴포넌트 입니다.
const Contents = styled.div`
  width: 250px;
  height: 300px;
  margin: 15px;
  border: #ececec 1px solid;
  /* border: 1px solid #738af3; */
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
const ImgWrap = styled.div`
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

const Title = styled.p`
  font-family: "NanumB";
  font-size: 16px;
  margin: 15px 5px;
`;

const BtnWrap = styled.div`
  width: 100%;
  height: 35px;
  margin-top: 55px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Btn = styled.button`
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

function AdminContents(props) {
  //모달창
  const [isOpen, setIsOpen] = useState(false);
  console.log("project data >> ", props);
  /* 모달 오픈시 배경 스크롤 막음*/
  {
    isOpen === true
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }

  //어드민 > 프로젝트 삭제
  const handleDelete = async (id) => {
    let delConfirm = window.confirm(
      "여기서 삭제하면 DB에서도 삭제됩니다. \n정말로 삭제하시겠습니까?"
    );
    if (delConfirm) {
      try {
        await axios.delete(`${process.env.REACT_APP_API}/delete/` + id);
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    }
  };

  //랜더링
  console.log("admin-contents-props", props);
  return (
    <>
      <Contents>
        <ImgWrap
          thumb={`${process.env.REACT_APP_API}/image/${props.thumb}`}
          onClick={() => setIsOpen(true)}
        />
        <Title>{props.title}</Title>
        <BtnWrap>
          <Link to={`/admin/update/${props.id}`}>
            <Btn
              textColor="blue"
              borderColor="#738af3"
              backColor="#f4f6f9"
              id={props.id}
            >
              수정
            </Btn>
          </Link>

          <Btn
            onClick={() => handleDelete(props.id)}
            textColor="#e64f92"
            borderColor="#e64f92"
            backColor="#ffeff5"
          >
            삭제
          </Btn>
        </BtnWrap>
        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          id={props.id}
        ></Modal>
      </Contents>
    </>
  );
}

export default AdminContents;
