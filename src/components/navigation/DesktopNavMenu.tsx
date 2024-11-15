/* eslint-disable jsx-a11y/anchor-is-valid */

import { NavMenu } from "../../helpers/NavMenu";
import DemoSection from "./DemoSection";
import ChevronDownIcon from "../../assets/icons/chevron-down-icon.svg";

const DesktopNavMenu = () => {
  return (
    <div className="desktop-menu">
      <ul>
        {NavMenu.map((item, index) => (
          <li key={index} className="menu-item">
            <a href="#" className="text-sm-plus">
              {item.name}
            </a>
            {item.subMenu && (
              <>
                <img
                  src={ChevronDownIcon}
                  alt="chevron-down-icon"
                  className="chevron-icon"
                />
                <div className="dropdown">
                  <div className="submenu-grid">
                    {item.subMenuHeading.map((heading, headingIndex) => (
                      <div key={headingIndex} className="submenu-group">
                        <span className="text-sm">{heading}</span>
                        <ul className="submenu-items">
                          {item.subMenu
                            .filter((subItem) => subItem.category === heading)
                            .map((subItem, subIndex) => (
                              <li key={subIndex} className="submenu-item">
                                <img
                                  src={subItem.icon}
                                  alt={`${subItem.name} icon`}
                                  className="submenu-icon"
                                />
                                <span className="text-sm-plus submenu-name">
                                  {subItem.name}
                                </span>
                              </li>
                            ))}
                        </ul>
                      </div>
                    ))}
                    <DemoSection />
                  </div>

                  {item.sidebarMenu && (
                    <div className="sidebar">
                      <span className="text-sm sidebar-heading">
                        {item.sidebarHeading}
                      </span>
                      {item.sidebarMenu.map((sidebarItem, sidebarIndex) => (
                        <div key={sidebarIndex} className="sidebar-item">
                          <img
                            src={sidebarItem.icon}
                            alt={`${sidebarItem.name} icon`}
                            className="sidebar-icon"
                          />
                          <a href="#" className="text-sm-plus sidebar-name">
                            {sidebarItem.name}
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DesktopNavMenu;
