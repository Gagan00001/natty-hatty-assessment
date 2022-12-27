import React from "react";

import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import TextInput from "../Profile/textInput";

const Card = () => {
  return (
    <Box
      style={{
        padding: 10,
        flexDirection: "column",
        display: "flex",
        backgroundColor: "#f5f6f8",
      }}
    >
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: "flex",
          fontFamily: "monospace",
          fontWeight: 100,
          color: "inherit",
          textDecoration: "none",
          // paddingTop: '12px'
        }}
      >
        Billing Address
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 15,
        }}
      >
        <Checkbox defaultChecked size="small" />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            ml: 5,
            display: "flex",
            fontFamily: "monospace",
            fontWeight: 100,
            color: "inherit",
            textDecoration: "none",
            fontSize: 10,
            // paddingTop: '12px'
          }}
          style={{}}
        >
          Same as Home Address
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextInput label="First Name" />
          <TextInput label="Address Line 1" />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <TextInput label="Country" style={{ marginRight: 5 }} />
            <TextInput
              placeholder={"Select"}
              label="State/Province/Region"
              style={{ marginLeft: 5 }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextInput label="Last Name" />
          <TextInput label="Address Line 2" />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <TextInput
              placeholder={"Enter City Name"}
              label="City"
              style={{ marginRight: 5 }}
            />
            <TextInput
              placeholder={"Enter City Name"}
              label="Zip Code"
              style={{ marginLeft: 5 }}
            />
          </div>
        </div>
      </div>
      <div style={{ marginTop: 20, display: "flex", justifyContent: "end" }}>
        <Button
          variant="contained"
          size="small"
          style={{
            height: 20,
            width: 70,
            backgroundColor: "#232e3e",
            fontSize: 7,
          }}
        >
          Edit Details
        </Button>
      </div>
    </Box>
  );
};

export default Card;
