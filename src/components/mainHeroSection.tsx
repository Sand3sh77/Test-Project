import clients from "../assets/svg/clients.svg";
import chevronDown from "../assets/svg/chevron-down.svg";
import chevronDownWhite from "../assets/svg/chevron-down-white.svg";
import dotsHorizontal from "../assets/svg/dots-horizontal.svg";
import searchLg from "../assets/svg/search-lg.svg";
import filter from "../assets/svg/filter.svg";
import dateIcon from "../assets/svg/date.svg";
import check from "../assets/svg/check.svg";
import sort from "../assets/svg/sort.svg";
import { columns } from "../data/columns";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { UserDataProps } from "../hooks/useUserData";
import EditableCell from "./editableCell";
import useUserData from "../hooks/useUserData";

const MainHeroSection = () => {
  const { userData, setUserData } = useUserData();

  const rowsWithAddClient: UserDataProps[] = [
    ...userData,
    {
      id: "addClientRow",
      userData: {
        name: "+ Add Client's Details",
        email: "",
        avatar: "",
      },
      addedFrom: "",
      tags: "",
      internalId: "",
      clientId: "",
      phone: "",
      clientPortal: "",
      assignee: {},
      followers: "",
      status: "",
      applications: "",
      lastUpdated: "",
    } as UserDataProps,
  ];

  const addNewData = () => {
    const random = Math.ceil(Math.random() * 9);
    const avatarUrl = `https://randomuser.me/api/portraits/lego/${random}.jpg`;

    const date = new Date();
    const currentDate = `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()}`;

    const newData: UserDataProps = {
      id: (userData.length + 1).toString(),
      userData: {
        name: `New Client ${random}`,
        email: `newclient${random}@example.com`,
        avatar: avatarUrl,
      },
      addedFrom: "System",
      tags: "-",
      internalId: "ID296",
      clientId: "-",
      phone: "+9779867****",
      clientPortal: "Deactivated",
      assignee: {
        name: "John Doe",
        avatar: "/images/assignee.png",
        desc: "Project Manager",
      },
      followers: random.toString(),
      status: "In Progress",
      applications: random.toString(),
      lastUpdated: currentDate,
    };

    setUserData((prevData) => [...prevData, newData]);
  };

  const handleRowUpdate = (updatedRow: any) => {
    setUserData((prevData) =>
      prevData.map((row) => (row.id === updatedRow.id ? updatedRow : row))
    );
  };

  return (
    <section className="flex flex-col gap-2 min-h-screen w-full transition-all duration-200 ease-in-out">
      {/* TOP CLIENTS SECTION */}
      <div className="flex justify-between items-center h-[60px] px-6 w-full rounded-[2px] bg-white dark:bg-[#121212]">
        {/* Left Section: Title and Icon */}
        <div className="flex gap-3">
          <img src={clients} alt="Clients" className="w-6 h-6" />
          <h3 className="font-medium text-[16px] leading-[22.4px] text-[#344054] dark:text-white">
            Clients
          </h3>
        </div>

        {/* Right Section: Branch Selector and Options */}
        <div className="flex gap-6">
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
      <div className="min-h-[95vh] pb-[50px] w-full bg-white dark:bg-[#121212]">
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
                className="bg-transparent max-w-[85%] text-[12px] placeholder:text-[12px] font-normal placeholder:leading-[16.8px] placeholder:text-[#667085] focus:outline-none dark:placeholder:text-[#adabab]"
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
                  <div className="text-[12px] font-normal leading-[16.8px] text-[#667085] text-nowrap dark:text-white">
                    Filter by assigned
                  </div>
                </div>
                <img src={chevronDown} alt="Chevron Down" />
              </div>

              {/* DATE */}
              <div className="flex items-center gap-[8px] px-[12px] py-[8px] rounded border-[0.5px] border-[#D0D5DD]">
                <div className="flex gap-[6px] items-center">
                  <img
                    src={dateIcon}
                    alt="Search Icon"
                    className="w-[20px] h-[20px]"
                  />
                  <div className="text-[12px] font-normal leading-[16.8px] text-[#667085] dark:text-white">
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
                  <div className="text-[12px] font-normal leading-[16.8px] text-[#667085] dark:text-white">
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
                <div className="text-[12px] font-normal leading-[16.8px] text-[#667085] dark:text-white">
                  Status
                </div>
              </div>
              {/* DIVIDER */}
              <div className="h-[20px] border-[1px] border-[#667085]" />
              {/* SORT */}
              <div className="flex gap-[6px] items-center">
                <img src={sort} alt="Filter" className="w-[20px] h-[20px]" />
                <div className="text-[12px] font-normal leading-[16.8px] text-[#667085] dark:text-white">
                  Sort
                </div>
              </div>
              {/* DIVIDER */}
              <div className="h-[20px] border-[1px] border-[#667085]" />
              {/* SAVED FILTER */}
              <div className="flex gap-[6px] items-center">
                <img src={filter} alt="Filter" className="w-[20px] h-[20px]" />
                <div className="text-[12px] font-normal leading-[16.8px] text-[#667085] dark:text-white">
                  Saved Filter
                </div>
              </div>
            </div>
            <div className="font-medium text-[14px] leading-[19.6px] text-[#4786E7]">
              Clear
            </div>
          </div>
        </div>
        {/* DATA SECTION */}
        <div className="pl-[24px] pb-[12px]">
          {/* NEW CIENT SECTION */}
          <div className="w-full pl-[12px] flex items-center justify-between py-[12px]">
            {/* BUTTON */}
            <button
              onClick={addNewData}
              className="flex items-center gap-[6px] px-[12px] py-[6px] rounded bg-[#7474C9] text-white font-medium text-[12px] leading-[16.8px]"
            >
              New Client
              <img
                src={chevronDownWhite}
                alt="Chevron Down"
                className="fill-white"
              />
            </button>
            {/* PROSPECTS,CLIENTS,ARCHIVED SECTION */}
            <div>
              <button className="px-[12px] py-[4px] text-[12px] font-normal leading-[16.8px] text-[#344054] dark:text-white">
                Prospects(18)
              </button>
              <button className="px-[12px] py-[4px] text-[12px] font-normal leading-[16.8px] text-[#344054] border-b-[1px] border-b-[#4AC86E] dark:text-white">
                Clients(10)
              </button>
              <button className="px-[12px] py-[4px] text-[12px] font-normal leading-[16.8px] text-[#344054] dark:text-white">
                Archived(0)
              </button>
            </div>
          </div>
          {/* TABLE */}
          <Box sx={{ height: "auto", marginLeft: "12px" }}>
            <DataGrid<UserDataProps>
              rows={rowsWithAddClient}
              columns={columns.map((column) => ({
                ...column,
                renderEditCell:
                  column.field === "userData" || column.field === "assignee"
                    ? (params) => (
                        <EditableCell
                          params={params}
                          column={column.field}
                          onValueChange={(updatedValue) =>
                            handleRowUpdate({
                              ...params.row,
                              [column.field]: updatedValue,
                            })
                          }
                        />
                      )
                    : undefined,
              }))}
              hideFooter
              editMode="row"
              checkboxSelection
              showCellVerticalBorder
              showColumnVerticalBorder
              columnHeaderHeight={50}
              rowHeight={50}
              isCellEditable={(params) => params.id != "addClientRow"}
              slots={{
                columnHeaderSortIcon: () => (
                  <img src={sort} alt="Sort" className="w-[16px] h-[16px]" />
                ),
                columnMenuIcon: () => (
                  <img
                    src={dotsHorizontal}
                    alt="Dots Horizontal"
                    className="w-[16px] h-[16px]"
                  />
                ),
              }}
              slotProps={{
                columnsManagement: {},
              }}
              sx={{
                border: "0.5px solid #EAECF0",
                borderCollapse: "collapse",
                "& .MuiDataGrid-cell": {
                  borderBottom: "0.5px solid #EAECF0",
                  padding: "8px 16px",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "12px",
                  lineHeight: "16.8px",
                  color: "#344054",
                  fontWeight: "400",
                },
                "& .MuiDataGrid-checkboxInput": {
                  width: "20px",
                  height: "20px",
                  borderRadius: "6px",
                  borderWidth: "1px",
                },
                "& .MuiCheckbox-root": {
                  "&.Mui-checked": {
                    color: "#7474C9",
                  },
                  "&:hover": {
                    backgroundColor: "rgba(116, 116, 201, 0.2)",
                  },
                  "&.Mui-checked:hover": {
                    backgroundColor: "rgba(116, 116, 201, 0.2)",
                  },
                  "&.MuiSvgIcon-root": {
                    color: "#7474C9",
                    borderRadius: "6px",
                  },
                },
                "& .MuiDataGrid-columnHeaders": {
                  fontSize: "12px",
                  fontWeight: 500,
                  lineHeight: "16.8px",
                  textAlign: "left",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                  color: "#344054",
                },
                "& .MuiDataGrid-scrollbar": {
                  display: "none",
                },
                "& .MuiDataGrid-filler": {
                  display: "none",
                },
              }}
              className="!dark:text-white"
            />
          </Box>
        </div>
      </div>
    </section>
  );
};

export default MainHeroSection;
