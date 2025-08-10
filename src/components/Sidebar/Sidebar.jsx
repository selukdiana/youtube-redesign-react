import { SidebarItem } from "./SidebarItem";
import {
  sidebarMenuItems,
  sidebarCategoriesItems,
  sidebarSubscriptionsItems,
} from "../../constants";
import "./Sidebar.css";

export const Sidebar = ({ isSidebarOpen }) => {
  const className = isSidebarOpen ? "" : " hidden";
  return (
    <aside className={"sidebar" + className}>
      <ul className="sidebar__menu sidebar__items">
        {sidebarMenuItems.map((item) => (
          <SidebarItem item={item} key={item.name} />
        ))}
      </ul>
      <ul className="sidebar__categories sidebar__items">
        {sidebarCategoriesItems.map((item) => (
          <SidebarItem item={item} key={item.name} />
        ))}
      </ul>
      <ul className="sidebar__subscriptions sidebar__items">
        <h3 className="title-second">Subscriptions</h3>
        {sidebarSubscriptionsItems.map((item) => (
          <SidebarItem item={item} key={item.name} />
        ))}
      </ul>
      <ul className="sidebar__other sidebar__items">
        <SidebarItem
          item={{ name: "Settings", iconName: "mdi:settings-outline" }}
        />
      </ul>
    </aside>
  );
};
