import { React, useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import Content from "../Component/Project";
import PjPopup from "../static/images/contents-Hotnow.png";
import PjKrispy from "../static/images/contents-krispy.png";
import Pjtodo from "../static/images/contents-todolist.png";
import Pjcpp from "../static/images/contents-cpp2.png";
import pjweather from "../static/images/contents-weather.png";
import pjmomentum from "../static/images/contents-momentum.png";
import { GrAddCircle } from "react-icons/gr";
import axios from "axios";

// 프로젝트 페이지 > Projects.js에서 작업중 이건 삭제 예정❗️

/*read more images*/
import rm_kispy from "../static/images/readmore_krispy.png";
import rm_kispy1 from "../static/images/readmore_krispy1.png";
import rm_kispy2 from "../static/images/readmore_krispy2.png";
import rm_kispy3 from "../static/images/readmore_krispy3.png";

import rm_popup from "../static/images/readmore_popup.png";
import rm_popup1 from "../static/images/readmore_popup1.png";
import rm_popup2 from "../static/images/readmore_popup2.png";

import rm_todo from "../static/images/readmore_todo.png";
import rm_todo1 from "../static/images/readmore_todo1.png";
import rm_todo2 from "../static/images/readmore_todo2.png";
import rm_todo3 from "../static/images/readmore_todo3.png";
import rm_todo4 from "../static/images/readmore_todo4.png";

import rm_cpp from "../static/images/readmore_cpp.png";
import rm_cpp1 from "../static/images/readmore_cpp1.png";
import rm_cpp2 from "../static/images/readmore_cpp2.png";
import rm_cpp2_1 from "../static/images/readmore_cpp2-1.png";
import rm_cpp2_2 from "../static/images/readmore_cpp2-2.png";
import rm_cpp3 from "../static/images/readmore_cpp3.png";
import rm_cpp4 from "../static/images/readmore_cpp4.png";
import rm_cpp4_1 from "../static/images/readmore_cpp4-1.png";
import rm_cpp5 from "../static/images/readmore_cpp5.png";
import rm_cpp6 from "../static/images/readmore_cpp6.png";

import rm_weather from "../static/images/readmore_weather.png";
import rm_weather0 from "../static/images/readmore_weather0.png";
import rm_weather1 from "../static/images/readmore_weather1.png";
import rm_weather2 from "../static/images/readmore_weather2.png";

import rm_momentum from "../static/images/readmore_momentum.png";
import rm_momentum0 from "../static/images/readmore_momentum0.png";
import rm_momentum1 from "../static/images/readmore_momentum1.png";
import rm_momentum2 from "../static/images/readmore_momentum2.png";

const Wrap = styled.div`
  width: 990px;
  margin: 50px auto;
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
    width: 90%;
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

function Contents(props) {
  /* 스택 */
  const krispy = ["Html", "Css", "JavaScript"];
  const popupStack = ["Python", "Html", "Css", "JavaScript"];
  const cpp = ["React", "Node.js"];
  const todo = ["html", "Css", "JavaScript"];
  const weather = ["React", "Styled-Components"];
  const momentum = ["Html", "Css", "Javascript"];

  /* read more 이미지 */
  const krispyImgs = [rm_kispy, rm_kispy1, rm_kispy2, rm_kispy3];
  const popupImgs = [rm_popup, rm_popup1, rm_popup2];
  const todoImgs = [rm_todo, rm_todo1, rm_todo2, rm_todo3, rm_todo4];
  const cppImgs = [
    rm_cpp,
    rm_cpp1,
    rm_cpp2_1,
    rm_cpp2_2,
    rm_cpp3,
    rm_cpp4,
    rm_cpp4_1,
    rm_cpp5,
    rm_cpp6,
  ];
  const weatherImgs = [rm_weather, rm_weather0, rm_weather1, rm_weather2];
  const momentumImgs = [rm_momentum, rm_momentum0, rm_momentum1, rm_momentum2];

  /* 느낀점 */
  const feed_krispy = [
    "크리스피크림도넛 기존 웹페이지를 리디자인 하여 제작한 웹페이지입니다.",
    "추후 반응형 웹으로 발전시키고 싶습니다.",
  ];
  const feed_popup = [
    "크리스피크림도넛 홈페이지에서 각 시간대별 'hot now' 매장 정보를 크롤링 하여 데이터를 수집하였습니다.",
    "처음 팝업이 오픈되었을 때 현재 시간에 맞는 데이터가 출력이 되며, 시간대를 직접 선택하여 매장 정보를 확인할 수도 있습니다.",
    "'hot now' 매장뿐 아니라, 전국 매장 정보를 확인하는 '매장 찾기' 페이지로 발전시켜보고 싶습니다.",
  ];
  const feed_cpp = [
    "처음으로 해본 팀 프로젝트로 4명이서 진행하였고, 저는 프론트엔드를 담당하였습니다.",
    "사용자가 직접 다녀온 카페를 사진과 짧은 글, 별점과 함께 소개하는 정보 공유 목적의 웹 페이지입니다.",
    "처음 구현해 보는 기능들이 많아 서툴고 어렵기도 했지만, 기획부터 웹 디자인, 개발을 통해 웹 프로그래밍에 대해 깊게 경험해 볼 수 있던 좋은 경험이었습니다. ",
  ];
  const feed_todo = [
    "javascript로 기능 구현한 to do list 입니다.",
    "로컬 스토리지를 사용하여 웹페이지를 새로고침 하여도 정보가 남아있도록 제작하였으며, 삭제 버튼을 누르면 로컬 스토리지에서도 데이터가 삭제됩니다.",
    "웹페이지에서의 to do list가 아닌, 앱 형식으로 만들어 실용적인 앱으로도 발전시켜보고 싶습니다.",
  ];
  const feed_weather = [
    "Api 연습을 위해 React로 제작한 날씨 안내 웹페이지 입니다.",
    "geolocation으로 현재 위치의 위도/경도 값을 찾았고, 'OpenWeather' Api를 사용하여 날씨정보를 얻어 출력해주었습니다.",
    "관광지별 날씨 APi를 추가로 이용하여 여행시에도 도움이 될 수 있는 페이지로 발전시키고 싶습니다.",
  ];

  const feed_momentum = [
    "로컬스토리지를 사용하여 Todolist, 로그인 기능 구현.",
    "Geolocation과 Weather Api를 사용하여 현재 위치별 날씨 기능 구현.",
    "배경 이미지와 화면 좌측 상단에 있는 명언은 랜덤으로 출력.",
    "유저네임 hover시 삭제 버튼이 활성화되고, 버튼 클릭시 로컬스토리지에서 데이터 삭제되며 초기 화면 출력.",
  ];

  const [project, setProject] = useState([]);

  useEffect(() => {
    const fecthAllProject = async () => {
      try {
        const res = await axios.get(`/projects`);
        setProject(res.data);
        console.log("project", project);
      } catch (err) {
        console.log(err);
      }
    };
    fecthAllProject();
  }, []);

  console.log("??", project);
  // const skill_item = project[0].skill.split(",");
  // console.log(skill_item);

  return (
    <>
      <Wrap>
        {/* <Nav marginLeft="auto" align="left" {...props} /> */}
        <ContetnsWrap>
          {project &&
            project.map((item) => (
              <Content
                key={item.id}
                src={PjKrispy}
                title={item.title}
                sub={item.subTitle}
                kind={item.category}
                date={item.date}
                stack={item.skill}
                link="https://soyeon112.github.io/web_donuts/"
                git="https://github.com/soyeon112/web_donuts"
                images={krispyImgs}
                feedbacks={feed_krispy}
              />
            ))}

          {/* <Content
          src={PjKrispy}
          title="🍩 크리스피크림도넛 웹 페이지"
          sub="크리스피크림도넛 웹페이지 리디자인"
          kind="개인프로젝트"
          date="2022.05"
          stack={krispy}
          link="https://soyeon112.github.io/web_donuts/"
          git="https://github.com/soyeon112/web_donuts"
          images={krispyImgs}
          feedbacks={feed_krispy}
        />
        <Content
          src={PjPopup}
          title="🍩 크리스피크림도넛 - HotNow Popup"
          sub="현재 시간에 따른 HOT NOW 매장 안내 팝업"
          kind="개인프로젝트"
          date="2022.05"
          stack={popupStack}
          link="https://soyeon112.github.io/web_donuts/popup/popup1.html"
          git="https://github.com/soyeon112/python_crawling-krispy-popup-"
          images={popupImgs}
          feedbacks={feed_popup}
        />
        <Content
          src={Pjcpp}
          title="☕ Cafe Place Pick"
          sub="좋은 카페를 공유 및 소개하는 서비스"
          kind="팀프로젝트 (프론트엔드)"
          date="2022.06 - 2022.07"
          notion="https://shard-riverbed-e01.notion.site/C-P-P-cca45e2972f545c1b847190b35b260cd"
          stack={cpp}
          images={cppImgs}
          feedbacks={feed_cpp}
        />
        <Content
          src={Pjtodo}
          title="📋 TO DO LIST"
          sub="할일을 적어 관리할 수 있는 to do list"
          kind="개인프로젝트"
          date="2022.11"
          stack={todo}
          link="https://soyeon112.github.io/to-do-list/"
          git="https://github.com/soyeon112/to-do-list"
          images={todoImgs}
          feedbacks={feed_todo}
        />
        <Content
          src={pjweather}
          title="🌞 오늘 날씨 어때? 뭐입지?"
          sub="날씨를 알려주는 페이지"
          kind="개인프로젝트"
          date="2022.11-2022.12"
          stack={weather}
          link="https://soyeon112.github.io/weather_api_react/"
          git="https://github.com/soyeon112/weather_api_react"
          images={weatherImgs}
          feedbacks={feed_weather}
        />
        <Content
          src={pjmomentum}
          title="💻모멘텀 클론 코딩"
          sub="크롬 확장 프로그램 'Momentum' 클론 코딩"
          kind="개인프로젝트"
          date="2023.2.2 - 2023.2.4"
          stack={momentum}
          link="https://soyeon112.github.io/momentum-clone/"
          git="https://github.com/soyeon112/momentum-clone"
          images={momentumImgs}
          feedbacks={feed_momentum}
        /> */}
        </ContetnsWrap>
      </Wrap>
    </>
  );
}
export default Contents;
