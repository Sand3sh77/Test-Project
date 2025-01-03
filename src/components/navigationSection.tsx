import { useState } from "react";
import chevronDown from "../assets/svg/chevron-down.svg";
import searchLg from "../assets/svg/search-lg.svg";
import chevronLeft from "../assets/svg/chevron-left.svg";
import dotsHorizontal from "../assets/svg/dots-horizontal.svg";
import navigationButtons, {
  NavigationButton,
} from "../data/navigationButtons";

const NavigationSection = () => {
  const [collapsed, setCollapsed] = useState(false);

  // Renders individual navigation buttons
  const renderButtons = (button: NavigationButton) => {
    return (
      <button
        key={button.id}
        className={`flex items-center justify-between w-full ${
          collapsed ? "justify-around py-[12px]" : "py-[8px]"
        } px-[12px] rounded-[2px] text-[#475467] transition-all duration-[200ms] ease-in-out ${
          button.selected
            ? "bg-[#EBEBF8]"
            : "hover:bg-[#F8F9FB] dark:text-white dark:hover:bg-[#1E1E1E]"
        }`}
      >
        {/* Button Content */}
        <div className="flex items-center gap-[12px]">
          <img src={button.icon} alt={button.name} />
          <span
            className={`font-medium text-[12px] leading-[16.8px] ${
              collapsed ? "hidden" : ""
            }`}
          >
            {button.name}
          </span>
        </div>
        {/* Optional Dots Icon */}
        {!collapsed && <img src={dotsHorizontal} alt="Three Dots" />}
      </button>
    );
  };

  return (
    <section className="h-[1000px] bg-white dark:bg-[#121212] transition-[width] duration-[800ms] ease-in-out">
      {/* TOP SECTION */}
      <div
        className={`relative flex justify-between ${
          collapsed ? "pl-[15px]" : "pl-[24px]"
        }`}
      >
        {/* Title and Collapse Icon */}
        <div className="flex gap-2 py-[12px]">
          <h3 className="text-[16px] leading-[22.4px] font-medium text-[#475467] dark:text-white">
            CRM
          </h3>
          {!collapsed && <img src={chevronDown} alt="Arrow Down Icon" />}
        </div>

        {/* Collapse Button */}
        <span
          onClick={() => setCollapsed(!collapsed)}
          className="absolute top-0 right-0 flex items-center justify-center w-[28px] h-[28px] bg-[#9696A4A8] cursor-pointer"
        >
          <img
            src={chevronLeft}
            alt="Arrow Left Icon"
            className={collapsed ? "rotate-180" : "rotate-0"}
          />
        </span>
      </div>

      {/* BOTTOM SECTION */}
      <div
        className={`flex flex-row gap-[10px] ${
          collapsed ? "p-[10px]" : "p-[24px] pt-[8px]"
        } transition-all duration-[800ms] ease-in-out`}
      >
        <div
          className={`flex flex-col gap-[24px] ${
            collapsed ? "w-[50px]" : "w-[192px]"
          }`}
        >
          {/* SEARCH BAR */}
          <div className="flex justify-between w-full px-[12px] py-[8px] rounded border-[0.5px] border-[#D0D5DD]">
            <div className="flex gap-[12px] overflow-hidden">
              <img
                src={searchLg}
                alt="Search Icon"
                className="w-[24px] h-[24px]"
              />
              {!collapsed && (
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent max-w-[72%] text-[14px] placeholder:text-[14px] font-normal placeholder:leading-[19.6px] placeholder:text-[#667085] focus:outline-none"
                />
              )}
            </div>
            {!collapsed && <img src={dotsHorizontal} alt="Three Dots" />}
          </div>

          {/* NAVIGATION BUTTONS */}
          <div className="w-full">
            {navigationButtons.map((button) => renderButtons(button))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavigationSection;
