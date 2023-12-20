import { React, useState } from "react";
import { AdminCardWrap, ImgWrap, Title, BtnWrap, Btn } from "./styled";
import axios from "axios";
import { Link } from "react-router-dom";
import Modal from "../Readmore/Readmore";

// 어드민 페이지 > 프로젝트 한개의 컴포넌트 입니다.

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
        await axios.delete(`${process.env.REACT_APP_API}/delete/` + id, {
          withCredentials: true,
        });
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
      <AdminCardWrap>
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
      </AdminCardWrap>
    </>
  );
}

export default AdminContents;
