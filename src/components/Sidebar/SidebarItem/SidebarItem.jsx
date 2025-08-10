import { Icon } from "@iconify/react";
import "./SidebarItem.css";

export const SidebarItem = ({ item: { name, iconName, src } }) => {
  return (
    <li className="sidebar__item">
      <a href="#">
        {src ? (
          <span className="sidebar__img img__container">
            <img src={src} alt="avatar" className="avatar__img" />
          </span>
        ) : (
          <Icon icon={iconName} />
        )}
        <span>{name}</span>
      </a>
    </li>
  );
};
