import clients from "../assets/svg/clients.svg";
import chevronDown from "../assets/svg/chevron-down.svg";
import dotsHorizontal from "../assets/svg/dots-horizontal.svg";
import searchLg from "../assets/svg/search-lg.svg";
import filter from "../assets/svg/filter.svg";
import date from "../assets/svg/date.svg";
import check from "../assets/svg/check.svg";
import sort from "../assets/svg/sort.svg";

const MainHeroSection = () => {
  return (
    <section className="flex flex-col gap-[8px] h-[1000px] w-full transition-all duration-[200ms] ease-in-out">
      {/* TOP CLIENTS SECTION */}
      <div className="flex justify-between items-center h-[60px] px-[24px] w-full rounded-[2px] bg-white dark:bg-[#121212]">
        {/* Left Section: Title and Icon */}
        <div className="flex gap-[12px]">
          <img src={clients} alt="Clients" className="w-[24px] h-[24px]" />
          <h3 className="font-medium text-[16px] leading-[22.4px] text-[#344054] dark:text-white">
            Clients
          </h3>
        </div>
        {/* Right Section: Branch Selector and Options */}
        <div className="flex gap-[24px]">
          {/* Branch Selector */}
          <div className="relative flex items-center gap-[8px]">
            <div className="relative w-full">
              <select className="appearance-none w-full py-[6px] px-2 pr-8 border-[0.5px] rounded border-[#D0D5DD] font-normal text-[12px] leading-[16.8px] text-[#667085] dark:text-white bg-transparent focus:outline-none">
                <option>Branch(Kathmandu)</option>
                <option>Branch(Pokhara)</option>
              </select>
              {/* Custom Arrow Icon */}
              <span className="absolute top-1/2 right-2 transform -translate-y-1/2 pointer-events-none">
                <img src={chevronDown} alt="Arrow Down" />
              </span>
            </div>
          </div>
          {/* Options Icon */}
          <img src={dotsHorizontal} alt="Dots Horizontal" />
        </div>
      </div>

      {/* BOTTOM MAIN DATA SECTION */}
      <div className="h-full w-full bg-white dark:bg-[#121212]">
        {/* Search Bar Section */}
        <div className="flex justify-between items-center h-[72px] px-[24px] border-b-[0.5px] border-[#EBEBF8]">
          <div className="flex gap-[20px]">
            {/* Search Input */}
            <div className="flex items-center gap-[6px] w-[220px] px-[8px] py-[6px] rounded border-[0.5px] border-[#D0D5DD]">
              <img
                src={searchLg}
                alt="Search Icon"
                className="w-[20px] h-[20px]"
              />
              <input
                type="text"
                placeholder="Search Particular"
                className="bg-transparent max-w-[85%] text-[12px] placeholder:text-[12px] font-normal placeholder:leading-[16.8px] placeholder:text-[#667085] focus:outline-none"
              />
            </div>
            <div className="flex gap-[20px]">
              {/* FILTER */}
              <div className="flex items-center gap-[8px] px-[12px] py-[8px] rounded border-[0.5px] border-[#D0D5DD]">
                <div className="flex gap-[6px] items-center">
                  <img
                    src={filter}
                    alt="Search Icon"
                    className="w-[20px] h-[20px]"
                  />
                  <div className="text-[12px] font-normal leading-[16.8px] text-[#667085] text-nowrap">
                    Filter by assigned
                  </div>
                </div>
                <img src={chevronDown} alt="Chevron Down" />
              </div>

              {/* DATE */}
              <div className="flex items-center gap-[8px] px-[12px] py-[8px] rounded border-[0.5px] border-[#D0D5DD]">
                <div className="flex gap-[6px] items-center">
                  <img
                    src={date}
                    alt="Search Icon"
                    className="w-[20px] h-[20px]"
                  />
                  <div className="text-[12px] font-normal leading-[16.8px] text-[#667085]">
                    Date
                  </div>
                </div>
                <img src={chevronDown} alt="Chevron Down" />
              </div>

              {/* STATUS */}
              <div className="flex items-center gap-[8px] px-[12px] py-[8px] rounded border-[0.5px] border-[#D0D5DD]">
                <div className="flex gap-[6px] items-center">
                  <img
                    src={check}
                    alt="Search Icon"
                    className="w-[20px] h-[20px]"
                  />
                  <div className="text-[12px] font-normal leading-[16.8px] text-[#667085]">
                    Status
                  </div>
                </div>
                <img src={chevronDown} alt="Chevron Down" />
              </div>
            </div>
          </div>
          {/* RIGHT CLEAR SECTION */}
          <div className="flex items-center gap-[36px]">
            {/* FILTER,SORT,SAVED FILTER */}
            <div className="flex items-center gap-[20px]">
              {/* FILTER */}
              <div className="flex gap-[6px] items-center">
                <img src={filter} alt="Filter" className="w-[20px] h-[20px]" />
                <div className="text-[12px] font-normal leading-[16.8px] text-[#667085]">
                  Status
                </div>
              </div>
              {/* DIVIDER */}
              <div className="h-[20px] border-[1px] border-[#667085]" />
              {/* SORT */}
              <div className="flex gap-[6px] items-center">
                <img src={sort} alt="Filter" className="w-[20px] h-[20px]" />
                <div className="text-[12px] font-normal leading-[16.8px] text-[#667085]">
                  Sort
                </div>
              </div>
              {/* DIVIDER */}
              <div className="h-[20px] border-[1px] border-[#667085]" />
              {/* SAVED FILTER */}
              <div className="flex gap-[6px] items-center">
                <img src={filter} alt="Filter" className="w-[20px] h-[20px]" />
                <div className="text-[12px] font-normal leading-[16.8px] text-[#667085]">
                  Saved Filter
                </div>
              </div>
            </div>
            <div className="font-medium text-[14px] leading-[19.6px] text-[#4786E7]">
              Clear
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHeroSection;
