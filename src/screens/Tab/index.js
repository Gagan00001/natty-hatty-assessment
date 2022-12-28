import React from "react";
import Box from "@mui/system/Box";

import Family from "../../components/Family";
import { ProfileSubDetails } from "../../components/Profile";
import BankAccounts from "../../components/BankAccounts";
import BilingAddress from "../../components/Billing Address";
import Activities from "../../components/Activities";
import Invitation from "../../components/Invitation";

const TabView = () => {
  return (
    <div
      className="detail-wrapper"
      style={{ display: "flex", flexDirection: "column", marginTop: 20 }}
    >
      <Box sx={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
        <div className="form-background" style={{ flexGrow: 4 }}>
          <ProfileSubDetails />
        </div>
        <div
          className="form-background"
          style={{ display: "flex", flexGrow: 1, marginLeft: 10 }}
        >
          <Family />
        </div>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
        <div
          className="form-background"
          style={{ display: "flex", flexGrow: 1 }}
        >
          <BankAccounts style={{ flexDirection: "column" }} />
        </div>
        <div
          className="form-background"
          style={{ display: "flex", flexGrow: 1, marginLeft: 10 }}
        >
          <BilingAddress />
        </div>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "10px",
        }}
      >
        <div
          className="form-background"
          style={{ display: "flex", flexGrow: 1, marginRight: "10px" }}
        >
          <Activities />
        </div>
        <div className="form-background" style={{ display: "flex" }}>
          <Invitation />
        </div>
      </Box>
    </div>
  );
};
export default TabView;
