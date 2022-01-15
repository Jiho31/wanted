import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

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
    id: 1,
    title: "스타벅스 굿즈 좋아하세요?",
    subtitle: "사랑받는 디자인의 비밀",
    image: img1,
  },
  {
    id: 2,
    title: "마케터를 위한 데이터",
    subtitle: "잘 나가는 마케터는 무엇이 다를까!?",
    image: img2,
  },
  {
    id: 3,
    title: "요즘 MD가 일하는 방법",
    subtitle: "실무자가 공개하는 MD 커리어의 모든 것!",
    image: img3,
  },
  {
    id: 4,
    title: "개발자 성장 비결 공개!",
    subtitle: "글 쓰는 개발자들의 이야기",
    image: img4,
  },
  {
    id: 5,
    title: "나도 개발자 되고 싶다",
    subtitle: "프론트엔드 무료 교육과정 참여하기",
    image: img5,
  },
  {
    id: 6,
    title: "리크루터 커리어 가이드",
    subtitle: "싼마이 리크루터가 되지 않기 위해",
    image: img6,
  },
  {
    id: 7,
    title: "유저 경험을 설계하라!",
    subtitle: "문제를 해결하는 프로덕트 디자인",
    image: img7,
  },
  {
    id: 8,
    title: "아는 만큼 보인다!",
    subtitle: "노동법 '채용' 시리즈",
    image: img8,
  },
  {
    id: 9,
    title: "해, 커리어 EP 02 공개",
    subtitle: "최종 발표를 위한 마지막 관문 2라운드의 승자는?",
    image: img9,
  },
  {
    id: 10,
    title: "믿을 것은 데이터 뿐!",
    subtitle: "요즘 데이터팀은 어떻게 일할까?",
    image: img10,
  },
  {
    id: 11,
    title: "Git? GitHub?",
    subtitle: "협업 필수 도구 마스터하기",
    image: img11,
  },
];

// styled components
const StyledBanner = styled.div`
  height: auto;
  position: relative;
  margin-top: 25px;
`;
const CarouselWrapper = styled.div`
  width: 100vw;
  display: flex;
  overflow: hidden;
`;
const Carousel = styled.div`
  // width: calc(100vw * 11);
  width: 100vw;
  height: auto;
  display: inline-flex;
`;
const CarouselContent = styled.article`
  width: 1060px;
  padding: 0 12px;
  box-sizing: content-box;

  img {
    border-radius: 4px;
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
`;

const ContentInfo = styled.div`
  width: 330px;
  height: 146px;
  background-color: #fff;
  border-radius: 4px;
  position: absolute;
  bottom: 28px;
  left: 34px;
  opacity: 0;
  ${(props) =>
    props.visible &&
    `
    opacity: 1;
    animation: 0.4s ease-in-out;
  `}

  h2 {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.5;
    margin: 20px 20px 0 20px;
  }
  h3 {
    height: 44px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.64;
    margin: 0 20px;
    border-bottom: ;
  }
  hr {
    border: 0;
    height: 1px;
    background-color: #ececec;
  }
`;
const InfoLink = styled.a`
  height: 40px;
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  margin: 6px 20px;

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

// Banner 컴포넌트
const Banner = () => {
  const TOTAL_SLIDES = 11;
  const [currentSlide, setCurrentSlide] = useState(1);
  const sliderRef = useRef(null);
  const infoRef = useRef(null);

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      // 11 번째 슬라이드 이미지일 경우
      // transition으로 다시 0 번째 슬라이드 이미지로 대체해서 보여주기
      // setCurrentSlide(1);
      return;
    } else {
      setCurrentSlide((prev) => prev + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 1) {
      // 첫 번째 슬라이드 이미지일 경우
      // transition으로 마지막 슬라이드 이미지로 대체해서 보여주기
      // setCurrentSlide(TOTAL_SLIDES);
      return;
    } else {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  useEffect(() => {
    console.log(`현재 슬라이드 인덱스: ${currentSlide}`);

    // 배너 이미지 슬라이드
    sliderRef.current.style.transition = "all 0.4s ease-out";
    // sliderRef.current.style.transform = `translateX(-${currentSlide - 1}00%)`;
    sliderRef.current.style.transform = `translateX(-${
      (currentSlide - 1) * 1084
    }px)`;

    // 배너 설명 컴포넌트 보이고 숨기기
    infoRef.current.style.animation = "0.4s ease-in-out";
    infoRef.current.style.opacity = 1;
    // infoRef.current.classList.add("visible");
  }, [currentSlide]);

  return (
    <StyledBanner>
      <CarouselWrapper>
        <Carousel ref={sliderRef}>
          {bannerData.map((data) => {
            const altText = `image${data.id}`;

            return (
              <CarouselContent>
                <img src={data.image} alt={altText} />
                <ContentInfo ref={infoRef}>
                  <h2>{data.title}</h2>
                  <h3>{data.subtitle}</h3>
                  <hr />
                  <div>
                    <InfoLink href="#">
                      <button>바로가기</button>
                      <svg viewBox="0 0 18 18">
                        <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                      </svg>
                    </InfoLink>
                  </div>
                </ContentInfo>
              </CarouselContent>
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

export default Banner;
