import React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { IconDotsVertical } from "@tabler/icons-react";
import BlankCard from "../../shared/BlankCard";
import SkeletonTable from "../loaders/skeletons/skeletonTable";
import CustomTextField from "../../forms/theme-elements/CustomTextField";
import CustomFormLabel from "../../forms/theme-elements/CustomFormLabel";
import { Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const CustomTable = ({
  rows,
  data,
  isLoading,
  headers,
  actionButtons,
  actionMenuItems,
  isCSV = false,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [searchTerm, setSearchTerm] = React.useState(""); // State to hold the search term
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Filter rows based on search term
  const filteredRows = rows.filter((row) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  //download csv
  const downloadCSV = () => {
    // Convert table data to CSV format
    const csvRows = [
      headers.join(","), // CSV header row
      ...rows.map((row) =>
        headers
          .map((fieldName) => {
            let cell = row[fieldName]; // Accessing the property of row using fieldName
            if (typeof cell === "object" && cell !== null) {
              cell = cell.name ? `"${cell.name}"` : "N/A"; // Handle objects, wrap in quotes to manage commas
            } else {
              cell = `"${cell}"`; // Convert all data to string and wrap in quotes
            }
            return cell;
          })
          .join(",")
      ),
    ].join("\n");

    // Create a Blob with the CSV content
    const blob = new Blob([csvRows], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "table-data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <BlankCard>
      <div className="mb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
        <div className="w-auto sm:w-[350px]">
          <CustomFormLabel>Search</CustomFormLabel>
          <CustomTextField
            fullWidth
            placeholder="search..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          {actionButtons.map((btn, index) => {
            return btn;
          })}
          {isCSV && (
            <Button startIcon={<FileDownloadIcon />} onClick={downloadCSV}>
              download CSV
            </Button>
          )}
        </div>
      </div>
      {isLoading ? (
        <SkeletonTable rowCount={5} columnsCount={3} />
      ) : (
        <TableContainer>
          <Table aria-label="simple table" sx={{ borderRadius: "25px" }}>
            <TableHead sx={{ backgroundColor: "#e5e7eb" }}>
              <TableRow>
                {headers.map((item, index) => (
                  <TableCell
                    key={index}
                    sx={index === 0 ? { borderRadius: " 15px 0 0 0" } : {}}
                  >
                    <Typography variant="h6">{item}</Typography>
                  </TableCell>
                ))}
                <TableCell sx={{ borderRadius: " 0 15px 0 0" }}></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {filteredRows.map((row: any, index: number) => {
                return (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    {Object.values(row).map((cell: any, i: number) => (
                      <TableCell scope="row" key={i}>
                        {typeof cell === "object" && cell !== null ? (
                          // Assuming you want to display the 'name' property of the object
                          // Adjust this logic based on how you want to display the object
                          <Typography variant="subtitle1" color="textSecondary">
                            {cell.name ? cell.name : "N/A"}{" "}
                            {/* Display 'N/A' if name is not available */}
                          </Typography>
                        ) : (
                          <Typography variant="subtitle1" color="textSecondary">
                            {cell}
                          </Typography>
                        )}
                      </TableCell>
                    ))}
                    <TableCell>
                      <IconButton
                        id="basic-button"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                      >
                        <IconDotsVertical width={18} />
                      </IconButton>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        {actionMenuItems.map((menu) =>
                          menu(handleClose, data[index])
                        )}
                      </Menu>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          {filteredRows.length === 0 && !isLoading && (
            <Typography textAlign="center" fontSize={16} py={12}>
              No item found
            </Typography>
          )}
        </TableContainer>
      )}
    </BlankCard>
  );
};

export default CustomTable;
