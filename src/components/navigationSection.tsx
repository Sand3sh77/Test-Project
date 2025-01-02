import { useState } from "react";
import chevronDown from "../assets/svg/chevron-down.svg";
import searchLg from "../assets/svg/search-lg.svg";
import chevronLeft from "../assets/svg/chevron-left.svg";
import dotsHorizontal from "../assets/svg/dots-horizontal.svg";
import navigationButtons, {
  NavigationButton,
} from "../constants/navigationButtons";

const NavigationSection = () => {
  const [collapsed, setCollapsed] = useState(false);

  const renderButtons = (button: NavigationButton) => {
    return (
      <button
        key={button.id}
        className={`w-full flex items-center justify-between py-[8px] px-[12px] rounded-[2px] text-[#475467]  transition-all duration-[200ms] ease-in-out ${
          button.selected
            ? "bg-[#EBEBF8] "
            : "hover:bg-[#F8F9FB] dark:text-white"
        } ${collapsed && "justify-evenly"} `}
      >
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
        {!collapsed && <img src={dotsHorizontal} alt="Three Dots" />}
      </button>
    );
  };

  return (
    <section className="h-[1000px] bg-white dark:bg-[#121212] transition-[width] duration-[800ms] ease-in-out">
      {/* TOP SECTION */}
      <div
        className={`relative flex justify-between pl-[24px] ${
          collapsed && "pl-[15px]"
        }`}
      >
        <div className="flex gap-2 py-[12px]">
          <h3 className="text-[16px] leading-[22.4px] font-medium text-[#475467] dark:text-white">
            CRM
          </h3>
          {!collapsed && <img src={chevronDown} alt="Arrow Down Icon" />}
        </div>

        <span
          onClick={() => setCollapsed(!collapsed)}
          className="absolute top-0 right-0 flex items-center justify-center h-[28px] w-[28px] bg-[#9696A4A8] cursor-pointer"
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
        className={`p-[24px] pt-[8px] flex flex-row gap-[10px] transition-all duration-[800ms] ease-in-out ${
          collapsed ? "p-[10px]" : ""
        }`}
      >
        <div
          className={`flex flex-col gap-[24px] ${
            collapsed ? "w-[50px]" : "w-[192px]"
          }`}
        >
          {/* SEARCH BAR */}
          <div className="w-full px-[12px] py-[8px] rounded border-[0.5px] border-[#D0D5DD] flex justify-between">
            <div className="flex gap-[12px] overflow-hidden">
              <img src={searchLg} alt="Search Icon" />
              {!collapsed && (
                <input
                  type="text"
                  placeholder="Search"
                  className="max-w-[72%] placeholder:text-[14px] font-normal placeholder:leading-[19.6px] placeholder:text-[#667085] bg-transparent focus:outline-none"
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
