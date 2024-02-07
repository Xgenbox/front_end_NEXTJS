import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function CustomTabs({
  headers,
  content,
}: {
  headers: string[];
  content: JSX.Element[];
}) {
  const [value, setValue] = React.useState(0);
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleSelectTabClick = (value) => {
    setSelectedTab(value);
  };

  return (
    <>
      <Box sx={{ bgcolor: "background.paper" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={false}
          aria-label="scrollable prevent tabs example"
        >
          {headers.map((item, index) => (
            <Tab
              label={item}
              key={index}
              onClick={() => handleSelectTabClick(index)}
            />
          ))}
        </Tabs>
        <div className="h-4"></div>
        {content[selectedTab]}
      </Box>
    </>
  );
}
