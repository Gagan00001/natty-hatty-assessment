import React, { useState } from "react";
import Typography from "@mui/material/Typography";

import { SentPanel, RecievedPanel } from "./panel";
import "./invitation.scss";

function Invitation() {
  const [active, setActive] = useState("sent");
  const sentData = [
    {
      val: "have invited johnsmith@gmail.com to become family member",
      innerVal: "You",
    },
    {
      val: "have invited johnsmith@gmail.com to become family member",
      innerVal: "You",
    },
    {
      val: "have invited johnsmith@gmail.com to become family member",
      innerVal: "You",
    },
    {
      val: "have invited johnsmith@gmail.com to become family member",
      innerVal: "You",
    },
  ];

  return (
    <div className="invitation">
      <div className="invitation-header">
        <Typography
          variant="h6"
          noWrap
          component="div"
          href="/"
          className="header-heading"
          sx={{
            mr: 2,
            display: "flex",
            fontFamily: "monospace",
            color: "inherit",
            textDecoration: "none",
            // paddingTop: '12px'
          }}
        >
          Invitations
        </Typography>
        <div className="invitation-header-button">
          <div
            onClick={() => setActive("sent")}
            tabIndex={-1}
            role="button"
            className={`header-button ${
              active === "sent" ? "active-state" : ""
            }`}
          >
            Sent(5)
          </div>
          <div
            onClick={() => setActive("recieved")}
            tabIndex={-1}
            role="button"
            className={`header-button ${
              active === "recieved" ? "active-state" : ""
            }`}
          >
            Received(5)
          </div>
        </div>
      </div>
      <div className="sent-panel-container">
        {sentData &&
          sentData.map(({ val, innerVal }, index) => (
            <>
              {active === "sent" && (
                <SentPanel val={val} innerVal={innerVal} index={index} />
              )}
              {active === "recieved" && (
                <RecievedPanel val={val} innerVal={innerVal} index={index} />
              )}
            </>
          ))}
      </div>
    </div>
  );
}

export default Invitation;
