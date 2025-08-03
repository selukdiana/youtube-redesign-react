import { Icon } from "@iconify/react";
import Gussie from "../../imgs/gussie.png";
import Nora from "../../imgs/nora.png";
import Belle from "../../imgs/belle.png";
import Eunice from "../../imgs/eunice.png";
import Emma from "../../imgs/emma.png";
import Leah from "../../imgs/leah.png";
import "./Sidebar.css";
export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar__menu sidebar__items">
        <li className="sidebar__item">
          <a href="#">
            <Icon icon="meteor-icons:home" />
            <span>Home</span>
          </a>
        </li>
        <li className="sidebar__item">
          <a href="#">
            <Icon icon="meteor-icons:fire" />
            <span>Trending</span>
          </a>
        </li>
        <li className="sidebar__item">
          <a href="#">
            <Icon icon="material-symbols:subscriptions-outline" />

            <span>Subscriptions</span>
          </a>
        </li>
        <li className="sidebar__item">
          <a href="#">
            <Icon icon="meteor-icons:folder" />
            Library
          </a>
        </li>
      </ul>
      <ul className="sidebar__categories sidebar__items">
        <li className="sidebar__item">
          <a href="#">
            <Icon icon="meteor-icons:folder" />
            Library
          </a>
        </li>
        <li className="sidebar__item">
          <a href="#">
            <Icon icon="fluent:script-16-regular" />
            History
          </a>
        </li>
        <li className="sidebar__item">
          <a href="#">
            <Icon icon="fluent:clock-alarm-16-regular" />
            Watch later
          </a>
        </li>
        <li className="sidebar__item">
          <a href="#">
            <Icon icon="meteor-icons:star" />
            Favourites
          </a>
        </li>
        <li className="sidebar__item">
          <a href="#">
            <Icon icon="meteor-icons:heart" />
            Liked videos
          </a>
        </li>
        <li className="sidebar__item">
          <a href="#">
            <Icon icon="uil:music" />
            Music
          </a>
        </li>
        <li className="sidebar__item">
          <a href="#">
            <Icon icon="ion:game-controller-outline" />
            Games
          </a>
        </li>
        <li className="sidebar__item">
          <a href="#">
            <Icon icon="mdi:keyboard-arrow-down" />
            Show more
          </a>
        </li>
      </ul>
      <ul className="sidebar__subscriptions sidebar__items">
        <h3 className="title-second">Subscriptions</h3>
        <li className="sidebar__item">
          <a href="#">
            <span className="sidebar__img img__container">
              <img src={Gussie} alt="avatar" className="avatar__img" />{" "}
            </span>
            Gussie Singleton
          </a>
        </li>
        <li className="sidebar__item">
          <a href="#">
            <span className="sidebar__img img__container">
              <img src={Nora} alt="avatar" className="avatar__img" />{" "}
            </span>
            Nora Francis
          </a>
        </li>
        <li className="sidebar__item">
          <a href="#">
            <span className="sidebar__img img__container">
              <img src={Belle} alt="avatar" className="avatar__img" />{" "}
            </span>
            Belle Briggs
          </a>
        </li>
        <li className="sidebar__item">
          <a href="#">
            <span className="sidebar__img img__container">
              <img src={Eunice} alt="avatar" className="avatar__img" />{" "}
            </span>
            Eunice Cortez
          </a>
        </li>
        <li className="sidebar__item">
          <a href="#">
            <span className="sidebar__img img__container">
              <img src={Emma} alt="avatar" className="avatar__img" />{" "}
            </span>
            Emma Hanson
          </a>
        </li>
        <li className="sidebar__item">
          <a href="#">
            <span className="sidebar__img img__container">
              <img src={Leah} alt="avatar" className="avatar__img" />
            </span>
            Leah Berry
          </a>
        </li>
      </ul>
      <ul className="sidebar__other sidebar__items">
        <li className="sidebar__item">
          <a href="#">
            <Icon icon="mdi:settings-outline" />
            Settings
          </a>
        </li>
      </ul>
    </aside>
  );
};
