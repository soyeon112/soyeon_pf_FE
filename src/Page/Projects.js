import { React, useEffect, useState } from "react";
import styled from "styled-components/macro";
import Project from "../Component//Project/Project";
import axios from "axios";

// 프로젝트 리스트 페이지입니다.
// db에 저장되어있는 프로젝트들이 리스트업 됩니다.
const Wrap = styled.div`
  width: 990px;
  /* margin: 20px auto; //50px auto */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 30px; */
  @media (max-width: 1280px) {
    width: 90%;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
  .addBtn {
    font-size: 35px;
    transition: transform 0.1s linear;
    transform: scale(1);
  }
  .addBtn:hover {
    cursor: pointer;
    transition: transform 0.1s linear;
    transform: scale(1.12);
  }
`;

const ContetnsWrap = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto 30px;
`;

function Projects() {
  const [project, setProject] = useState([]);

  useEffect(() => {
    const fecthAllProject = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API}/projects`, {
          withCredentials: true,
        });
        setProject(res.data);
        console.log("porject", project);
      } catch (err) {
        console.log(err);
      }
    };
    fecthAllProject();
  }, []);

  return (
    <>
      <Wrap>
        <ContetnsWrap>
          {project &&
            project.map((item) => (
              <Project
                id={item.id}
                thumb={item.thumb}
                title={item.title}
                sub={item.subTitle}
                cate={item.category}
                date={item.date}
                stack={item.skill}
                view={item.view}
                git={item.git}
                img1={item.img1}
                img2={item.img2}
                img3={item.img3}
                img4={item.img4}
                img5={item.img5}
                readmore={item.readmore}
              />
            ))}
        </ContetnsWrap>
      </Wrap>
    </>
  );
}
export default Projects;
