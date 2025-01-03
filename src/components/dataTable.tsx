import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { UserData } from "../data/userData";
import { Column } from "../data/columns";

import sort from "../assets/svg/sort.svg";
import dotsHorizontal from "../assets/svg/dots-horizontal.svg";

interface DataTableProps {
  columns: Column[];
  data: UserData[];
}

export function DataTable({ columns, data }: DataTableProps) {
  return (
    <TableContainer
      sx={{
        maxWidth: "78vw",
        marginLeft: "12px",
        overflowY: "scroll",
        borderRadius: "8px",
        border: "0.5px solid #EAECF0",
      }}
      className="no-scrollbar"
    >
      <Table sx={{ width: "100%", height: "100%", borderCollapse: "collapse" }}>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                height: "50px",
                borderRight: "0.5px solid #EAECF0",
                px: "8px",
                py: "4px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <input
                type="checkbox"
                className="w-[20px] h-[20px] border-[1px] border-[#EAECF0] rounded-[6px]"
              />
            </TableCell>
            {columns.map((column, index) => (
              <TableCell
                key={index}
                sx={{
                  height: "50px",
                  minWidth: "150px",
                  borderRight: "0.5px solid #EAECF0",
                  px: "8px",
                  py: "4px",
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[2px]">
                    <span className="font-medium text-[12px] leading-[16.8px] text-[#344054] whitespace-nowrap text-ellipsis">
                      {column.header}
                    </span>
                    <img
                      src={sort}
                      alt="Sort"
                      className="w-[14px] h-[14px] flex-shrink-0"
                    />
                  </div>
                  <img
                    src={dotsHorizontal}
                    alt="More"
                    className="w-[13px] h-[13px] flex-shrink-0"
                  />
                </div>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length ? (
            data.map((row, index) => (
              <TableRow
                key={index}
                sx={{
                  "&:hover": { backgroundColor: "#F9FAFB" },
                  height: 50,
                }}
              >
                <TableCell
                  sx={{
                    height: "50px",
                    borderRight: "0.5px solid #EAECF0",
                    px: "8px",
                    py: "4px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="checkbox"
                    className="w-[20px] h-[20px] border-[1px] border-[#EAECF0] rounded-[6px]"
                  />
                </TableCell>
                {columns.map((column, index) => (
                  <TableCell
                    key={index}
                    sx={{
                      height: "50px",
                      borderRight: "0.5px solid #EAECF0",
                      px: "8px",
                      py: "4px",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                    }}
                  >
                    {column.accessorKey === "name" ? (
                      <div className="flex items-center min-w-[203px] gap-1">
                        <img
                          src={row.avatar}
                          alt="Avatar"
                          className="w-[28px] h-[28px] rounded"
                        />
                        <div>
                          <div className="font-normal text-[12px] leading-[16.8px] text-[#344054]">
                            {row.name}
                          </div>
                          <div className="font-normal text-[12px] leading-[16.8px] text-[#667085] text-nowrap">
                            {row.email}
                          </div>
                        </div>
                      </div>
                    ) : column.accessorKey === "assignee" ? (
                      <div className="flex items-center min-w-[215px] gap-1">
                        <img
                          src={row.assignee.avatar}
                          alt="Avatar"
                          className="w-[28px] h-[28px] rounded"
                        />
                        <div>
                          <div className="font-normal text-[12px] leading-[16.8px] text-[#344054]">
                            {row.assignee.name}
                          </div>
                          <div className="font-normal text-[12px] leading-[16.8px] text-[#667085] text-nowrap">
                            {row.assignee.desc}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="font-normal text-[12px] leading-[16.8px] text-[#667085]">
                        {row[column.accessorKey].toString()}
                      </div>
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={columns.length + 1}
                sx={{
                  height: 96,
                  textAlign: "center",
                  color: "gray",
                }}
              >
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
