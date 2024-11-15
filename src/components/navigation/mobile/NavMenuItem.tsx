/* eslint-disable jsx-a11y/anchor-is-valid */

import useSubMenu from "../../../hooks/useSubMenu";
import FooterNavMenu from "./FooterNavMenu";
import { NavMenu } from "../../../helpers/NavMenu";

import Logo from "../../../assets/mobile-logo.svg";
import CloseIcon from "../../../assets/icons/close-white-icon.svg";
import ChevronDownIcon from "../../../assets/icons/chevron-down-mobile-icon.svg";

interface NavMenuItemProps {
  toggleMenu: () => void;
}

const NavMenuItem = ({ toggleMenu }: NavMenuItemProps) => {
  const { openSubMenu, toggleSubMenu } = useSubMenu();

  return (
    <div className="wrapper-menu-item-mobile">
      <div className="header-menu-item-mobile">
        <a href="/">
          <img src={Logo} alt="logo-oasis" />
        </a>

        <div className="right-col-menu">
          <a href="#" className="text-sm-plus">
            Log in
          </a>

          <button onClick={toggleMenu} className="btn-nav-menu">
            <img src={CloseIcon} alt="menu-icon" />
          </button>
        </div>
      </div>

      <ul className="wrapper-main-nav-item">
        {NavMenu.map((item, index) => (
          <li key={index} className="menu-nav-item-mobile">
            <a className="text-base" href="#">
              {item.name}
            </a>

            {item.subMenu && (
              <>
                <button
                  onClick={() => toggleSubMenu(index)}
                  className="submenu-mobile-chevron-down"
                >
                  <img
                    src={ChevronDownIcon}
                    alt="chevron-down-icon"
                    className="chevron-icon"
                  />
                </button>

                {openSubMenu === index && (
                  <ul className="submenu-mobile-wrapper">
                    {/* This is a new ul for submenu */}
                    {item.subMenuHeading?.map((heading, headingIndex) => (
                      <li
                        key={headingIndex}
                        className="submenu-mobile-group-wrapper"
                      >
                        <span className="text-sm-plus">{heading}</span>
                        <ul>
                          {item.subMenu
                            .filter((subItem) => subItem.category === heading)
                            .map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <img
                                  src={subItem.icon}
                                  alt={`${subItem.name} icon`}
                                  className="submenu-mobile-icon"
                                />
                                <a href="#">{subItem.name}</a>
                              </li>
                            ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </li>
        ))}
      </ul>

      <FooterNavMenu />
    </div>
  );
};

export default NavMenuItem;
