import React from "react";

import Activities from "../../components/Activities";
import BankAccounts from "../../components/BankAccounts";
import BillingAddress from "../../components/Billing Address";
import Family from "../../components/Family";
import ProfileDetails from "../../components/Profile";
import SubHeader from "../../components/SubHeader";
import Invitations from "../../components/Invitation";

const WebView = () => {
  return (
    <>
      <SubHeader />
      <div className="detail-wrapper">
        <div
          className=" flex profile-details"
          style={{ flexDirection: "column" }}
        >
          <div className="form-background">
            <ProfileDetails />
          </div>
          <div style={{ display: "flex", marginTop: "10px" }}>
            <div
              style={{
                display: "flex",
                flexGrow: 2,
                flexDirection: "column",
                marginRight: "10px",
              }}
            >
              <div className="form-background">
                <BankAccounts />
              </div>
              <div className="form-background" style={{ marginTop: "10px" }}>
                <BillingAddress />
              </div>
            </div>
            <div
              className="form-background"
              style={{ display: "flex", flexGrow: 1.2 }}
            >
              <Activities />
            </div>
          </div>
        </div>
        <div className="family-details" style={{ flexDirection: "column" }}>
          <div className="form-background">
            <Family />
          </div>
          <div className="form-background" style={{ marginRight: 10 }}>
            <Invitations />
          </div>
        </div>
      </div>
    </>
  );
};

export default WebView;
