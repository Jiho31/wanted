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

const bannerData = [
  {
    id: -2,
    title: "성장하는 개발자가 되려면?",
    subtitle: "OOO 검색하지 말 것!",
    image: img8,
  },
  {
    id: -1,
    title: "성과를 내는 마케팅",
    subtitle: "실제 사례를 공개합니다!",
    image: img9,
  },
  {
    id: 0,
    title: "마케팅 주니어를 찾습니다",
    subtitle: "기업 과제 풀고 취업까지 한번에!",
    image: img1,
  },
  {
    id: 1,
    title: "개발자 성장 비결 공개!",
    subtitle: "Velog, 글 쓰는 개발자들의 이야기",
    image: img2,
  },
  {
    id: 2,
    title: "개발자 되고싶은 분들!?",
    subtitle: "프론트엔드 무료 교육과정 참여하기",
    image: img3,
  },
  {
    id: 3,
    title: "2022년 달라지는 노동법령",
    subtitle: "노무관리 쟁점 한 눈에 파악하기",
    image: img4,
  },
  {
    id: 4,
    title: "UX 디자이너의 커리어 설계",
    subtitle: "브랜드 가치를 더하는 디자인",
    image: img5,
  },
  {
    id: 5,
    title: "해, 커리어 EP 02 공개",
    subtitle: "마지막 관문 2라운드의 승자는?",
    image: img6,
  },
  {
    id: 6,
    title: "포트폴리오를 부탁해!",
    subtitle: "디자이너의 포폴 살펴보기",
    image: img7,
  },
  {
    id: 7,
    title: "성장하는 개발자가 되려면?",
    subtitle: "OOO 검색하지 말 것!",
    image: img8,
  },
  {
    id: 8,
    title: "성과를 내는 마케팅",
    subtitle: "실제 사례를 공개합니다!",
    image: img9,
  },
  {
    id: 9,
    title: "마케팅 주니어를 찾습니다",
    subtitle: "1월 17일(월) 설명회 신청하기",
    image: img1,
  },
  {
    id: 10,
    title: "개발자 성장 비결 공개!",
    subtitle: "Velog, 글 쓰는 개발자들의 이야기",
    image: img2,
  },
];

// Banner 컴포넌트
const Banner = () => {
  const TOTAL_SLIDES = bannerData.length - 4;
  const [currentSlideIdx, setCurrentSlideIdx] = useState(0);

  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const sliderRef = useRef(null);

  // 스와이프 이벤트
  let startX, endX;

  const prevSlide = useCallback(() => {
    if (currentSlideIdx > -1) {
      setCurrentSlideIdx((prev) => prev - 1);
    }
  }, [currentSlideIdx, TOTAL_SLIDES]);
  const nextSlide = useCallback(() => {
    if (currentSlideIdx < TOTAL_SLIDES) {
      setCurrentSlideIdx((prev) => prev + 1);
    }
  }, [currentSlideIdx, TOTAL_SLIDES]);

  const transitionEndHandler = () => {
    if (currentSlideIdx === -1) {
      setTransitionEnabled(false);
      setCurrentSlideIdx(TOTAL_SLIDES - 1);
    } else if (currentSlideIdx === TOTAL_SLIDES) {
      setTransitionEnabled(false);
      setCurrentSlideIdx(0);
    }
  };

  useEffect(() => {
    // 배너 이미지 슬라이드
    // sliderRef.current.style.transform = `translateX(-${currentSlideIdx - 1}00%)`;
    if (window.innerWidth < 1200) {
      sliderRef.current.style.transform = `translateX(-${
        (currentSlideIdx + 2) * 90.5
      }%)`;
    } else {
      sliderRef.current.style.transform = `translateX(-${
        (currentSlideIdx + 2) * 1084
      }px)`;
    }

    sliderRef.current.style.transition = !transitionEnabled
      ? "none"
      : "all 0.25s linear";
  }, [currentSlideIdx, transitionEnabled]);

  useEffect(() => {
    setTimeout(() => {
      if (currentSlideIdx === TOTAL_SLIDES - 1 || currentSlideIdx === 0) {
        setTransitionEnabled(true);
      }
    }, 100);
  }, [currentSlideIdx]);

  const mouseDownHandler = (e) => {
    startX = e.clientX;
    console.log(startX);
  };
  const mouseUpHandler = (e) => {
    endX = e.clientX;
    console.log(endX);
    if (startX > endX) {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  return (
    <StyledBanner>
      <CarouselWrapper>
        <Carousel ref={sliderRef} onTransitionEnd={transitionEndHandler}>
          {bannerData.map((data) => {
            return (
              <CarouselContent
                data={data}
                key={data.id}
                onMouseDown={mouseDownHandler}
                onMouseUp={mouseUpHandler}
              />
            );
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

// styled components
const StyledBanner = styled.div`
  height: auto;
  position: relative;
  margin-top: 25px;
`;
const CarouselWrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
`;
const Carousel = styled.div`
  width: 100%;
  height: auto;
  display: inline-flex;
  transition: all 0s;
  padding: 0 calc((100vw - 1060px) / 2);

  @media (max-width: 1199px) {
    transform: translateX(calc(90.5vw * 2 + 50vw));
    padding: 0 calc((100vw - 90.5vw) / 2);
    img {
      width: inherit;
      height: 183px;
      object-fit: cover;
    }
  }
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
  button {
    color: #36f;
    cursor: pointer;
  }
  svg {
    width: 14px;
    height: 14px;
    fill: #36f;
    line-height: 1;
  }
`;

export default Banner;
