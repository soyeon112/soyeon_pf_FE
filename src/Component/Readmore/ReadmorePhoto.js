import React, { useState } from "react";
import {
  ReadmorePhotoWrap,
  BigImgDiv,
  BigImg,
  SmallImgDiv_scroll,
  SmallImgDiv,
  SmallImg,
} from "./styled";

// 프로젝트 > readmore 모달창 내에 사진만 보여주는 컴포넌트 입니다.

//images
function Readmore_photo({ imgArr }) {
  const [saveImg, setSaveImg] = useState();

  return (
    <ReadmorePhotoWrap>
      <BigImgDiv>
        {saveImg ? (
          <BigImg src={`${process.env.REACT_APP_API}/image/${saveImg}`} />
        ) : (
          <BigImg src={`${process.env.REACT_APP_API}/image/${imgArr[0]}`} />
        )}
      </BigImgDiv>
      <SmallImgDiv_scroll>
        <SmallImgDiv>
          {imgArr.map((it) => (
            <SmallImg
              src={`${process.env.REACT_APP_API}/image/${it}`}
              key={it.id}
              onClick={() => setSaveImg(it)}
            />
          ))}
        </SmallImgDiv>
      </SmallImgDiv_scroll>
    </ReadmorePhotoWrap>
  );
}

export default Readmore_photo;
