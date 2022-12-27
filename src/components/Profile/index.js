import { Avatar, Badge, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import TextInput from "./textInput";

const ProfileDetails = () => {
  return (
    <Box
      style={{
        flexDirection: "row",
        display: "flex",
      }}
    >
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          width: 230,
        }}
      >
        <div>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <Avatar
                sx={{ height: 20, width: 20, backgroundColor: "#292" }}
              ></Avatar>
            }
          >
            <Avatar sx={{ width: 64, height: 64 }} />
          </Badge>
        </div>
        <div
          style={{ flexDirection: "column", display: "flex", marginRight: 30 }}
        >
          <Typography style={{ fontWeight: 600 }}>John Smith</Typography>
          <Typography fontSize={8}>Main St. Farmington, CA 123</Typography>
        </div>
      </div>
      <div
        style={{
          width: 0.5,
          backgroundColor: "#ddd",
          marginTop: 10,
          marginBottom: 10,
          borderRadius: 50,
        }}
      ></div>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          flex: 1,
          justifyContent: "space-around",
        }}
      >
        <div>
          <TextInput label="First Name" isLabelInRow="row" />
          <TextInput label="Last Name" isLabelInRow="row" />
          <TextInput label="Email" isLabelInRow="row" />
        </div>
        <div>
          <TextInput label="Phone" isLabelInRow="row" />
          <TextInput label="Graduation Year" isLabelInRow="row" />
          <TextInput label="Date of Birth" isLabelInRow="row" />
        </div>
        <div
          style={{
            flexDirection: "column",
            display: "flex",
            justifyContent: "space-around",
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <Button
            variant="contained"
            size="small"
            style={{
              height: 20,
              width: 96,
              backgroundColor: "#35621c",
              fontSize: 7,
            }}
          >
            Save Changes
          </Button>
          <Button
            variant="contained"
            size="small"
            style={{
              height: 20,
              width: 96,
              backgroundColor: "#232e3e",
              fontSize: 7,
            }}
          >
            Change Password
          </Button>
          <Button
            variant="contained"
            size="small"
            style={{
              height: 20,
              width: 96,
              backgroundColor: "#e63f36",
              fontSize: 7,
            }}
          >
            Leave Family
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default ProfileDetails;
