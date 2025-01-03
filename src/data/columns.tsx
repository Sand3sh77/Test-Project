export interface Column {
  accessorKey: string;
  header: string;
}

export const columns: Column[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "addedFrom",
    header: "Added from",
  },
  {
    accessorKey: "tags",
    header: "Tags",
  },
  {
    accessorKey: "internalId",
    header: "Internal Id",
  },
  {
    accessorKey: "clientId",
    header: "Client Id",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "clientPortal",
    header: "Client Portal",
  },
  {
    accessorKey: "assignee",
    header: "Assignee",
  },
  {
    accessorKey: "followers",
    header: "Followers",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "applications",
    header: "Applications",
  },
  {
    accessorKey: "lastUpdated",
    header: "Last Updated",
  },
];
