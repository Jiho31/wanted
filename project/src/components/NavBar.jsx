import React from "react";
import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header>
      <nav>
        <div className={classes["nav-left"]}>
          <div
            style={{
              width: "17px",
              height: "14px",
            }}
          >
            <button className={classes["menu-button"]}>
              <img
                src="https://static.wanted.co.kr/images/icon-menu.png"
                alt="menu button"
              />
            </button>
          </div>
          <div
            style={{
              width: "74px",
              height: "19px",
              marginLeft: "15px",
            }}
          >
            <a href="#">
              <img
                src="img/wanted-logo.png"
                alt="wanted logo"
                style={{ width: "74px", height: "19px" }}
              />
            </a>
          </div>
        </div>
        <div className={classes["nav-center"]}>
          <ul className={classes["nav-menu"]}>
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
              <a href="#">커뮤니티</a>
              <div className={classes["menu-deco-text"]}>New</div>
            </li>
            <li>
              <a href="#">프리랜서</a>
            </li>
            <li>
              <a href="#">AI 합격예측</a>
              <div className={classes["menu-deco-text"]}>Beta</div>
            </li>
          </ul>
        </div>
        <div className={classes["nav-right"]}>
          <button className={classes["search-button"]}>
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
          </button>
          <div>
            <button className={classes["login-button"]}>회원가입/로그인</button>
          </div>
          <div>
            <button className={classes["corp-service-button"]}>
              기업 서비스
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
