import React from "react";
import styled from "styled-components";

const NavBar = () => {
  return (
    <StyledHeader>
      <GNB>
        <NavLeft>
          <div>
            <MenuButton>
              <img
                src="https://static.wanted.co.kr/images/icon-menu.png"
                alt="menu button"
              />
            </MenuButton>
            <MainLogo href="#">
              <img src="img/wanted-logo.png" alt="wanted logo" />
            </MainLogo>
          </div>
        </NavLeft>
        <NavCenter>
          <NavMenu>
            <li>
              <a href="#">홈</a>
            </li>
            <li>
              <a href="#">채용</a>
            </li>
            <li>
              <a href="#">이벤트</a>
            </li>
            <li>
              <a href="#">직군별 연봉</a>
            </li>
            <li>
              <a href="#">이력서</a>
            </li>
            <li>
              <a href="#">
                커뮤니티
                <MenuDecoText>New</MenuDecoText>
              </a>
            </li>
            <li>
              <a href="#">프리랜서</a>
            </li>
            <li>
              <a href="#">
                AI 합격예측
                <MenuDecoText>Beta</MenuDecoText>
              </a>
            </li>
          </NavMenu>
        </NavCenter>
        <NavRight>
          <ul>
            <li>
              <SearchButton>
                <svg
                  xmlns="https://www.w3.org/2000/svg"
                  xlink="https://www.w3.org/1999/xlink"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <defs>
                    <path
                      id="qt2dnsql4a"
                      d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z"
                    ></path>
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <use
                      fill="#333"
                      fillRule="nonzero"
                      stroke="#333"
                      strokeWidth=".3"
                      href="#qt2dnsql4a"
                    ></use>
                  </g>
                </svg>
              </SearchButton>
            </li>
            <li>
              <NoticeButton>
                <svg
                  xmlns="https://www.w3.org/2000/svg"
                  xlink="https://www.w3.org/1999/xlink"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <defs>
                    <path
                      id="bpnpn3yn0a"
                      d="M7.554 14.813h3.183a1.689 1.689 0 01-3.183 0zm1.592 2.25a2.813 2.813 0 002.812-2.813.563.563 0 00-.562-.563h-7.5c-.31 0-.541-.014-.699-.04.018-.036.04-.077.066-.123.036-.065.354-.605.46-.8.477-.875.735-1.676.735-2.599V6.75c0-2.656 2.057-4.688 4.688-4.688 2.63 0 4.687 2.032 4.687 4.688v3.375c0 .923.258 1.724.736 2.6.106.194.424.734.46.799.026.046.047.087.065.123-.157.026-.389.04-.698.04a.564.564 0 000 1.126c1.263 0 1.896-.221 1.896-1.002 0-.26-.092-.494-.28-.833-.045-.083-.361-.619-.456-.792-.395-.724-.598-1.355-.598-2.061V6.75c0-3.28-2.563-5.813-5.812-5.813S3.333 3.47 3.333 6.75v3.375c0 .706-.203 1.337-.598 2.06-.094.174-.41.71-.456.793-.188.339-.279.572-.279.833 0 .78.632 1.002 1.896 1.002H6.39a2.813 2.813 0 002.756 2.25z"
                    ></path>
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <g transform="translate(-1079 -16) translate(224 7) translate(855 9)">
                      <mask id="1dencd96ob" fill="#fff">
                        <use href="#bpnpn3yn0a"></use>
                      </mask>
                      <use
                        fillRule="nonzero"
                        stroke="currentColor"
                        stroke-width=".3"
                        href="#bpnpn3yn0a"
                      ></use>
                      <g fill="currentColor" mask="url(#1dencd96ob)">
                        <path d="M0 0H18V18H0z"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </NoticeButton>
            </li>
            <li style={{ display: "inline-flex" }}>
              <UserButton>
                <UserBorder>
                  <UserImage></UserImage>
                </UserBorder>
              </UserButton>
              <UserBadge style={{ position: "absolute" }}>
                <svg width="5" height="5" viewBox="0 0 6 6">
                  <g fill="#fff" fillRule="nonzero">
                    <path
                      d="M6.647 11L6.647 7.259 6.688 7.259 9.158 11 11 11 11 5 9.353 5 9.353 8.357 9.322 8.357 7.089 5 5 5 5 11z"
                      transform="translate(-123 -375) translate(20 365) translate(98 5)"
                    ></path>
                  </g>
                </svg>
              </UserBadge>
            </li>
            <li style={{ padding: 0 }}>
              <Divider />
            </li>
            <li>
              <CorpServiceButton>기업 서비스</CorpServiceButton>
            </li>
            <li>
              <SideMenuButton>
                <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <path
                      d="M9 7.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 9 7.5zm5.05 0a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 14.05 7.5zM4 7.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 4 7.5z"
                      id="a"
                    ></path>
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <mask id="b" fill="#fff">
                      <use href="#a"></use>
                    </mask>
                    <use fill="#333" href="#a"></use>
                    <g mask="url(#b)" fill="#333">
                      <path d="M0 0h18v18H0z"></path>
                    </g>
                  </g>
                </svg>
              </SideMenuButton>
            </li>
          </ul>
        </NavRight>
      </GNB>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
  @media (min-width: 768px) and (max-width: 991px) {
    height: 110px;
  }
  @media (max-width: 767px) {
    height: 110px;
  }
`;

const GNB = styled.nav`
  max-width: 1060px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  text-align: center;

  @media (min-width: 992px) and (max-width: 1199px) {
    width: 90%;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 90%;
    flex-wrap: wrap;
  }
  @media (max-width: 767px) {
    width: 100%;
    flex-wrap: wrap;
  }
`;

const MenuButton = styled.button`
  width: 17px;
  height: 14px;
  margin-top: -2px;
  margin-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;
const MainLogo = styled.a`
  display: block;
  img {
    width: 78px;
    height: 20px;
  }
`;
const RegisterButton = styled.button`
  display: none;
  padding: 0 14px;
  height: 34px;
  color: #36f;
  font-size: 14px;
  line-height: 32px;
  border: 1px solid #36f;
  border-radius: 17px;

  @media (max-width: 991px) {
    display: inline-block;
  }
`;

const NavLeft = styled.div`
  div {
    height: 100%;
    display: flex;
    align-items: center;
  }

  button,
  a {
    cursor: pointer;
  }
  @media (max-width: 991px) {
    width: 100%;
    height: 60px;
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 767px) {
    padding: 15px 20px;
  }
`;
const NavCenter = styled.div`
  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    li {
      width: max-content;
    }
  }
  @media (min-width: 992px) and (max-width: 1100px) {
    width: 100%;
    ul {
      justify-content: space-evenly;
    }

    li > a {
      font-size: 13px;
      padding: 15px 0;
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    justify-content: flex-start;
    li {
      height: inherit;
    }

    li > a {
      font-size: 13px;
      padding: 11px 10px 19px;
    }
  }
`;
const NavMenu = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: row;

  a {
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 600;
    padding: 15px;
    cursor: pointer;
    position: relative;
  }
  li:first-child {
    display: none;
  }
  @media (max-width: 767px) {
    li {
      display: none;
    }
    li:nth-child(1),
    li:nth-child(2),
    li:nth-child(3) {
      display: inline-block;
    }
    li:nth-child(1) > a {
      padding-left: 20px;
    }
  }
`;
const MenuDecoText = styled.span`
  width: 18px;
  height: 11px;
  font: "AppleSDGothicNeo-SemiBold", "Apple SD Gothic Neo";
  font-size: 9px;
  font-weight: 500;
  color: #36f;
  margin: 0;

  position: absolute;
  top: 10px;
  right: -5px;

  @media (min-width: 992px) and (max-width: 1100px) {
    right: -20px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    top: 5px;
    right: -7px;
  }
`;
const NavRight = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  li {
    position: relative;
    padding: 0 5px;
  }
  button {
    cursor: pointer;
  }
  @media (min-width: 1200px) {
    li {
      padding: 0 10px;
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    li {
      width: max-content;
    }
  }
  @media (min-width: 992px) and (max-width: 1100px) {
    li > a {
      font-size: 13px;
    }
  }
  @media (max-width: 1199px) {
    ul > li:nth-child(3),
    ul > li:nth-child(4),
    ul > li:nth-child(5),
    ul > li:nth-child(6) {
      padding: 0;
    }
  }
`;

const SearchButton = styled.button`
  margin-top: 5px;
`;
/*
const RegisterLoginButton = styled.button`
  height: 100%;
  font-size: 14px;
  font-weight: 600;
  text-align: center;

  @media (max-width: 991px) {
    display: none;
  }
`;
*/
const NoticeButton = styled.button`
  width: 18px;
  height: 18px;
  margin-top: 5px;
`;
const UserButton = styled.button`
  width: 32px;
  height: 32px;
  padding: 0;
  @media (max-width: 991px) {
    display: none;
  }
`;
const UserBorder = styled.div`
  border: 1px solid #e1e2e3;
  border-radius: 50%;
  background-color: #fff;
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const UserImage = styled.div`
  background-image: url(https://static.wanted.co.kr/images/profile_default.png);
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-size: cover;
  background-repeat: no-repeat;
`;
const UserBadge = styled.span`
  width: 13px;
  height: 13px;
  background: #36f;
  border-radius: 5px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  top: -2px;
  left: 22px;
  @media (min-width: 1199px) {
    left: 32px;
  }
  @media (max-width: 991px) {
    display: none;
  }
`;
const CorpServiceButton = styled.button`
  font-size: 13px;
  font-weight: 400;
  padding: 0 10px;
  height: 30px;
  line-height: 30px;
  color: #666;
  border: 1px solid #e1e2e3;
  border-radius: 15px;
  display: flex;
  align-items: center;

  @media (max-width: 991px) {
    display: none;
  }
`;
const Divider = styled.div`
  content: "";
  display: block;
  width: 1px;
  height: 10px;
  background-color: #e1e2e3;
  margin: auto 10px;
  padding: 0 !important;

  @media (max-width: 991px) {
    display: none;
  }
`;
const SideMenuButton = styled.button`
  display: none;
  svg {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 991px) {
    display: inline-block;
    padding-left: 10px;
    margin-right: 10px;
  }
`;

export default NavBar;
