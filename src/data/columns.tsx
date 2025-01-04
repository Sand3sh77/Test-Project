import { GridColDef } from "@mui/x-data-grid";
import uTurnRight from "../assets/svg/uturn-right.svg";
import EditableCell from "../components/editableCell";

export const columns: GridColDef[] = [
  {
    field: "userData",
    headerName: "Name",
    width: 200,
    renderCell: (params) => {
      return params.id !== "addClientRow" ? (
        <div className="flex items-center gap-[4px] h-fulla">
          <img
            src={params.value.avatar}
            alt={params.value.name}
            style={{
              width: 28,
              height: 28,
              borderRadius: "4px",
            }}
          />
          <div className="flex flex-col justify-center">
            <span className="text-xs font-regular text-[#344054] dark:text-white">
              {params.value.name}
            </span>
            <span className="text-xs font-regular text-[#667085] dark:text-white">
              {params.value.email}
            </span>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <span className="text-xs font-regular text-[#667085] dark:text-white">
            + Add Client's Details
          </span>
        </div>
      );
    },
    // renderEditCell: (params) => {
    //   return (
    //     <EditableCell
    //       value={params.value}
    //       onValueChange={(updatedData) => {
    //         const updatedRow = { ...params.row, userData: updatedData };
    //         params.api.updateRows([{ id: params.id, row: updatedRow }]);
    //       }}
    //     />
    //   );
    // },
    editable: true,
    filterable: false,
  },
  {
    field: "addedFrom",
    headerName: "Added From",
    width: 150,
    editable: true,
    filterable: false,
  },
  {
    field: "tags",
    headerName: "Tags",
    width: 100,
    editable: true,
    filterable: false,
  },
  {
    field: "internalId",
    headerName: "Internal ID",
    width: 120,
    editable: true,
    filterable: false,
  },
  {
    field: "clientId",
    headerName: "Client ID",
    width: 120,
    editable: true,
    filterable: false,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 130,
    editable: true,
    filterable: false,
  },
  {
    field: "clientPortal",
    headerName: "Client Portal",
    width: 150,
    editable: true,
    filterable: false,
  },
  {
    field: "assignee",
    headerName: "Assignee",
    width: 215,
    renderCell: (params) => {
      return params.id !== "addClientRow" ? (
        <div className="flex items-center justify-between gap-[20px] h-full">
          <div className="flex items-center gap-[4px] h-full">
            <img
              src={params.value.avatar}
              alt={params.value.name}
              style={{
                width: 28,
                height: 28,
                borderRadius: "4px",
              }}
            />
            <div className="flex flex-col justify-center">
              <span className="text-xs font-regular text-[#344054] dark:text-white">
                {params.value.name}
              </span>
              <span className="text-xs font-regular text-[#344054] dark:text-white">
                {params.value.desc}
              </span>
            </div>
          </div>
          <img src={uTurnRight} height={15} width={15} className="" />
        </div>
      ) : (
        ""
      );
    },
    // renderEditCell: (params) => {
    //   return (
    //     <EditableCell
    //       value={params.value}
    //       onValueChange={(updatedAssignee) => {
    //         const updatedRow = { ...params.row, assignee: updatedAssignee };
    //         params.api.updateRows([{ id: params.id, row: updatedRow }]);
    //       }}
    //     />
    //   );
    // },
    editable: true,
    filterable: false,
  },
  {
    field: "followers",
    headerName: "Followers",
    width: 140,
    renderCell: (params) => {
      return params.id !== "addClientRow" ? (
        <div className="w-full flex items-center justify-between gap-[20px] h-full">
          {params.value}
          <img src={uTurnRight} height={15} width={15} className="" />
        </div>
      ) : (
        ""
      );
    },
    editable: true,
    filterable: false,
  },
  {
    field: "status",
    headerName: "Status",
    width: 120,
    cellClassName: "noPaddingCell",
    renderCell: (params) => {
      return params.id !== "addClientRow" ? (
        <span
          style={{
            backgroundColor:
              params.value === "Completed" ? "#4AC86E" : "#4786E7",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {params.value}
        </span>
      ) : (
        ""
      );
    },
    editable: true,
    filterable: false,
  },
  {
    field: "applications",
    headerName: "Applications",
    width: 120,
    editable: true,
    filterable: false,
  },
  {
    field: "lastUpdated",
    headerName: "Last Updated",
    width: 150,
    editable: true,
    filterable: false,
  },
  {
    field: "addColumn",
    headerName: "+Add Column",
    editable: false,
    sortable: false,
    filterable: false,
    hideable: false,
  },
];
