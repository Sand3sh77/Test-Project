import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  {
    field: "userData",
    headerName: "Name",
    width: 200,
    renderCell: (params) => (
      <div className="flex items-center gap-2 h-full">
        <img
          src={params.value.avatar}
          alt={params.value.name}
          style={{
            width: 30,
            height: 30,
            borderRadius: "50%",
            marginRight: 8,
          }}
        />
        <div className="flex flex-col justify-center">
          <span className="text-sm font-medium">{params.value.name}</span>
          <span className="text-xs text-gray-500">{params.value.email}</span>
        </div>
      </div>
    ),
    editable: true,
  },
  {
    field: "addedFrom",
    headerName: "Added From",
    width: 150,
    editable: true,
  },
  {
    field: "tags",
    headerName: "Tags",
    width: 100,
    editable: true,
  },
  {
    field: "internalId",
    headerName: "Internal ID",
    width: 120,
    editable: true,
  },
  {
    field: "clientId",
    headerName: "Client ID",
    width: 120,
    editable: true,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 130,
    editable: true,
  },
  {
    field: "clientPortal",
    headerName: "Client Portal",
    width: 150,
    editable: true,
  },
  {
    field: "assignee",
    headerName: "Assignee",
    width: 200,
    renderCell: (params) => (
      <div className="flex items-center gap-2 h-full">
        <img
          src={params.value.avatar}
          alt={params.value.name}
          style={{
            width: 30,
            height: 30,
            borderRadius: "50%",
            marginRight: 8,
          }}
        />
        <div className="flex flex-col justify-center">
          <span className="text-sm font-medium">{params.value.name}</span>
          <span className="text-xs text-gray-500">{params.value.desc}</span>
        </div>
      </div>
    ),
    editable: false,
  },
  {
    field: "followers",
    headerName: "Followers",
    width: 120,
    editable: true,
  },
  {
    field: "status",
    headerName: "Status",
    width: 120,
    editable: true,
  },
  {
    field: "applications",
    headerName: "Applications",
    width: 120,
    editable: true,
  },
  {
    field: "lastUpdated",
    headerName: "Last Updated",
    width: 150,
    editable: true,
  },
];
