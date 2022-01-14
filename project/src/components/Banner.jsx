import React from "react";

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
    content: "사랑받는 디자인의 비밀",
  },
  {
    id: 2,
    title: "마케터를 위한 데이터",
    content: "잘 나가는 마케터는 무엇이 다를까!?",
  },
  {
    id: 3,
    title: "요즘 MD가 일하는 방법",
    content: "실무자가 공개하는 MD 커리어의 모든 것!",
  },
  {
    id: 4,
    title: "개발자 성장 비결 공개!",
    content: "글 쓰는 개발자들의 이야기",
  },
  {
    id: 5,
    title: "나도 개발자 되고 싶다",
    content: "프론트엔드 무료 교육과정 참여하기",
  },
  {
    id: 6,
    title: "리크루터 커리어 가이드",
    content: "싼마이 리크루터가 되지 않기 위해",
  },
  {
    id: 7,
    title: "유저 경험을 설계하라!",
    content: "문제를 해결하는 프로덕트 디자인",
  },
  {
    id: 8,
    title: "아는 만큼 보인다!",
    content: "노동법 '채용' 시리즈",
  },
  {
    id: 9,
    title: "해, 커리어 EP 02 공개",
    content: "최종 발표를 위한 마지막 관문 2라운드의 승자는?",
  },
  {
    id: 10,
    title: "믿을 것은 데이터 뿐!",
    content: "요즘 데이터팀은 어떻게 일할까?",
  },
  {
    id: 11,
    title: "Git? GitHub?",
    content: "협업 필수 도구 마스터하기",
  },
];

const Banner = () => {
  return (
    <section className="banner">
      <div className="carousel-container">
        <div>
          <button>{"<"}</button>
        </div>

        <div className="carousel">
          <article>
            <img src={img1} alt="image1" />
          </article>
          <article>
            <img src={img2} alt="image2" />
          </article>
          <article>
            <img src={img3} alt="image3" />
          </article>
          <div>
            <button>{">"}</button>
          </div>
          {/* <div>
            <img
              src="https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg"
              alt="image4"
            />
          </div>
          <div>
            <img
              src="https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg"
              alt="image5"
            />
          </div>
          <div>
            <img
              src="https://static.wanted.co.kr/images/banners/1453/7a978579.jpg"
              alt="image6"
            />
          </div>
          <div>
            <img
              src="https://static.wanted.co.kr/images/banners/1435/6cdcea85.jpg"
              alt="image7"
            />
          </div>
          <div>
            <img
              src="https://static.wanted.co.kr/images/banners/1454/e504b006.jpg"
              alt="image8"
            />
          </div>
          <div>
            <img
              src="https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg"
              alt="image9"
            />
          </div>
          <div>
            <img
              src="https://static.wanted.co.kr/images/banners/1451/725c6862.jpg"
              alt="image10"
            />
          </div>
          <div>
            <img
              src="https://static.wanted.co.kr/images/banners/1452/be4ec643.jpg"
              alt="image11"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Banner;
