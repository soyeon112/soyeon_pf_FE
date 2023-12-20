import styled from "styled-components";
import iconHtml from "../../../static/images/icon_html.png";
import iconCss from "../../../static/images/icon_css.png";
import iconJs from "../../../static/images/icon_javascript.png";
import iconPs from "../../../static/images/icon_photoshop.png";
import iconReact from "../../../static/images/icon_react.png";
import iconNode from "../../../static/images/icon_nodejs.png";
import iconBlank from "../../../static/images/icon_blank.png";

export const StackWrap = styled.div`
  width: 80%;
  margin: 50px auto 0 auto;
  font-family: "NanumEB";
  font-size: 16px;
  padding: 15px;

  /* @media (max-width: 1280px) {
    width: 60%;
  } */

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 500px) {
    width: 80%;
  }
`;

export const Stacks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const StackItem = styled.div`
  width: 124px;
  margin: 15px auto 0;
  font-family: "NanumR";
  font-size: 13px;
  text-align: center;
`;
export const ImgHtml = styled.img.attrs({
  src: `${iconHtml}`,
})`
  width: 120px;
  margin-bottom: 5px;
  &:hover {
    cursor: pointer;
  }
`;
export const ImgCss = styled.img.attrs({
  src: `${iconCss}`,
})`
  width: 120px;
  margin-bottom: 5px;
  &:hover {
    cursor: pointer;
  }
`;
export const ImgJs = styled.img.attrs({
  src: `${iconJs}`,
})`
  width: 120px;
  margin-bottom: 5px;
  &:hover {
    cursor: pointer;
  }
`;
export const ImgPs = styled.img.attrs({
  src: `${iconPs}`,
})`
  width: 120px;
  margin-bottom: 5px;
  &:hover {
    cursor: pointer;
  }
`;
export const ImgReact = styled.img.attrs({
  src: `${iconReact}`,
})`
  width: 120px;
  margin-bottom: 5px;
  &:hover {
    cursor: pointer;
  }
`;
export const ImgNode = styled.img.attrs({
  src: `${iconNode}`,
})`
  width: 120px;
  margin-bottom: 5px;
  &:hover {
    cursor: pointer;
  }
`;

export const ImgBlank = styled.img.attrs({
  src: `${iconBlank}`,
})`
  width: 120px;
  margin-bottom: 5px;
  &:hover {
    cursor: pointer;
  }
`;
