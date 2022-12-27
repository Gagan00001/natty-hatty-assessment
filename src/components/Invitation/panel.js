import { Avatar, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const SentPanel = ({ val, innerVal }) => {
  return (
    <Box className="main-content main-content-container">
      <Box className="upper-content">
        <Typography component="span" className="textInsideUpperContent">
          {innerVal}&nbsp;
        </Typography>
        <Typography>{val}</Typography>
      </Box>
    </Box>
  );
};

const RecievedPanel = ({ val, innerVal }) => {
  return (
    <div className="recieved-main-content main-content-container">
      <Avatar sx={{ marginRight: "12px" }} />
      <Box className="upper-content" style={{}}>
        <Typography component="span" className="textInsideUpperContent">
          {innerVal}&nbsp;
        </Typography>
        {val}
      </Box>
      <div className="recieved-button-grp">
        <Button
          sx={{
            minWidth: 0,
            padding: "4px 12px",
            height: "40px",
            width: "42px",
            fontSize: "27px",
          }}
          variant="contained"
          color="success"
        >
          ✔
        </Button>
        <Button
          sx={{
            minWidth: 0,
            padding: "4px 12px",
            marginLeft: "8px",
            height: "40px",
            width: "42px",
            fontSize: "26px",
            fontWeight: 600,
          }}
          variant="contained"
          color="error"
        >
          x
        </Button>
      </div>
    </div>
  );
};

export { SentPanel, RecievedPanel };
