import { TextField, Typography } from "@mui/material";
import React from "react";

const TextInput = ({
  label = "",
  style,
  placeholder,
  isLabelInRow = false,
}) => {
  return (
    <div
      style={
        isLabelInRow
          ? {
              marginTop: 10,
              marginBottom: 10,
              width: 250,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              ...style,
            }
          : {
              marginTop: 10,
              marginBottom: 10,
              marginRight: 10,
              display: "flex",
              flexDirection: "column",
              ...style,
            }
      }
    >
      <Typography
        component="div"
        style={isLabelInRow ? { width: 90, fontSize: 10 } : { fontSize: 10 }}
      >
        {label}
      </Typography>
      <TextField
        placeholder={placeholder || ""}
        dir="right"
        sx={{
          "& .MuiInputBase-input": {
            height: 20,
            padding: 0.25,
            paddingLeft: 1,
            paddingRight: 1,
            fontSize: 10,
            display: "flex",
            flex: 1,
            backgroundColor: "#fff",
          },
        }}
      ></TextField>
    </div>
  );
};

export default TextInput;
