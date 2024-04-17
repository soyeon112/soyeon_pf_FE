import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderWrap = styled.div`
  width: 100%;
  height: 500px;
  background: pink;
`;
export default function SimpleSlider({ ...props }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  console.log(props.screenshot);
  return (
    <Slider {...settings}>
      <SliderWrap>{props.screenshot}</SliderWrap>
      <SliderWrap></SliderWrap>
      <SliderWrap></SliderWrap>
      <SliderWrap></SliderWrap>
      <SliderWrap></SliderWrap>
      <SliderWrap></SliderWrap>
    </Slider>
  );
}
