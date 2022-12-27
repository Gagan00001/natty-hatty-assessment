import React from "react";
import Family from "../../components/Family";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Activities from "../../components/Activities";
import Invitation from "../../components/Invitation";

const MobileView = () => {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            classes={{ indicator: "tab-indicatior" }}
          >
            <Tab
              label="Profile"
              value="1"
              classes={{
                selected: "tab-selected-color",
                root: "tab-root-override",
              }}
            />
            <Tab
              label="Wallet"
              value="2"
              classes={{
                selected: "tab-selected-color",
                root: "tab-root-override",
              }}
            />
            <Tab
              label="Activities"
              value="3"
              classes={{
                selected: "tab-selected-color",
                root: "tab-root-override",
              }}
            />
            <Tab
              label="Invitation"
              value="4"
              classes={{
                selected: "tab-selected-color",
                root: "tab-root-override",
              }}
            />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ p: "12px" }}>
          <div className="form-background family-details">
            <Family />
          </div>
        </TabPanel>
        <TabPanel value="2">Algorithms</TabPanel>
        <TabPanel value="3">
          <Activities />
        </TabPanel>
        <TabPanel value="4">
          <Invitation />
        </TabPanel>
      </TabContext>
    </Box>
  );
};
export default MobileView;
