import { Box } from "@mui/system";
import React from "react";
import Activities from "../../components/Activities";
import BankAccounts from "../../components/BankAccounts";
import Family from "../../components/Family";
import ProfileDetails from "../../components/Profile";

const TabView = () => {
  return (
    <div className="detail-wrapper">
      <Box
        sx={{
          display: "flex",
        }}
      >
        <div className="form-background">
          <ProfileDetails />
        </div>
        <div className="form-background family-details">
          <Family />
        </div>
      </Box>
      {/* <Box>
                <div className='form-background'>
                    <BankAccounts />
                </div>

            </Box>
            <Box>
                <div className='form-background'>
                    <Activities />
                </div>

            </Box> */}
    </div>
  );
};
export default TabView;
