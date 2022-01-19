import React from "react";
import styled from "styled-components";

const CarouselContent = ({ data }) => {
  return (
    <Content>
      <div>
        <img src={data.image} alt={`banner${data.id}`} />
        <ContentInfo>
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
      </div>
    </Content>
  );
};

const Content = styled.article`
  padding: 0 12px;
  box-sizing: content-box;
  position: relative;
  div {
    width: 90.5vw;
  }

  img {
    border-radius: 4px;
  }
  @media (min-width: 1200px) {
    div {
      max-width: 1060px;
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
  }
`;
const ContentInfo = styled.div`
  width: 100%;
  height: 146px;
  background-color: #fff;
  border-radius: 4px;
  position: absolute;
  bottom: 28px;
  left: 34px;
  opacity: 1;

  h2 {
    color: #333;
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
    margin-top: 20px;
  }
  h3 {
    color: #666;
    font-size: 13px;
    font-weight: 500;
    line-height: 1.15;
    margin-top: 6px;
  }
  hr {
    border: 0;
    height: 1px;
    background-color: #ececec;
  }

  @media (min-width: 1200px) {
    width: 330px !important;

    h2 {
      font-size: 20px;
      line-height: 1.5;
      margin: 20px 20px 0 20px;
    }
    h3 {
      height: 44px;
      font-size: 14px;
      line-height: 1.64;
      margin: 0 20px;
    }
  }
  @media (max-width: 1199px) {
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    div:last-child {
      display: flex;
      justify-content: center;
    }
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

export default CarouselContent;
