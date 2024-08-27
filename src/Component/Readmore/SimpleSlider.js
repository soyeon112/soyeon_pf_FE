import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderWrap = styled.div`
  width: 100%;
  height: 500px;
  /* background-color: #fff; */
  border-radius: 6px;
  overflow: hidden;

  @media (max-width: 500px) {
    height: 400px;
  }
`;

const SlideImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export default function SimpleSlider({ ...props }) {
  const location = useLocation();
  const projectId = location.pathname.split("/")[2];
  const [imgs, setImgs] = useState();
  const [project, setProject] = useState({});

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  useEffect(() => {
    const fecthProjectTexts = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API}/getTexts/` + projectId,
          { withCredentials: true }
        );
        setProject(res.data[0]);
      } catch (err) {
        console.log("슬라이드 page error > ", err);
      }
    };
    fecthProjectTexts();
  }, [projectId]);

  const imgArr = new Array();

  imgArr.push(project.img1);
  imgArr.push(project.img2);
  imgArr.push(project.img3);
  imgArr.push(project.img4);
  imgArr.push(project.img5);

  return (
    <>
      <Slider {...settings}>
        {imgArr.map((img, id) => (
          <SliderWrap>
            <SlideImg
              src={`${process.env.REACT_APP_API}/image/${img}`}
              key={id}
            />
          </SliderWrap>
        ))}
      </Slider>
    </>
  );
}
