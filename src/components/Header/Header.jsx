import { Icon } from "@iconify/react";
import logo from "../../imgs/logo-black.png";
import avatar from "../../imgs/avatar.png";
import "./Header.css";

export const Header = ({ setIsSidebarOpen }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <div
          className="burger"
          onClick={() => setIsSidebarOpen((prev) => !prev)}
        >
          <div className="burger__line"></div>
          <div className="burger__line"></div>
          <div className="burger__line"></div>
        </div>
        <a href="channel.html">
          <img src={logo} alt="logo" height="25px" />
        </a>
      </div>
      <div className="header__main">
        <div className="header__search">
          <input type="text" className="search__input" placeholder="Search" />
          <button className="search__btn">
            <Icon icon="mingcute:search-line"></Icon>
          </button>
        </div>
        <div className="header__profile">
          <div className="profile__menu">
            <div className="profile__menu-icon">
              <Icon icon="material-symbols:videocam-outline-rounded"></Icon>
            </div>
            <div className="profile__menu-icon">
              <Icon icon="material-symbols:apps"></Icon>
            </div>
            <div className="profile__menu-icon notifications-icon">
              <Icon icon="flowbite:bell-outline"></Icon>
              <span className="notifications-count">3</span>
            </div>
          </div>
          <div className="profile__img img__container">
            <img src={avatar} alt="avatar" className="avatar__img" />
          </div>
          <div className="profile__menu-icon more-icon">
            <Icon icon="nrk:more" />
          </div>
        </div>
      </div>
    </header>
  );
};
