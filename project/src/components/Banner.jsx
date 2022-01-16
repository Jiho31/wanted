import React, { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import CarouselContent from "./CarouselContent";

import img1 from "../assets/images/banner1.jpg";
import img2 from "../assets/images/banner2.jpg";
import img3 from "../assets/images/banner3.jpg";
import img4 from "../assets/images/banner4.jpg";
import img5 from "../assets/images/banner5.jpg";
import img6 from "../assets/images/banner6.jpg";
import img7 from "../assets/images/banner7.jpg";
import img8 from "../assets/images/banner8.jpg";
import img9 from "../assets/images/banner9.jpg";
import img10 from "../assets/images/banner10.jpg";
import img11 from "../assets/images/banner11.jpg";

const bannerData = [
  {
    id: -2,
    title: "믿을 것은 데이터 뿐!",
    subtitle: "요즘 데이터팀은 어떻게 일할까?",
    image: img10,
  },
  {
    id: -1,
    title: "Git? GitHub?",
    subtitle: "협업 필수 도구 마스터하기",
    image: img11,
  },
  {
    id: 0,
    title: "스타벅스 굿즈 좋아하세요?",
    subtitle: "사랑받는 디자인의 비밀",
    image: img1,
  },
  {
    id: 1,
    title: "마케터를 위한 데이터",
    subtitle: "잘 나가는 마케터는 무엇이 다를까!?",
    image: img2,
  },
  {
    id: 2,
    title: "요즘 MD가 일하는 방법",
    subtitle: "실무자가 공개하는 MD 커리어의 모든 것!",
    image: img3,
  },
  {
    id: 3,
    title: "개발자 성장 비결 공개!",
    subtitle: "글 쓰는 개발자들의 이야기",
    image: img4,
  },
  {
    id: 4,
    title: "나도 개발자 되고 싶다",
    subtitle: "프론트엔드 무료 교육과정 참여하기",
    image: img5,
  },
  {
    id: 5,
    title: "리크루터 커리어 가이드",
    subtitle: "싼마이 리크루터가 되지 않기 위해",
    image: img6,
  },
  {
    id: 6,
    title: "유저 경험을 설계하라!",
    subtitle: "문제를 해결하는 프로덕트 디자인",
    image: img7,
  },
  {
    id: 7,
    title: "아는 만큼 보인다!",
    subtitle: "노동법 '채용' 시리즈",
    image: img8,
  },
  {
    id: 8,
    title: "해, 커리어 EP 02 공개",
    subtitle: "최종 발표를 위한 마지막 관문 2라운드의 승자는?",
    image: img9,
  },
  {
    id: 9,
    title: "믿을 것은 데이터 뿐!",
    subtitle: "요즘 데이터팀은 어떻게 일할까?",
    image: img10,
  },
  {
    id: 10,
    title: "Git? GitHub?",
    subtitle: "협업 필수 도구 마스터하기",
    image: img11,
  },
  {
    id: 11,
    title: "스타벅스 굿즈 좋아하세요?",
    subtitle: "사랑받는 디자인의 비밀",
    image: img1,
  },
  {
    id: 12,
    title: "마케터를 위한 데이터",
    subtitle: "잘 나가는 마케터는 무엇이 다를까!?",
    image: img2,
  },
];

// styled components
const StyledBanner = styled.div`
  height: auto;
  position: relative;
  margin-top: 25px;
`;
const CarouselWrapper = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  position: relative;
`;
const Carousel = styled.div`
  // width: calc(100vw * 11);
  width: 100%;
  height: auto;
  display: inline-flex;
  // transition: all 0.25s linear;
  transition: all 0s;
  transform: translateX(2168px);
`;

const BannerArrow = styled.button`
  width: 30px;
  height: 60px;
  border-radius: 15px;
  background-color: #fff;
  opacity: 0.5;
  font-size: 16px;
  cursor: pointer;
  position: absolute;
  top: 120px;

  svg {
    width: 16px;
    height: 16px;
  }
  ${(props) =>
    props.prev &&
    `
  left: calc((100% - 1210px) / 2);
  `}
  ${(props) =>
    props.next &&
    `
  right: calc((100% - 1200px) / 2);
  
  `}
`;

// Banner 컴포넌트
const Banner = () => {
  const TOTAL_SLIDES = 11;
  const [currentSlideIdx, setCurrentSlideIdx] = useState(0);

  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const sliderRef = useRef(null);
  const infoRef = useRef(null);

  // useEffect(() => {
  //   if (currentSlideIdx === TOTAL_SLIDES - 1 || currentSlideIdx === 0) {
  //     setTransitionEnabled(true);
  //   }
  // }, [currentSlideIdx]);
  const prevSlide = useCallback(() => {
    if (currentSlideIdx > -1) {
      setCurrentSlideIdx((prev) => prev - 1);
    }
  }, [currentSlideIdx]);
  const nextSlide = useCallback(() => {
    if (currentSlideIdx < TOTAL_SLIDES) {
      setCurrentSlideIdx((prev) => prev + 1);
    }
  }, [currentSlideIdx]);

  const handleTransitionEnd = useCallback(() => {
    if (currentSlideIdx === -1) {
      setTransitionEnabled(false);

      setCurrentSlideIdx(TOTAL_SLIDES - 1);
    } else if (currentSlideIdx === TOTAL_SLIDES) {
      setTransitionEnabled(false);
      setCurrentSlideIdx(0);
    }
  }, [currentSlideIdx]);

  useEffect(() => {
    console.log(`현재 슬라이드 인덱스: ${currentSlideIdx}`);

    // 배너 이미지 슬라이드
    // sliderRef.current.style.transform = `translateX(-${currentSlideIdx - 1}00%)`;
    sliderRef.current.style.transform = `translateX(-${
      (currentSlideIdx + 2) * 1084
    }px)`;
    // sliderRef.current.style.transition = "all 0.25s linear";
    sliderRef.current.style.transition = !transitionEnabled
      ? "none"
      : "all 0.25s linear";
    if (!transitionEnabled) {
      if (currentSlideIdx === TOTAL_SLIDES - 1 || currentSlideIdx === 0) {
        setTransitionEnabled(true);
      }
    }

    // 배너 설명 컴포넌트 보이고 숨기기 <수정 필요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!>
    // infoRef.current.style.animation = "0.4s ease-in-out";
    // infoRef.current.style.opacity = 1;
    // infoRef.current.classList.add("visible");
  }, [currentSlideIdx, transitionEnabled]);

  return (
    <StyledBanner>
      <CarouselWrapper>
        <Carousel ref={sliderRef} onTransitionEnd={handleTransitionEnd}>
          {bannerData.map((data) => {
            return <CarouselContent data={data} key={data.id} />;
          })}
        </Carousel>
        <BannerArrow onClick={prevSlide} prev>
          <span>
            <svg viewBox="0 0 16 16">
              <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
            </svg>
          </span>
        </BannerArrow>
        <BannerArrow onClick={nextSlide} next>
          <span>
            <svg viewBox="0 0 16 16">
              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
            </svg>
          </span>
        </BannerArrow>
      </CarouselWrapper>
    </StyledBanner>
  );
};

export default Banner;
