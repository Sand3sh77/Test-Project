import dotsGrid from "../assets/svg/dots-grid.svg";
import plus from "../assets/svg/plus.svg";
import bell from "../assets/svg/bell.svg";
import mail from "../assets/svg/mail.svg";
import settings from "../assets/svg/settings.svg";
import moon from "../assets/svg/moon.svg";
import sun from "../assets/svg/sun.svg";
import arrowDown from "../assets/svg/arrow-down.svg";
import React from "react";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <section className="w-full h-[72px] px-[30px] flex justify-between items-center bg-white dark:bg-[#121212] transition-all duration-[200ms] ease-in-out">
      {/* Left Section: Project Title and Icon */}
      <div id="navLeft" className="flex items-center gap-[16px] w-[635.75px]">
        <img src={dotsGrid} alt="Dots Grid" className="w-[24px] h-[24px]" />
        <h2 className="text-[#101828] font-semibold text-[20px] leading-[28px] dark:text-white">
          Test Project
        </h2>
      </div>

      {/* Right Section: Action Icons and User Profile */}
      <div id="navRight" className="flex items-center gap-[24px]">
        {/* Plus Icon */}
        <img src={plus} alt="Plus Icon" />

        {/* Notification Bell with Badge */}
        <div className="relative">
          <img src={bell} alt="Bell Icon" />
          <div className="absolute -top-[4px] -right-[0.5px] w-[14px] h-[14px] bg-[#4AC86E] rounded-full flex items-center justify-center">
            <span className="text-white font-medium text-[8px] leading-[22px]">
              2
            </span>
          </div>
        </div>

        {/* Mail and Settings Icons */}
        <img src={mail} alt="Mail Icon" />
        <img src={settings} alt="Settings Icon" />

        {/* Dark Mode Toggle, Avatar, and Dropdown */}
        <div className="flex items-center gap-[4px]">
          <div className="flex items-center gap-[24px]">
            {/* Vertical Divider */}
            <div className="h-[28px] border-[1px] border-[#344054] w-[1px]" />

            {/* Dark Mode Toggle */}
            {darkMode ? (
              <img
                onClick={toggleDarkMode}
                src={sun}
                alt="Sun Icon"
                className="cursor-pointer"
              />
            ) : (
              <img
                onClick={toggleDarkMode}
                src={moon}
                alt="Moon Icon"
                className="cursor-pointer"
              />
            )}

            {/* User Avatar */}
            <img
              src="/images/avatar.png"
              alt="Avatar"
              className="w-[40.5px] h-[40.5px] rounded-full"
            />
          </div>

          {/* Dropdown Arrow */}
          <img src={arrowDown} alt="Arrow Down Icon" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
